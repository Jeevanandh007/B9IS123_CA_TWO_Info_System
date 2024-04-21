# from django.shortcuts import render
# from django.views.generic import TemplateView

# # Create your views here.
# class Index(TemplateView):
#     template_name ='customers/index.html'

from django.shortcuts import render
from rest_framework import viewsets
from .serializers import OrderDetailsSerializer
from .models import customers

# Create your views here.

class OrderDetailsListCreate(viewsets.ModelViewSet):
    serializer_class = OrderDetailsSerializer
    queryset = OrderDetails.objects.all()
