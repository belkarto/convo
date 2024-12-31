from django.contrib.auth.models import User
from django.db import connection
from pprint import pprint


def run():
    """
    get all users
    """
    pprint("Getting all users")
    users = User.objects.all()
    pprint(users)
    # pprint(users[0])

    pprint(connection.queries[0]["sql"])
