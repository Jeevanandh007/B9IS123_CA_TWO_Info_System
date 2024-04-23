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

import requests
from django.shortcuts import render
def dashboard(request):
    response =requests.get('http://127.0.0.1:8000/api/order_status/?ORDER_STATUS=Pending')
    data_pending =response.json()
   

    response =requests.get('http://127.0.0.1:8000/api/order_status/?ORDER_STATUS=Complete')
    data_complete =response.json()
    return render(request,'dashboard.html',{'data_complete': data_complete,'data_pending': data_pending})