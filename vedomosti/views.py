from django.shortcuts import render
from django.http import HttpResponse

def b1(request):
    context = {'age': 12}
    return render(request, 'form_a_b/b1.html', context)

def b2(request):
    return render(request, 'form_a_b/b2.html')
  