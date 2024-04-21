from rest_framework import  serializers
from .models import products
from .models import dosage

class updateproductserializer(serializers.ModelSerializer):
    class Meta:
        model=products
        fields = ('PRODUCT_ID','PRODUCT_NAME')

class updatedosageserializer(serializers.ModelSerializer):
    class Meta:
        model=dosage
        fields = ('DOSAGE_ID','DOSAGE_LIST')