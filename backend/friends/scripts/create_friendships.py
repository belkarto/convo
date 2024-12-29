from chat.models import UserStatus
from friends.models import Friendship, User
import random
from django.db.utils import IntegrityError

def get_or_create_user(username, email, password):
    """
    Get or create user.
    """
    user, created = User.objects.get_or_create(
        username=username,
        defaults={'email': email}
    )
    if created:
        user.set_password(password)
        user.save()
        UserStatus.objects.create(user=user)
    return user

def get_or_create_superuser():
    """
    Get or create superuser.
    """
    superuser, created = User.objects.get_or_create(
        username="belkarto",
        defaults={'email': "belkarto@convo.com", 'is_superuser': True, 'is_staff': True}
    )
    if created:
        superuser.set_password("1234")
        superuser.save()
        UserStatus.objects.create(user=superuser)
    return superuser

status_choices = ['PEN', 'ACC', 'REJ']

def run():
    try:
        superuser = get_or_create_superuser()

        for i in range(1, 200):
            user = get_or_create_user(
                username=f"user{i}",
                email=f"user{i}@mail.com",
                password="1234"
            )
            status = random.choice(status_choices)
            if random.choice([True, False]):
                sender, receiver = superuser, user
            else:
                sender, receiver = user, superuser

            try:
                Friendship.objects.get_or_create(
                    sender=sender,
                    receiver=receiver,
                    defaults={'status': status}
                )
            except IntegrityError:
                print(f"Skipped duplicate friendship for sender={sender} and receiver={receiver}")

        pending = Friendship.objects.filter(status="PEN").count()
        accepted = Friendship.objects.filter(status="ACC").count()
        rejected = Friendship.objects.filter(status="REJ").count()

        print(f"accepted --> {accepted}\nrejected --> {rejected}\npending --> {pending}")

    except Exception as e:
        print(f"An error occurred: {e}")

