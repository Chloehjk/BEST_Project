# Generated by Django 3.1.1 on 2020-11-19 06:31

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('Best', '0002_auto_20201113_1723'),
    ]

    operations = [
        migrations.CreateModel(
            name='MEANOFPER',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('industry', models.CharField(max_length=20)),
                ('per', models.IntegerField()),
                ('company', models.CharField(max_length=50)),
            ],
        ),
    ]