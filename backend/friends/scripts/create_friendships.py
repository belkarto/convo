from friends.models import Friendship, User
import random

def get_or_create_superuser():
    """
    get or create superuser
    """
    user, created = User.objects.get_or_create(
    username="belkarto",
    defaults={
        'email': 'belkarto@convo.com',
        'password': '1234',
    }) 
    return user


status_choices = ['PEN', 'ACC', 'REJ']

def run():
    superuser = get_or_create_superuser()


    for i in range(1, 200):
        user , created= User.objects.get_or_create(
            username=f"user{i}",
            email=f"user{i}@mail.com",
            password=f"password{i}",
        )
        status = random.choice(status_choices)
        if random.choice([True, False]):
            sender, receiver = superuser, user
        else:
            sender, receiver = user, superuser

        Friendship.objects.get_or_create(
            sender=sender,
            receiver=receiver,
            status=status
        )

    
    pending = Friendship.objects.filter(status="PEN").count()
    accepted = Friendship.objects.filter(status="ACC").count()
    rejected = Friendship.objects.filter(status="REJ").count()

    print(f"accepted --> {accepted}\nrejected --> {rejected}\npending --> {pending}")
