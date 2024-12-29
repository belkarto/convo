from django.db.models import Q
from rest_framework import serializers

from friends.models import Friendship


class FriendshipSerializer(serializers.ModelSerializer):
    name = serializers.SerializerMethodField()
    status = serializers.SerializerMethodField()
    lastSeen = serializers.SerializerMethodField()
    avatar = serializers.SerializerMethodField()

    class Meta:
        model = Friendship
        fields = ['id', 'name',  'status', 'lastSeen', 'avatar']

    def get_name(self, obj):
        return obj.sender.username if obj.sender != self.context['request'].user else obj.receiver.username

    def get_status(self, obj):
        return obj.sender.user_status.status if obj.sender != self.context['request'].user else obj.receiver.user_status.status

    def get_lastSeen(self, obj):
        return obj.sender.user_status.last_seen if obj.sender != self.context['request'].user else obj.receiver.user_status.last_seen

    def get_avatar(self, obj):
        return ""
        # return obj.sender.avatar.url if obj.sender != self.context['request'].user else obj.receiver.avatar.url

        
class FriendRequestSerializer(serializers.ModelSerializer):
    name = serializers.SerializerMethodField()
    mutualFriends = serializers.SerializerMethodField()

    class Meta:
        model = Friendship
        fields = ['id', 'name', 'mutualFriends']

    def get_name(self, obj):
        return obj.sender.username

    def get_mutualFriends(self, obj):
        request_user = self.context['request'].user

        target_user = obj.sender

        request_user_friends = Friendship.objects.filter(
            Q(sender=request_user, status="ACC") | Q(receiver=request_user, status="ACC")
        )
        target_user_friends = Friendship.objects.filter(
            Q(sender=target_user, status="ACC") | Q(receiver=target_user, status="ACC")
        )
        mutual_friends = 0
        for friend in request_user_friends:
            if friend in target_user_friends:
                mutual_friends += 1
        return mutual_friends


class FriendSearchSerializer(serializers.ModelSerializer):
    name = serializers.SerializerMethodField()
    mutual_friends = serializers.SerializerMethodField()

    class Meta:
        model = Friendship
        fields = ['id', 'name', 'mutual_friends']

    def get_name(self, obj):
        return obj.username

    def get_mutual_friends(self, obj):
        request_user = self.context['request'].user
        target_user = obj
        request_user_friends = Friendship.objects.filter(
            Q(sender=request_user, status="ACC") | Q(receiver=request_user, status="ACC")
        )
        target_user_friends = Friendship.objects.filter(
            Q(sender=target_user, status="ACC") | Q(receiver=target_user, status="ACC")
        )
        mutual_friends = 0
        for friend in request_user_friends:
            if friend in target_user_friends:
                if friend.sender != request_user and friend.receiver != request_user:
                    mutual_friends += 1
                
        return mutual_friends
