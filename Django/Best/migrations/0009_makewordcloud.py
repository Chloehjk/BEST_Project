# Generated by Django 3.1.1 on 2020-11-26 06:58

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('Best', '0008_auto_20201126_1147'),
    ]

    operations = [
        migrations.CreateModel(
            name='MAKEWORDCLOUD',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('date', models.CharField(max_length=30, null=True)),
                ('words', models.CharField(max_length=400)),
                ('code', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='Best.kospi50')),
            ],
        ),
    ]
