import datetime
import uuid
from django.db import models
from faculty.models import Faculty
import jwt
from django.conf import settings
# Create your models here.


class Committee(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    name = models.CharField(max_length=50, blank=False)
    email = models.EmailField(blank=False)
    desc = models.TextField(blank=False)
    faculty = models.ForeignKey(Faculty, on_delete=models.CASCADE)
    password = models.CharField(max_length=255)
    refreshToken = models.CharField(max_length=255, unique=True, blank=True)
    createdOn = models.TimeField(auto_now_add=True)

    def getAccessToken(self):
        payload = {
            'id': self.id,
            'exp': datetime.datetime.utcnow() + datetime.timedelta(minutes=30),
            'access': settings.COMMITTEE_ACCESS
        }
        # create a environment variable for secret
        jwt_token = jwt.encode(
            payload, settings.SECRET_TOKEN_KEY, algorithm=settings.ALGORITHM)
        return jwt_token

    def getRefreshToken(self):
        payload = {
            'id': self.id,
            'exp': datetime.datetime.utcnow()+ datetime.timedelta(days=7),
            'access': settings.COMMITTEE_ACCESS
        }
        jwt_token=jwt.encode(
            payload, settings.SECRET_TOKEN_KEY, algorithm=settings.ALGORITHM)
        self.refreshToken=jwt_token
        self.save()
        return jwt_token

    def getPasswordRefreshToken(self):
        payload={
            'id': self.id,
            'exp': datetime.datetime.utcnow()+ datetime.timedelta(minutes=15)
        }
        reset_token=jwt.encode(
            payload, self.password, algorithm=settings.ALGORITHM)
        # self.
        return reset_token

    def __str__(self):
        return "{} ({})".format(self.name,self.id)
