from rest_framework.generics import CreateAPIView
from django.contrib.auth.models import User
from rest_framework import serializers
from rest_framework_simplejwt.tokens import RefreshToken
from rest_framework import status
from rest_framework.response import Response
from rest_framework_simplejwt.views import TokenObtainPairView, TokenRefreshView
from .serializers import CustomTokenObtainPairSerializer


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ["id", "username", "email", "password"]
        extra_kwargs = {"password": {"write_only": True}, "email": {"required": True}}

    def create(self, validated_data):
        user = User.objects.create_user(**validated_data)
        return user


class SignUpView(CreateAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer
    permission_classes = []

    def create(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        user = serializer.save()

        refresh = RefreshToken.for_user(user)
        access_token = str(refresh.access_token)
        refresh_token = str(refresh)

        response = Response(
            {
                "access_token": access_token,
                "user_id": user.id,
                "username": user.username,
                "email": user.email,
                "isAuth": True,
            },
            status=status.HTTP_201_CREATED,
        )

        response.set_cookie(
            "refresh_token",
            refresh_token,
            httponly=True,
            secure=True,
            samesite="Lax",
        )
        return response


class LoginView(TokenObtainPairView):
    # serializer_class = CustomTokenObtainPairSerializer
    def post(self, request, *args, **kwargs):
        response = super().post(request, *args, **kwargs)
        # response.pop("refresh")
        refresh = response.data.pop("refresh")
        user = User.objects.get(username=request.data["username"])

        response.data["user_id"] = user.id
        response.data["username"] = user.username
        response.data["email"] = user.email
        response.data["isAuth"] = True
        response.set_cookie(
            "refresh_token",
            refresh,
            httponly=True,
            secure=True,
            samesite="Lax",
        )
        return response


class CookieTokenRefreshView(TokenRefreshView):
    def post(self, request, *args, **kwargs):
        request.data["refresh"] = request.COOKIES.get("refresh_token")
        response = super().post(request, *args, **kwargs)
        refresh = response.data.pop("refresh")

        return response
