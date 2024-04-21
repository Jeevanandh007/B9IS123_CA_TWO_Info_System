from django.shortcuts import render
from rest_framework import viewsets
from .serializers import updateproductserializer
from .models import products

# Create your views here.

class updateproductsview(viewsets.ModelViewSet):
    serializer_class =updateproductserializer
    queryset = products.objects.all()

