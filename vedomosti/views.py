from django.shortcuts import render
from django.http import HttpResponse

def b1(request):
    context = {'age': 12}
    return render(request, 'form_a_b/b1.html', context)

def b2(request):
    return render(request, 'form_a_b/b2.html')

def b3(request):
    return render(request, 'form_a_b/b3.html')

def b4(request):
    return render(request, 'form_a_b/b4.html')

def b5(request):
    return render(request, 'form_a_b/b5.html')

def b6(request):
    return render(request, 'form_a_b/b6.html')

def b7(request):
    return render(request, 'form_a_b/b7.html')

def b8(request):
    return render(request, 'form_a_b/b8.html')

def a2(request):
    return render(request, 'form_a_b/a2.html')

def a3(request):
    return render(request, 'form_a_b/a3.html')

def a1(request):
    return render(request, 'form_a_b/a1.html')