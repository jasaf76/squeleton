# Generated by Django 4.0.6 on 2022-09-04 11:59

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('user', '0003_useraccount_requested_verified_and_more'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='useraccount',
            name='sales',
        ),
        migrations.RemoveField(
            model_name='useraccount',
            name='total_earnings',
        ),
        migrations.RemoveField(
            model_name='useraccount',
            name='total_spent',
        ),
    ]