from rest_framework import serializers

from .models import Faculty


class FacultySerializer(serializers.ModelSerializer):
    class Meta:
        model = Faculty
        fields = [
            'id',
            'name',
            'email',
            'password',
        ]


class AuthFacultySerializer(serializers.ModelSerializer):
    class Meta:
        model = Faculty
        fields = [
            'id',
            'name',
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
