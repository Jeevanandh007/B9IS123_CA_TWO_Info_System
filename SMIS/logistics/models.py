from django.db import models

# Create your models here.
class products(models.Model):
    PRODUCT_LIST=models.CharField(max_length=200)

    def __str__(self):
        return str(self.PRODUCT_LIST)


class dosages(models.Model):
    DOSAGE_LIST=models.CharField(max_length=25)

    def __str__(self):
        return str(self.DOSAGE_LIST)

