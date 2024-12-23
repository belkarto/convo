"""
URL configuration for core project.

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/5.1/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""

from django.contrib import admin
from django.urls import path, include
from .auth_views import SignUpView, LoginView, CookieTokenRefreshView

urlpatterns = [
    path("admin/", admin.site.urls),
    # Auth
    path("api/signup/", SignUpView.as_view(), name="signup"),
    path("api/login/", LoginView.as_view(), name="get_token"),
    path("api/refresh/", CookieTokenRefreshView.as_view(), name="refresh_token"),

    # API
    path("api/chat/", include("chat.urls")),
    path("api/friends/", include("friends.urls")),

]
