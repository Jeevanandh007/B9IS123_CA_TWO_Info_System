from django.db import models

# Create your models here.
class products(models.Model):
    PRODUCT_ID=models.AutoField(primary_key=True)
    PRODUCT_NAME=models.CharField(max_length=200)

    def __str__(self):
        return str(self.PRODUCT_NAME)
    
class dosage(models.Model):
    DOSAGE_ID=models.AutoField(primary_key=True)
    DOSAGE_LIST=models.CharField(max_length=15)

    def __str__(self):
        return str(self.DOSAGE_LIST)
    

