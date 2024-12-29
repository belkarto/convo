from django.urls import path

from .views import *

urlpatterns = [
        path("", AllFriendsView.as_view(), name='all_friends'),
        path("requests/", FriendRequestsView.as_view(), name='friend_requests'),
        path("search/", SearchView.as_view(), name='search'),
    path("suggestions/", SuggestedFriendsView.as_view(), name='suggestions'),
]
