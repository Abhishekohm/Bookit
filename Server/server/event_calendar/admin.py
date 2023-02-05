from django.contrib import admin
from event_calendar.models import RoomCalendar,Slot,Holiday,Room,Event

# Register your models here.
admin.site.register(RoomCalendar)
admin.site.register(Slot)
admin.site.register(Holiday)
admin.site.register(Room)
admin.site.register(Event)
