from django.shortcuts import render

# Create your views here.


def home_view(request):
    context = {
        'clup': "deneme"
    }
    return render(request, "home.html", context)


def yonetim_view(request):


    context ={
        'kurul':""
    }
    return render(request,"home/yonetim.html", context)