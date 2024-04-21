from django.contrib import admin

# Register your models here.
from .models import products
admin.site.register(products)

from .models import dosage
admin.site.register(dosage)