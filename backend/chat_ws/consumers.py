from channels.generic.websocket import JsonWebsocketConsumer


class ChatConsumer(JsonWebsocketConsumer):
    def connect(self):
        self.accept()

    def disconnect(self, close_code):
        pass

    def receive_json(self, content, **kwargs):
        print(self.scope['user'])
        self.send_json(content)
