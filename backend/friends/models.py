from django.db import models
from django.contrib.auth import get_user_model
from django.utils.http import timezone
from chat.models import User


class Friendship(models.Model):
    FRIENDSHIP_CHOICES = [
        ("PEN", "Pending"),
        ("ACC", "Accepted"),
        ("REJ", "Rejected"),
        ("BLK", "Blocked"),
    ]

    sender = models.ForeignKey(
        User, related_name="sent_requests", on_delete=models.CASCADE
    )
    receiver = models.ForeignKey(
        User, related_name="received_requests", on_delete=models.CASCADE
    )
    status = models.CharField(
        max_length=10, choices=FRIENDSHIP_CHOICES, default="pending"
    )
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        unique_together = (("sender", "receiver"), ("receiver", "sender"))

    def __str__(self):
        return f"Request from {self.sender} to {self.receiver} ({self.status})"

    def accept_friend(self):
        self.status = "ACC"
        self.save()

    def reject_friend(self):
        self.status = "REJ"
        self.save()


class Block(models.Model):
    blocker = models.ForeignKey(User, related_name="blocker", on_delete=models.CASCADE)
    blocked = models.ForeignKey(User, related_name="blocked", on_delete=models.CASCADE)
    created_at = models.DateTimeField(auto_now_add=True)

    class Meta:
        unique_together = ("blocker", "blocked")

    def __str__(self):
        return f"{self.blocker} blocked {self.blocked}"
