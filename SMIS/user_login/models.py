from django.db import models

# Create your models here.
class logisticsusers(models.Model):
    USER_ID=models.AutoField(primary_key=True)
    USER_NAME=models.CharField(max_length=150)
    PASSWORD=models.CharField(max_length=128)

    def __str__(self):
        return self.USER_NAME