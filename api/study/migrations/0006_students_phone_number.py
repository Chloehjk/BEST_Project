# Generated by Django 3.1.1 on 2020-09-17 00:58

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('study', '0005_scores_reg_date'),
    ]

    operations = [
        migrations.AddField(
            model_name='students',
            name='phone_number',
            field=models.CharField(max_length=13, null=True),
        ),
    ]
