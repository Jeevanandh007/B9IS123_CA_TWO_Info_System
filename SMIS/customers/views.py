from django.shortcuts import render
from django.views.generic import TemplateView

# # Create your views here.
class Index(TemplateView):
     template_name ='customers/index.html'

from rest_framework import viewsets, status
from rest_framework.decorators import action
from .serializers import orderdetailsserializer
from rest_framework.response import Response
from .models import orderdetails

# Create your views here.

class createorderlistview(viewsets.ModelViewSet):
    serializer_class = orderdetailsserializer
    queryset = orderdetails.objects.all()

@action(detail=False, methods=['get'])
def search_by_po_number(self, request):
        po_number = request.query_params.get('po_number', None)
        if po_number is None:
            return Response({'error': 'PO number is required as query parameter'}, status=status.HTTP_400_BAD_REQUEST)
        
        try:
            order = orderdetails.objects.get(PO_NUMBER=po_number)
            serializer = orderdetailsserializer(order)
            return Response(serializer.data, status=status.HTTP_200_OK)
        except orderdetails.DoesNotExist:
            return Response({'error': 'Order with the given PO number not found'}, status=status.HTTP_404_NOT_FOUND)