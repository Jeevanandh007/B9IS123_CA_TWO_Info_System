from django.db import models

# Create your models here.
class logistics(models.Model):
    PRODUCT_LIST=models.CharField(max_length=200)
    DOSAGE_LIST=models.CharField(max_length=25)

