from django.shortcuts import render


# # Create your views here.


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

import requests
from django.shortcuts import render
from django.http import JsonResponse

def home(request):
    
    if request.method == 'POST':
       
        customer_name = request.POST.get('customerName')
        email = request.POST.get('email')
        phone = request.POST.get('phone')
        product = request.POST.get('product')
        dosage = request.POST.get('dosage')
        address = request.POST.get('address')
        pincode = request.POST.get('pincode')
        country = request.POST.get('country')
        
        
        data = {
            'CUSTOMER_NAME': customer_name,
            'EMAIL': email,
            'PHONE_NUMBER': phone,
            'PRODUCT': product,
            'DOSAGE': dosage,
            'ADDRESS': address,
            'PINCODE': pincode,
            'COUNTRY': country
        }
    
    
     
        response = requests.post('http://127.0.0.1:8000/api/order/', data=data)
        
        
        if response.status_code == 201:  
            return JsonResponse({'success': True})
        else:
            return JsonResponse({'success': False, 'error': 'Failed to submit form'})

    else:
       
        #response = requests.get('http://127.0.0.1:8000/api/order/')
        #data = response.json()
        #return render(request, 'home.html', {'data': data})
     # Handle search request
        search_query = request.GET.get('search_query')
        if search_query:
            search_response = requests.get('http://127.0.0.1:8000/api/po_number/', params={'search': search_query})
            if search_response.status_code == 200:
                search_data = search_response.json()
                
                return render(request, 'home.html', {'search_data': search_data})
            else:
                return JsonResponse({'success': False, 'error': 'Failed to fetch search results'})
        else:
            response = requests.get('http://127.0.0.1:8000/api/order/')
            data = response.json()
            return render(request, 'home.html', {'data': data})