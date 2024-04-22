from django.shortcuts import render

# Create your views here.
from django.contrib.auth import authenticate, login
from rest_framework.views import APIView
from rest_framework import viewsets
from rest_framework import status
from rest_framework.response import Response
from .serializers import UserSerializer

class loginviewapi(APIView):
    serializer_class = UserSerializer
   

    def post(self,request):
        username = request.data.get('username')
        password = request.data.get('password')
        user = authenticate(username=username, password=password)

        if user:
            login(request,user)
            return Response({"Login success"},status=status.HTTP_200_OK)
        else :
            return Response({"Invalid Username or password"},status=status.HTTP_401_UNAUTHORIZED)