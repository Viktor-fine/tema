from django.urls import path

from .views import b1, b2

urlpatterns=[
    path('b1/', b1, name='b1'),
    path('b2/', b2, name='b2'),
]