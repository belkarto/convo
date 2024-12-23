from django.test import Client, TestCase
from django.urls import reverse
from chat.views import testView
import json


class TestViews(TestCase):
    def test_test_view(self):
        client = Client()
        res = client.get(reverse('test_url'))
        self.assertEqual(res.status_code, 401)
