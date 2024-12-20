from django.db import models
from django.contrib.auth import get_user_model
import uuid
User = get_user_model()

class ChatRoom(models.Model):
    name = models.CharField(max_length=100, unique=True, default=uuid.uuid4)
    user_a = models.ForeignKey(User, on_delete=models.CASCADE, related_name="chat_room_user_a")
    user_b = models.ForeignKey(User, on_delete=models.CASCADE, related_name="chat_room_user_b") 
    created_at = models.DateTimeField(auto_now_add=True)

class Message(models.Model):
    MESSAGE_STATUS = [
        ('sent', 'Sent'),
        ('delivered', 'Delivered'),
        ('read', 'Read'),
    ]

    chat_room = models.ForeignKey(ChatRoom, related_name='messages', on_delete=models.CASCADE)
    sender = models.ForeignKey(User, related_name='sent_messages', on_delete=models.CASCADE)
    message_text = models.TextField()
    message_status = models.CharField(max_length=10, choices=MESSAGE_STATUS, default='sent')
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"Message from {self.sender.username} in {self.conversation.name}"


class Notification(models.Model):
    NOTIFICATION_TYPES = [
        ('new_message', 'New Message'),
        ('friend_request', 'Friend Request'),
        ('other', 'Other'),
    ]

    user = models.ForeignKey(User, related_name='notifications', on_delete=models.CASCADE)
    notification_type = models.CharField(max_length=50, choices=NOTIFICATION_TYPES, default='other')
    content = models.TextField()   
    read = models.BooleanField(default=False)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"Notification for {self.user.username} - {self.notification_type}"

    def mark_as_read(self):
        self.read = True
        self.save()




class UserStatus(models.Model):
    STATUS_CHOICES = [
        ('online', 'Online'),
        ('offline', 'Offline'),
        ('away', 'Away'),
        ('busy', 'Busy'),
    ]

    user = models.OneToOneField(User, related_name='status', on_delete=models.CASCADE)
    status = models.CharField(max_length=10, choices=STATUS_CHOICES, default='offline')
    last_seen = models.DateTimeField(auto_now=True)

    def __str__(self):
        return f"{self.user.username} is {self.status}"

    def mark_as_online(self):
        self.status = "online"
        self.save()

    def mark_as_offline(self):
        self.status = "offline"
        self.save()

    def mark_as_busy(self):
        self.status = "busy"
        self.save()

    def mark_as_away(self):
        self.status = "away"
        self.save()
