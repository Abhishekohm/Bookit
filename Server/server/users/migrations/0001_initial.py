# Generated by Django 4.1.1 on 2023-02-04 14:05

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = []

    operations = [
        migrations.CreateModel(
            name="Tokenstable",
            fields=[
                (
                    "id",
                    models.BigAutoField(
                        auto_created=True,
                        primary_key=True,
                        serialize=False,
                        verbose_name="ID",
                    ),
                ),
                ("userid", models.IntegerField(default=2, unique=True)),
                ("resetToken", models.TextField()),
            ],
        ),
        migrations.CreateModel(
            name="User",
            fields=[
                (
                    "id",
                    models.BigAutoField(
                        auto_created=True,
                        primary_key=True,
                        serialize=False,
                        verbose_name="ID",
                    ),
                ),
                ("username", models.CharField(max_length=50, unique=True)),
                ("email", models.CharField(max_length=150, unique=True)),
                ("password", models.CharField(max_length=255)),
                (
                    "refreshToken",
                    models.CharField(blank=True, max_length=255, unique=True),
                ),
                ("createdOn", models.TimeField(auto_now_add=True)),
            ],
        ),
    ]
