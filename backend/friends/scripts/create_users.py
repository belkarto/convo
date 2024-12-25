from django.contrib.auth import get_user_model
from django.contrib.auth.models import User


# User = get_user_model()


def run():
    """
    create dummy users
    """
    print("Creating users")
    for i in range(1, 200):
        user , created= User.objects.get_or_create(
            username=f"user{i}",
            email=f"user{i}@mail.com",
            password=f"password{i}",
        )
        if created:
            print(f"Created user {user.username}")
        else:
            print(f"Fetched user {user.username}")
