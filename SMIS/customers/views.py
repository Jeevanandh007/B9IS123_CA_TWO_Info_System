from django.shortcuts import render
#from django.views.generic import TemplateView

# # Create your views here.
#class Index(TemplateView):
    # template_name ='customers/index.html'

from rest_framework import viewsets, status
#from rest_framework.decorators import action
from .serializers import orderdetailsserializer
#from rest_framework.response import Response
from .models import orderdetails

# Create your views here.

class createorderlistview(viewsets.ModelViewSet):
    serializer_class = orderdetailsserializer
    queryset = orderdetails.objects.all()

from rest_framework import filters


class searchpoview(viewsets.ModelViewSet):
    queryset = orderdetails.objects.all()
    serializer_class = orderdetailsserializer
    filter_backends = [filters.SearchFilter]
    search_fields = ['=PO_NUMBER']

from django_filters.rest_framework import DjangoFilterBackend

class filterorderstatus(viewsets.ModelViewSet):
    queryset = orderdetails.objects.all()
    serializer_class = orderdetailsserializer
    filter_backends = [DjangoFilterBackend]
    filterset_fields= ['ORDER_STATUS']