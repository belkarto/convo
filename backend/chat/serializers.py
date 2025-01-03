from rest_framework import serializers

from chat.models import ChatRoom


class ConversationSerializer(serializers.ModelSerializer):
    class Meta:
        model = ChatRoom
        fields = []
