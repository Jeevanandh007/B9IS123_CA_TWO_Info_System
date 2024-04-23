from django.urls import path, include
from .views import dashboard
from rest_framework import routers
from . import views

router =routers.DefaultRouter()
#router.register(r'order', views.orderdetails)
#router.register(r'order', views.orderdetails, basename='orderdetails')

urlpatterns = [
    path('', views.dashboard, name='dashboard'),
    
    ]
