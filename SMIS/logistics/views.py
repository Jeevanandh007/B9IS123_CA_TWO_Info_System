from django.shortcuts import render
from rest_framework import viewsets
from .serializers import updateproductserializer
from .serializers import updatedosageserializer
from .models import products
from .models import dosage

# Create your views here.

class updateproductsview(viewsets.ModelViewSet):
    serializer_class =updateproductserializer
    queryset = products.objects.all()

class updatedosagesview(viewsets.ModelViewSet):
    serializer_class =updatedosageserializer
    queryset = dosage.objects.all()