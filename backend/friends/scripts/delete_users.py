
from django.contrib.auth import get_user_model


User = get_user_model()


def run():
    """
    delete dummy users
    """
    print("Delete users")
    for i in range(1, 10):
        user = User.objects.get(username=f"user{i}")
        user.delete()
        print(f"Deleted user {user.username}")
