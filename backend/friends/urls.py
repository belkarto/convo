from django.urls import path

from .views import *

urlpatterns = [
    path("", AllFriendsView.as_view(), name="all_friends"),
    path("requests/", FriendRequestsView.as_view(), name="friend_requests"),
    path("search/", SearchView.as_view(), name="search"),
    path("suggestions/", SuggestedFriendsView.as_view(), name="suggestions"),
    path("add/<int:pk>/", AddFriendView.as_view(), name="add_friend"),
    path("accept/<int:pk>/", AcceptFriendRequestView.as_view(), name="accept_friend"),
    path("reject/<int:pk>/", RejectFriendRequestView.as_view(), name="reject_friend"),
]
