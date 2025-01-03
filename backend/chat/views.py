from django.db.models.query import Q
from django.shortcuts import render
from rest_framework.generics import ListAPIView, RetrieveAPIView
from rest_framework.response import Response
from rest_framework.views import APIView

from chat.models import ChatRoom
from chat.serializers import ConversationSerializer


# TODO:
# all_conversations view
class ConversationListView(ListAPIView):
    serializer_class = ConversationSerializer

    def get_queryset(self):
        return ChatRoom.objects.filter(
            Q(user_a=self.request.user) | Q(user_b=self.request.user)
        )


# TODO:
# pagination view for conversation give 30 message each time
