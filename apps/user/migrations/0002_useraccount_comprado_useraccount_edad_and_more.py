# Generated by Django 4.0.6 on 2022-09-04 10:19

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('user', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='useraccount',
            name='comprado',
            field=models.BooleanField(blank=True, null=True),
        ),
        migrations.AddField(
            model_name='useraccount',
            name='edad',
            field=models.IntegerField(blank=True, null=True),
        ),
        migrations.AddField(
            model_name='useraccount',
            name='experiencia',
            field=models.DecimalField(blank=True, decimal_places=2, max_digits=3, null=True),
        ),
        migrations.AddField(
            model_name='useraccount',
            name='pais',
            field=models.CharField(blank=True, max_length=255, null=True),
        ),
        migrations.AddField(
            model_name='useraccount',
            name='salario',
            field=models.IntegerField(blank=True, null=True),
        ),
    ]