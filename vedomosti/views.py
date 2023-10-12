from django.shortcuts import render
from django.http import HttpResponse

def index(request):
    context = {'age': 12}
    return render(request, 'base.html', context)
  