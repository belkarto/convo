from django.db.models import Q
from rest_framework.views import APIView, status
from rest_framework.response import Response
from rest_framework.generics import ListAPIView
from .models import Friendship
from .serializers import FriendshipSerializer

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
    serializer_class = FriendshipSerializer

    def get_queryset(self):
        user = self.request.user

        return Friendship.objects.filter(Q (receiver=user)  & Q(status="PEN"))

# TODO:
#   suggested Friends view

# TODO:
#   a search view 

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
