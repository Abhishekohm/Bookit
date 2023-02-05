from rest_framework import serializers

from .models import Student


class StudentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Student
        fields = [
            'id',
            'name',
            'branch',
            'email',
            'password',
        ]


class AuthStudentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Student
        fields = [
            'id',
            'email',
            'password'
        ]


# class TokenSerializer(serializers.ModelSerializer):
#     class Meta:
#         model = Tokenstable
#         fields = [
#             'userid',
#             'resetToken',
#         ]
