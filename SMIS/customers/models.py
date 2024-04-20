from django.db import models

# Create your models here.

class order_details(models.):
    CUSTOMER_NAME=models.CharField(max_length=150)
    EMAIL=models.EmailField()
    PHONE_NUMBER=models.CharField(max_length=10)
    PRODUCT=models.CharField(max_length=50)
    DOSAGE=models.IntegerField()
    ADDRESS=models.TextField()
    PINCODE=models