from django.urls import path
from rest_framework_simplejwt.views import TokenObtainPairView

from chat.views import testView
from .auth_views import SignUpView, LoginView, CookieTokenRefreshView

urlpatterns = [
    path("test/", testView.as_view(), name="test_url"),
]
