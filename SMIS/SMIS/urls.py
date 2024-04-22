"""
URL configuration for SMIS project.

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/5.0/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""

# from django.contrib import admin
# from django.urls import path, include
# from rest_framework import routers
# from logistics import views
# from customers import views


# # Create a router and register our viewset with it
# router = routers.DefaultRouter()
# router.register(r'order', views.createorderlistview, 'customers')

# urlpatterns = [
#     path("admin/", admin.site.urls),
#     #path('', include(orderdetails.urls)),
#     path('api/', include(router.urls)),
# ]

from django.contrib import admin
from django.urls import path, include
from rest_framework import routers
from logistics import views as logistics_views
from customers import views as customers_views
from user_login import views as login_views

from user_login.views import loginviewapi

# Create a router and register our viewset with it
router = routers.DefaultRouter()
router.register(r'order', customers_views.createorderlistview, 'customers')
router.register(r'products', logistics_views.updateproductsview, 'logistics')
router.register(r'dosages', logistics_views.updatedosagesview, 'dosages')
router.register(r'po_number',customers_views.searchpoview, 'po_number')
router.register(r'order_status',customers_views.filterorderstatus, 'order_status')
#router.register(r'login',login_views.loginviewapi, 'login')
urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include(router.urls)),
    # Include customer app's URLs
    #path('api/customers/', include('customers.urls')),
    path('api/login/', loginviewapi.as_view(), name='login'),
]

