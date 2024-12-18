from channels.db import database_sync_to_async
from django.conf import settings
from django.contrib.auth import get_user_model
from django.contrib.auth.models import AnonymousUser
from jwt import decode as jwt_decode, ExpiredSignatureError, DecodeError
from urllib.parse import parse_qs

User = get_user_model()

class JWTAuthMiddleware:
    def __init__(self, app):
        self.app = app

    async def __call__(self, scope, receive, send):
        try:
            query_string = scope.get('query_string', b'').decode()  # Get query string as string
            query_params = parse_qs(query_string)
            # headers = dict(scope['headers'])
            auth_token = query_params.get('au', [None])[0]
            # print('==============================>',auth_token)
            
            if auth_token is None:
                """
                Missing Authorization header
                """
                await self.close_connection(send, 400)
                return
            
            jwt_payload = self.get_payload(auth_token)
            user_credentials = self.get_user_credentials(jwt_payload)
            user = await self.get_logged_in_user(user_credentials)
            scope['user'] = user 

        except (ExpiredSignatureError, DecodeError):
            await self.close_connection(send, 401)
            return
        except Exception:
            await self.close_connection(send, 500)
            return

        return await self.app(scope, receive, send)

    def get_payload(self, jwt_token):
        payload = jwt_decode(
            jwt_token, settings.SECRET_KEY, algorithms=settings.SIMPLE_JWT['ALGORITHM'])
        return payload

    def get_user_credentials(self, payload):
        """
        method to get user credentials from jwt token payload.
        defaults to user id.
        """
        user_id = payload['user_id']
        return user_id

    async def get_logged_in_user(self, user_id):
        user = await self.get_user(user_id)
        return user

    @database_sync_to_async
    def get_user(self, user_id):
        """
        Retrieve the user from the database, or return an AnonymousUser if the user does not exist.
        """
        try:
            return User.objects.get(id=user_id)
        except User.DoesNotExist:
            return AnonymousUser()

    async def close_connection(self, send, status):
        """
        Close the WebSocket connection with a specific status code and message.
        """
        await send({
            'type': 'websocket.close',
            'code': status
        })

def JWTAuthMiddlewareStack(app):
    return JWTAuthMiddleware(app)
