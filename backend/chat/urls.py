from django.urls import path
from rest_framework_simplejwt.views import TokenObtainPairView, TokenRefreshView
from .auth_views import SignUpView, LoginView

urlpatterns = [
    path("signup/", SignUpView.as_view(), name="signup"),
    path("login/", LoginView.as_view(), name="get_token"),
    path("refresh/", TokenRefreshView.as_view(), name="refresh_token"),
]
