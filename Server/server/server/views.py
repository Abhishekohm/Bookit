from django.shortcuts import render
from rest_framework.decorators import api_view
from faculty.models import Faculty
from committee.models import Committee
from student.models import Student
import requests
from django.urls import reverse
from rest_framework.exceptions import AuthenticationFailed, NotFound
from django.conf import settings
from rest_framework.response import Response
from django.http import HttpRequest


@api_view(['POST'])
def login(request):
    email = request.data.get('email')
    password = request.data.get('password')
    print(request.data)
    print(email)
    print(password)

    if email is None or password is None:
        raise AuthenticationFailed(detail="dnfdsjnfj are empty.", code=406)

    if Faculty.objects.filter(email=email).exists():
        print("Inside Faculty")
        print(Faculty.objects.get(email=email))

        data = {
            'email': email,
            'password': password,
            'access': settings.FACULTY_ACCESS
        }
        resp = requests.post(
            "http://" + HttpRequest.get_host(request) + "/faculty/login/", data=data)
        print(resp)
        return Response({
            'details' : resp.json(),
            # 'access_token' : resp.json().access_token
            }
        )
  
    elif Committee.objects.filter(email=email).exists():
        print("Inside Committee.")
        print(Committee.objects.get(email=email))


        data = {
            'email': email,
            'password': password,
            'access': settings.COMMITTEE_ACCESS
        }
        resp = requests.post(
            "http://" + HttpRequest.get_host(request) + "/committee/login/", data=data)
        print(resp)
        return Response({
            'details' : resp.json(),
            # 'access_token' : resp.json().access_token
            }
        )

    
    elif Student.objects.filter(email=email).exists():
        print("Inside Student.")
        user = Student.objects.get(email=email)
        print(user)
        data = {
            'email': email,
            'password': password,
            'access': settings.STUDENT_ACCESS
        }
        print("http://" + HttpRequest.get_host(request) + "/student/login/")
        resp = requests.post(
            "http://" + HttpRequest.get_host(request) + "/student/login/", data=data)
        print(resp.json())
        
        return Response({
            'details' : resp.json(),
            # 'access_token' : resp.json().access_token
            }
        )
    else:
        return Response({
            'details': "User does not exist."
        })

