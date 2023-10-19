from django.urls import path

from .views import *

urlpatterns=[
    path('b1/', b1, name='b1'),
    path('b2/', b2, name='b2'),
    path('b3/', b3, name='b3'),
    path('b4/', b4, name='b4'),
    path('b5/', b5, name='b5'),
    path('b6/', b6, name='b6')
]