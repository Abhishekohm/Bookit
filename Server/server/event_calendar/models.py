import uuid
from django.db import models
from faculty.models import Department
from committee.models import Committee
from django.core.validators import MaxValueValidator,MinValueValidator

# Create your models here.


class Slot(models.Model):
    id = models.UUIDField(default=uuid.uuid4, primary_key=True,editable=False)
    name = models.CharField(max_length=5, blank=True)
    start_time = models.TimeField()
    end_time = models.TimeField()

    def __str__(self):
        return "{} {} - {}".format(self.name,self.start_time,self.end_time)



class Room(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    name = models.CharField(max_length=50, blank=False)
    capacity = models.IntegerField(validators=[MinValueValidator(0)])
    isLab = models.BooleanField()
    hasProjector = models.BooleanField()
    dept_id = models.ForeignKey(Department, on_delete=models.CASCADE)

    def __str__(self):
        return "{} ({})".format(self.name,self.id)
    

class Event(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    title = models.CharField(max_length=100, blank=False)
    description = models.TextField()
    room = models.ForeignKey(Room, on_delete=models.CASCADE)
    committee = models.ForeignKey(Committee, on_delete=models.CASCADE)
    status = models.IntegerField(validators=[MaxValueValidator(1),MinValueValidator(-1)])
    registrations = models.IntegerField(validators=[MinValueValidator(0)])
    

    def __str__(self):
        return self.title
class RoomCalendar(models.Model):
    id = models.UUIDField(default=uuid.uuid4, primary_key=True,editable=False)
    room = models.ForeignKey(Room,on_delete=models.CASCADE)
    date = models.DateField(blank=False)
    slot = models.ForeignKey(Slot,on_delete=models.CASCADE)
    event = models.ForeignKey(Event,on_delete=models.CASCADE)

    def __str__(self):
        return "{} {} {} {}".format(self.room,self.date,self.slot,self.event)
    



class Holiday(models.Model):
    id = models.UUIDField(default=uuid.uuid4, primary_key=True,editable=False)
    date = models.DateField(blank=False)

    def __str__(self):
        return str(self.date)
    





