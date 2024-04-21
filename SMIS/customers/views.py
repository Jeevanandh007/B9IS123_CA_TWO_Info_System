from django.shortcuts import render
from django.views.generic import TemplateView

# # Create your views here.
class Index(TemplateView):
     template_name ='customers/index.html'


from rest_framework import viewsets
from .serializers import orderdetailsserializer
from .models import orderdetails

# Create your views here.

class createorderlistview(viewsets.ModelViewSet):
    serializer_class = orderdetailsserializer
    queryset = orderdetails.objects.all()
