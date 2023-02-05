from django.shortcuts import render
from rest_framework.decorators import api_view
from rest_framework import request
from rest_framework.response import Response
from .models import Room, RoomCalendar, Slot, Holiday, Event
from committee.models import Committee
from django.core.mail import send_mail
from .decorators import login_required

import datetime
import calendar
from django.template.loader import render_to_string
from django.core.mail import send_mail
from django.conf import settings
# Create your views here.


def findDay(date):
    born = datetime.datetime.strptime(date, '%d %m %Y').weekday()
    return (calendar.day_name[born])


def isWeekDay(day):
    week_days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday']
    return day in week_days


@api_view(['GET'])
def get_rooms(request):
    isLab = request.GET.get('isLab')
    hasProjector = request.GET.get('hasProjector')
    capacity = request.GET.get('capacity')

    rooms = Room.objects.filter(isLab=isLab)
    if hasProjector == True:
        rooms = rooms.filter(hasProjector=hasProjector)

    rooms = rooms.all()

    res = []
    for room in rooms:
        if int(room.capacity) >= int(capacity):
            res.append({'id': room.id, 'name': room.name,
                       'capacity': room.capacity})
    return Response(res)


@api_view(['GET'])
def get_slots(request):
    date = request.GET.get('date')
    date_list = date.split('-')
    date = datetime.date(int(date_list[2]), int(
        date_list[1]), int(date_list[0]))
    room_id = request.GET.get('room_id')

    room = Room.objects.filter(id=room_id).first()
    room_calender_item = RoomCalendar.objects.filter(
        room=room).filter(date=date).all().values()

    slots = [slot for slot in Slot.objects.all()]
    for rmi in room_calender_item:
        slot = Slot.objects.filter(id=rmi['slot_id']).first()
        slots.remove(slot)

    res = [{'slot_id': slot.id, 'start_time': slot.start_time.strftime(
        "%H:%M:%S"), 'end_time': slot.end_time.strftime(
        "%H:%M:%S")} for slot in slots]
    holidays = Holiday.objects.all()
    dt = "{} {} {}".format(date.day, date.month, date.year)
    for r in res:
        if date in holidays or not isWeekDay(findDay(str(dt))):
            r['warning'] = False
        else:
            if r['slot_id'] != 'S5':
                r['warning'] = True
            else:
                r['warning'] = False

    return Response(res)


@api_view(['POST'])
@login_required
def add_event(request):
    
    if request.user.access == int(settings.COMMITTEE_ACCESS):
        title = request.POST.get('title')
        desc = request.POST.get('description')
        room_id = request.POST.get('room_id')
        committee_id = request.POST.get('committee_id')
        date = request.POST.get('date')
        slot_id = request.POST.get('slot_id')

        date_list = date.split('-')
        date_list.reverse()
        date = '-'.join(date_list)

        room = Room.objects.filter(id=room_id).first()
        committee = Committee.objects.filter(id=committee_id).first()
        slot = Slot.objects.filter(id=slot_id).first()

        try:
            event = Event(title=title, description=desc,
                        room=room, committee=committee, status=0, registrations=0)
            event.save()
            roomCalender = RoomCalendar(
                room=room, date=date, slot=slot, event=event)
            roomCalender.save()

        except:
            return Response('Failed to add event')

        faculty_email = committee.faculty.email
        venue_email = room.dept_id.dept_head.email
        print(faculty_email)
        print(venue_email)
        data = {
            'committee': committee.name,
            'title': event.title,
            'desc': event.description,
            'date': date,
            'start_time': slot.start_time,
            'end_time': slot.end_time,
            'link': "www.google.com"
        }
        msg_plain = render_to_string('test.txt')
        msg_html = render_to_string('test.html', {'data': data})
        try:
            send_mail("{} event by {}".format(event.title,committee.name),
                                    msg_plain,
                                    settings.EMAIL_HOST_USER,
                                    recipient_list=[faculty_email],
                                    html_message=msg_html)
            send_mail("{} event by {}".format(event.title,committee.name),
                                    msg_plain,
                                    settings.EMAIL_HOST_USER,
                                    recipient_list=[venue_email],
                                    html_message=msg_html)
            return Response('Success')
        except:
            return Response('Failed to send email')
    else:
        return Response('Unauthorized response')


@api_view(['GET'])
def get_calender(request):
    room_id = request.GET.get('room_id')
    if room_id is not None:
        room = Room.objects.filter(id=room_id).first()
        calendar = RoomCalendar.objects.filter(room=room).all()
    else:
        calendar = RoomCalendar.objects.all()
    return Response([{
        "event_title": item.event.title, 
        "event_description": item.event.description, 
        "committee": item.event.committee.name,  
        "date": item.date, 
        "slot": item.slot.name, 
    } for item in calendar])

@api_view(['GET'])
@login_required
def get_events(request):

    events = Event.objects.filter(status=val)

    if request.user.access != int(settings.STUDENT_ACCESS):
        val = request.GET.get('value')
        events.filter(id=request.user.id)
    else:
        val = 1
    
    events = events.all()
    return Response([{
        'title': event.title,
        'description': event.description,
        'room': event.room.name,
        'committee': event.committee.name,
        'registrations': event.registrations
    } for event in events])
    
    


