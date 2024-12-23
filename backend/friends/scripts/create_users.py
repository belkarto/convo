from django.contrib.auth import get_user_model


User = get_user_model()


def run():
    """
    create dummy users
    """
    print("Creating users")
    for i in range(1, 10):
        user = User.objects.create_user(
            username=f"user{i}",
            email=f"user{i}@mail.com",
            password=f"password{i}",
        )
        user.save()
        print(f"Created user {user.username}")
