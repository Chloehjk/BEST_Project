# Generated by Django 3.1.1 on 2020-11-26 02:47

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('Best', '0007_pointdate'),
    ]

    operations = [
        migrations.AlterField(
            model_name='pointdate',
            name='point1',
            field=models.CharField(max_length=30),
        ),
        migrations.AlterField(
            model_name='pointdate',
            name='point2',
            field=models.CharField(max_length=30),
        ),
        migrations.AlterField(
            model_name='pointdate',
            name='point3',
            field=models.CharField(max_length=30),
        ),
        migrations.AlterField(
            model_name='pointdate',
            name='point4',
            field=models.CharField(max_length=30, null=True),
        ),
    ]