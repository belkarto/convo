

from django.db.models import Q
from friends.models import Friendship, User
from pprint import pprint

def run():
    user = User.objects.get(username='belkarto')
    record = Friendship.objects.filter(( Q(sender=user) | Q (receiver=user) ) & Q(status="ACC"))
    
    pprint (record)
