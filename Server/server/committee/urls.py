from django.urls import path
from committee.views import login,register

app_name = 'committee'

urlpatterns = [
    path('login/', login, name='login'),
    path('register/', register, name='register')
]
