from rest_framework import serializers
from .models import orderdetails

class OrderDetailsSerializer(serializers.ModelSerializer):
    class Meta:
        model = orderdetails
        fields = '__all__'
