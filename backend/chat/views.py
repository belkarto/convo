from django.shortcuts import render
from rest_framework.generics import RetrieveAPIView
from rest_framework.response import Response
from rest_framework.views import APIView

# Create your views here.


class testView(APIView):
    def get(self, request, *args, **kwargs):
        res = Response({"this_res": "this is respone amazing"})
        return res
