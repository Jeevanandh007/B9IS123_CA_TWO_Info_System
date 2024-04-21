# from django.shortcuts import render
# from django.views.generic import TemplateView

# # Create your views here.
# class Index(TemplateView):
#     template_name ='customers/index.html'

from rest_framework import generics
from .models import OrderDetails
from .serializers import OrderDetailsSerializer

class OrderDetailsListCreate(generics.ListCreateAPIView):
    queryset = OrderDetails.objects.all()
    serializer_class = OrderDetailsSerializer
