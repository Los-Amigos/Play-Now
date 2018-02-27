from django.shortcuts import render

# Create your views here.
class HomeView():
    def index(request):
        return render(request, 'home/index.html')
