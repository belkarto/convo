from django.urls import path
from rest_framework_simplejwt.views import TokenObtainPairView

from chat.views import testView

urlpatterns = [
    path("test/", testView.as_view(), name="test_url"),
]
