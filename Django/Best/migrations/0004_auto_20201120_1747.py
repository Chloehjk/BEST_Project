# Generated by Django 3.1.1 on 2020-11-20 08:47

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('Best', '0003_meanofper'),
    ]

    operations = [
        migrations.AlterField(
            model_name='meanofper',
            name='per',
            field=models.FloatField(),
        ),
    ]
