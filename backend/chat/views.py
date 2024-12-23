from django.shortcuts import render
from rest_framework.generics import RetrieveAPIView
from rest_framework.response import Response
from rest_framework.views import APIView




# TODO:
# all_conversations view

# TODO:
# pagination view for conversation give 30 message each time




class testView(APIView):
    def get(self, request, *args, **kwargs):
        res = Response({"test": "test" , "isTest": True})
        return res
