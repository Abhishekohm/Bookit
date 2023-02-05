from django.forms import ModelForm
from faculty.models import Faculty

# Create the form class.


class FacultyForm(ModelForm):
    class Meta:
        model = Faculty
        fields = ['name', 'email', 'password']
