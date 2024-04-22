from rest_framework import serializers
from .models import orderdetails

class orderdetailsserializer(serializers.ModelSerializer):
    class Meta:
        model = orderdetails
        fields = '__all__'
        
