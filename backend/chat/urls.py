from django.urls import path
from .auth_views import SignUpView, LoginView, CookieTokenRefreshView

urlpatterns = [
    path("signup/", SignUpView.as_view(), name="signup"),
    path("login/", LoginView.as_view(), name="get_token"),
    path("refresh/", CookieTokenRefreshView.as_view(), name="refresh_token"),
]
