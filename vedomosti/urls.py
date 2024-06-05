from django.urls import path

from .views import *

urlpatterns=[
    path('b1/', b1, name='b1'),
    path('b2/', b2, name='b2'),
    path('b3/', b3, name='b3'),
    path('b4/', b4, name='b4'),
    path('b5/', b5, name='b5'),
    path('b6/', b6, name='b6'),
    path('b7/', b7, name='b7'),
    path('b8/', b8, name='b8'),
    path('a2/', a2, name='a2'),
    path('a3/', a3, name='a3'),
    path('a1/', a1, name='a1'),
]