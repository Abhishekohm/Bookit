from django.shortcuts import render
from rest_framework.decorators import api_view
from rest_framework.exceptions import AuthenticationFailed, NotFound
from .models import Faculty
from .serializers import AuthCommitteeSerializer,CommitteeSerializer
from rest_framework.response import Response
from django.contrib.auth.hashers import check_password, make_password
from .models import Committee
from django.db.utils import IntegrityError


@api_view(['POST'])
def login(request):
    email = request.data.get('email')
    password = request.data.get('password')
    # print(username, password)

    user = Faculty.objects.filter(email=email).first()

    try:
        instance = user
        user = AuthCommitteeSerializer(user).data
    except Exception as e:
        return Response({
            'detail': "Error in serializing the data -> Specific error is " + str(e)
        }, status=500)

    # checking password
    if check_password(password, user.get('password')) == False:
        return Response({
            'detail': 'username or password is incorrect'
        }, status=401)

    # generating tokens
    try:
        access_token = instance.getAccessToken()
        refresh_token = instance.getRefreshToken()
        print('access_token => ', access_token)
        print('refresh_token => ', refresh_token)
    except Exception as e:
        return Response({
            'detail': "Error in generating tokens -> Specific error is " + str(e)
        }, status=500)

    response = Response({
        'user': user,
        'access_token': access_token,
        'access': request.POST.get('access'),
    })
    response.set_cookie('jwt_refresh_token', refresh_token, httponly=True)
    return response


@api_view(['GET','POST'])
def register(request):
    if request.method=='POST':
        data = {
            'name' : request.POST.get('name'),
            'email' : request.POST.get('email'),
            'desc' : request.POST.get('desc'),
            # Get id from the frontend,
            'faculty' : request.POST.get('faculty'),
            'password' : request.POST.get('password'),
        }
        

        committee_inst = CommitteeSerializer(data=data)

        if committee_inst.is_valid():
            # print("pass")
            # print("username - " + username, "pass - "+password, "email - " + email)
            # IntegrityError
            try:
                instance = Committee(name=data['name'],email=data['email'],password=make_password(data['password']),desc = data['desc'],faculty=Faculty.objects.get(id=data['faculty']))
                # instance.password = make_password(data['password'])
                instance.save()
            except IntegrityError as e:
                return Response({
                    'detail': "User already present -> " + str(e)
                }, status=409)
            except:
                return Response({
                    'detail': "Some database error has occured."
                }, status=500)

            try:
                user = CommitteeSerializer(instance).data
                access_token = instance.getAccessToken()
                refresh_token = instance.getRefreshToken()
            except Exception as e:
                return Response({
                    'detail': "Error in serializing data or generating tokens -> Specific error is " + str(e)
                }, status=500)

            print('access_token => ', access_token)
            print('refresh_token => ', refresh_token)
            response = Response({
                'user': user,
                'access_token': access_token
            })
            response.set_cookie('jwt_refresh_token', refresh_token, httponly=True)
            print(response)
            return response
        
        elif request.method=='GET':
            faculty = Faculty.objects.all()

            list = []
            for fac in faculty:
                temp = {
                    'name': fac.name,
                    'id': fac.id,
                }
                list.append(temp)

            return Response({
                'faculty_list': list,
            },status=200)