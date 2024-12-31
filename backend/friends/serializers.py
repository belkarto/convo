from django.db.models import Q
from django.urls import reverse
from rest_framework import serializers

from friends.models import Friendship


class FriendshipSerializer(serializers.ModelSerializer):
    name = serializers.SerializerMethodField()
    status = serializers.SerializerMethodField()
    lastSeen = serializers.SerializerMethodField()
    avatar = serializers.SerializerMethodField()

    class Meta:
        model = Friendship
        fields = ["id", "name", "status", "lastSeen", "avatar"]

    def get_name(self, obj):
        return (
            obj.sender.username
            if obj.sender != self.context["request"].user
            else obj.receiver.username
        )

    def get_status(self, obj):
        return (
            obj.sender.user_status.status
            if obj.sender != self.context["request"].user
            else obj.receiver.user_status.status
        )

    def get_lastSeen(self, obj):
        return (
            obj.sender.user_status.last_seen
            if obj.sender != self.context["request"].user
            else obj.receiver.user_status.last_seen
        )

    def get_avatar(self, obj):
        return ""
        # return obj.sender.avatar.url if obj.sender != self.context['request'].user else obj.receiver.avatar.url


class FriendRequestSerializer(serializers.ModelSerializer):
    name = serializers.SerializerMethodField()
    acceptRequest = serializers.SerializerMethodField()
    rejectRequest = serializers.SerializerMethodField()

    class Meta:
        model = Friendship
        fields = ["id", "name", "acceptRequest", "rejectRequest"]

    def get_name(self, obj):
        return obj.sender.username

    def get_acceptRequest(self, obj):
        request = self.context["request"]
        return reverse("accept_friend", kwargs={"pk": obj.id})

    def get_rejectRequest(self, obj):
        request = self.context["request"]
        return reverse("reject_friend", kwargs={"pk": obj.id})


class FriendSearchSerializer(serializers.ModelSerializer):
    name = serializers.SerializerMethodField()

    class Meta:
        model = Friendship
        fields = ["id", "name"]

    def get_name(self, obj):
        return obj.username


class FriendshipUpdateSerializer(serializers.ModelSerializer):
    class Meta:
        model = Friendship
        fields = []
