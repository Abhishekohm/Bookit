import jwt
from rest_framework.response import Response
from faculty.models import Faculty
from committee.models import Committee
from student.models import Student
from functools import wraps
from django.conf import settings


def login_required(view_function):
    @wraps(view_function)
    def wrap(request, *args, **kwargs):
        print(request.headers)
        try:
            jwt_token = request.headers.get('Authorization')
            if jwt_token is None:
                response = Response({
                    'detail': "Authorization token missing",
                }, status=401)
                return response

        except Exception as e:
            print("above exception response")
            return Response({
                'details': str(e)
            }, status=500)
        try:
            jwt_token = jwt_token.split()[1]
            print(jwt_token)
            user_obj = jwt.decode(
                jwt_token, settings.SECRET_TOKEN_KEY, algorithms=[settings.ALGORITHM])
            print(user_obj)
            user_id = user_obj['id']
            user_access = int(user_obj['access'])
            print(user_access)
            var = settings.FACULTY_ACCESS
            print(var)
            if user_access == int(settings.FACULTY_ACCESS):
                request.user.id = Faculty.objects.get(pk=user_id).id
                request.user.access = user_access
            elif user_access == int(settings.COMMITTEE_ACCESS):
                print("Test")
                request.user.id = Committee.objects.get(pk=user_id).id
                request.user.access = user_access
            elif user_access == int(settings.STUDENT_ACCESS):
                request.user.id = Student.objects.get(pk=user_id).id
                request.user.access = user_access

            print(request.user.id)
        except jwt.ExpiredSignatureError:
            return Response({
                'detail': "Access token expired."
            }, status=403)
        except Exception as e:
            return Response({
                'detail': "decode or token missing " + str(e)
            }, status=500)
        return view_function(request, *args, **kwargs)
    return wrap
