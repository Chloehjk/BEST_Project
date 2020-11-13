from django.db import models

# Create your models here.
class KOSPI50(models.Model):
    name = models.CharField(max_length=20)
    code = models.CharField(max_length=10)
