
from django.contrib.auth import get_user_model


User = get_user_model()


def run():
    """
    delete dummy users
    """
    count = 0
    print("Delete users")
    for i in range(1, 200):
        try:
            user = User.objects.get(username=f"user{i}")
            count = user.delete()
            print(count)
            print(f"Deleted user {user.username}")
        except Exception:
            pass

    print(count)
