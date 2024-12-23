from django.urls import path

from .views import *

urlpatterns = [
        path("", AllFriendsView.as_view(), name='all_friends')
]
