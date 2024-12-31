from django.db.models import Q, Count
from rest_framework.views import APIView, status
from rest_framework.response import Response
from rest_framework.generics import ListAPIView, UpdateAPIView

from chat.models import User
from .models import Friendship
from .serializers import (
    FriendRequestSerializer,
    FriendSearchSerializer,
    FriendshipSerializer,
    FriendshipUpdateSerializer,
)


class AllFriendsView(ListAPIView):
    serializer_class = FriendshipSerializer

    def get_queryset(self):
        user = self.request.user
        return Friendship.objects.filter(
            (Q(sender=user) | Q(receiver=user)) & Q(status="ACC")
        ).order_by("-updated_at")


class FriendRequestsView(ListAPIView):
    serializer_class = FriendRequestSerializer

    def get_queryset(self):
        user = self.request.user

        return Friendship.objects.filter(receiver=user, status="PEN")


# TODO:
# exclude friends and blocked and blocked by users
class SearchView(ListAPIView):
    serializer_class = FriendSearchSerializer

    def get_queryset(self):
        user = self.request.user
        query = self.request.query_params.get("username", None)
        if query:
            return User.objects.filter(username__icontains=query).exclude(id=user.id)
        return User.objects.none()


# TODO:
#   suggested Friends view
class SuggestedFriendsView(ListAPIView):
    serializer_class = FriendshipSerializer

    def get_queryset(self):
        pass


# TODO:
#   add friend view
class AddFriendView(APIView):
    def post(self, request, *args, **kwargs):
        pass


# TODO:
#   Accept friend request
class AcceptFriendRequestView(UpdateAPIView):
    serializer_class = FriendshipUpdateSerializer

    def get_queryset(self):
        return Friendship.objects.filter(receiver=self.request.user, status="PEN")

    def update(self, request, *args, **kwargs):

        pk = kwargs.get("pk")
        friendship = Friendship.objects.get(id=pk)

        if not friendship:
            return Response(
                {"message": "Friend request not found", "success": False},
                status=status.HTTP_404_NOT_FOUND,
            )

        friendship.accept_friend()
        return Response(
            {
                "message": "Friend request accepted successfully",
                "success": True,
            },
            status=status.HTTP_200_OK,
        )


# TODO:
# currently just reject friend request  TODO: later
# make it delete the column of the friendship in the database
class RejectFriendRequestView(UpdateAPIView):
    serializer_class = FriendshipUpdateSerializer

    def get_queryset(self):
        return Friendship.objects.filter(receiver=self.request.user, status="PEN")

    def update(self, request, *args, **kwargs):
        pk = kwargs.get("pk")
        friendship = Friendship.objects.get(id=pk)

        if not friendship:
            return Response(
                {"message": "Friend request not found", "success": False},
                status=status.HTTP_404_NOT_FOUND,
            )

        friendship.reject_friend()
        return Response(
            {
                "message": "Friend request rejected successfully",
                "success": True,
            },
            status=status.HTTP_200_OK,
        )


# TODO:
#   unfriend user


# TODO:
#   block user view

# TODO:
#   unblock user view
