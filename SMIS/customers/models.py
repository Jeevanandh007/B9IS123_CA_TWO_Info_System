from django.db import models

# Create your models here.

class orderdetails(models.Model):
    ORDER_ID=models.AutoField(primary_key=True)
    CUSTOMER_NAME=models.CharField(max_length=150)
    EMAIL=models.EmailField()
    PHONE_NUMBER=models.CharField(max_length=10)
    PRODUCT=models.CharField(max_length=50)
    DOSAGE=models.IntegerField()
    ADDRESS=models.TextField()
    PINCODE=models.CharField(max_length=10)
    COUNTRY=models.CharField(max_length=50)
    ORDER_STATUS=models.CharField(max_length=20,default='Pending')
    ORDER_DATE=models.DateField(auto_now_add=True)
    ESTIMATED_DATE_OF_DELIVERY=models.DateField(null=True,blank=True)
    DELIVERY_METHOD = models.CharField(max_length=50,null=True,blank=True)
    INVOICE_NUMBER=models.CharField(max_length=50,null=True,blank=True)
    REMARKS=models.TextField(null=True,blank=True)
    PO_NUMBER=models.CharField(max_length=15,blank=True)

    #def save():
        #if not self.pk:
            #self.PO_NUMBER=f"PO#{self.ORDER_ID}"
        #super().save()

    def __str__(self):
        return str(self.ORDER_ID)



