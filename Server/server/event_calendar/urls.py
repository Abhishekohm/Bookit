
from django.urls import path
from .views import get_slots, get_rooms, add_event, get_calender, get_events

urlpatterns = [
    path('slot/', get_slots),
    path('room/', get_rooms),
    path('add-event/', add_event),
    path('calendar/', get_calender),
    path('events/',get_events)
]
