from django.contrib.auth import get_user_model


def run():
    """
    delete all friendships
    """
    # from friends.models import Friendship
    # Friendship.objects.all().delete()
    # print("All friendships deleted")
    
    print("Deleting all users")
    user = get_user_model()
    count = user.objects.all().delete()
    print(count)
    print("All users deleted")
