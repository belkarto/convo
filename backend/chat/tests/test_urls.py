from django.test import SimpleTestCase
from django.urls import reverse, resolve
from chat.views import testView
from chat.auth_views import SignUpView, LoginView, CookieTokenRefreshView

class TestUrls(SimpleTestCase):
    def test_signup_url_resolves(self):
        url = reverse('signup')
        self.assertEqual(resolve(url).func.view_class, SignUpView)

    def test_login_url_resolves(self):
        url = reverse('get_token')
        self.assertEqual(resolve(url).func.view_class, LoginView)

    def test_refresh_url_resolves(self):
        url = reverse('refresh_token')
        self.assertEqual(resolve(url).func.view_class, CookieTokenRefreshView)

    def test_test_url_resolves(self):
        url = reverse('test_url')
        self.assertEqual(resolve(url).func.view_class, testView)
