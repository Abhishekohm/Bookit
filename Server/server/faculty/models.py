import datetime
from django.db import models
import uuid
import jwt
from django.conf import settings

class Faculty(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    name = models.CharField(max_length=50, blank=False)
    email = models.EmailField(blank=False)
    password = models.CharField(max_length=255)
    refreshToken = models.CharField(max_length=255, unique=True, blank=True)
    createdOn = models.TimeField(auto_now_add=True)

    def getAccessToken(self):
        payload = {
            'id': self.id,
            'exp': datetime.datetime.utcnow() + datetime.timedelta(minutes=30),
            'access': settings.FACULTY_ACCESS
        }
        # create a environment variable for secret
        jwt_token = jwt.encode(
            payload, settings.SECRET_TOKEN_KEY, algorithm=settings.ALGORITHM)
        return jwt_token

    def getRefreshToken(self):
        payload = {
            'id': self.id,
            'exp': datetime.datetime.utcnow() + datetime.timedelta(days=7),
            'access': settings.FACULTY_ACCESS
        }
        jwt_token = jwt.encode(
            payload, settings.SECRET_TOKEN_KEY, algorithm=settings.ALGORITHM)
        self.refreshToken = jwt_token
        self.save()
        return jwt_token

    def getPasswordRefreshToken(self):
        payload = {
            'id': self.id,
            'exp': datetime.datetime.utcnow() + datetime.timedelta(minutes=15)
        }
        reset_token = jwt.encode(
            payload, self.password, algorithm=settings.ALGORITHM)
        # self.
        return reset_token


    def __str__(self):
        return self.name


class Department(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    name = models.CharField(max_length=50)
    dept_head = models.ForeignKey(Faculty, on_delete=models.CASCADE)

    def __str__(self):
        return self.name
