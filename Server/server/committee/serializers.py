from rest_framework import serializers

from .models import Committee


class CommitteeSerializer(serializers.ModelSerializer):
    class Meta:
        model = Committee
        fields = [
            'name',
            'email',
            'desc',
            'faculty',
            'password',
        ]


class AuthCommitteeSerializer(serializers.ModelSerializer):
    class Meta:
        model = Committee
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
