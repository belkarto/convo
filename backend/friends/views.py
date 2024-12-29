from django.db.models import Q, Count
from rest_framework.views import APIView, status
from rest_framework.response import Response
from rest_framework.generics import ListAPIView

from chat.models import User
from .models import Friendship
from .serializers import FriendRequestSerializer, FriendSearchSerializer, FriendshipSerializer

# TODO:
#   all Friends View
class AllFriendsView(ListAPIView):
    serializer_class = FriendshipSerializer

    def get_queryset(self):
        user = self.request.user 
        return Friendship.objects.filter(( Q(sender=user) | Q (receiver=user) ) & Q(status="ACC"))


# TODO:
#   friend requests view
class FriendRequestsView(ListAPIView):
    serializer_class = FriendRequestSerializer

    def get_queryset(self):
        user = self.request.user

        return Friendship.objects.filter(receiver=user ,status="PEN")

# TODO:
#   a search view 
class SearchView(ListAPIView):
    serializer_class = FriendSearchSerializer

    def get_queryset(self):
        user = self.request.user
        query = self.request.query_params.get('username', None)
        if query:
            return User.objects.filter(username__icontains=query).exclude(id=user.id)
        return User.objects.none()

# TODO:
#   suggested Friends view
class  SuggestedFriendsView(ListAPIView):
    serializer_class = FriendshipSerializer

    def get_queryset(self):
        pass
# TODO:
#   add friend view

# TODO:
#   Accept friend request

# TODO:
#   reject Friend request

# TODO:
#   block user view

# TODO:
#   unblock user view

# TODO:
#   unfriend user
