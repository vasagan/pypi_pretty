from django.shortcuts import render
from allauth.socialaccount.views import SignupView
from django.shortcuts import redirect
from django.conf import settings
from django.contrib.auth.decorators import login_required
from django.contrib.auth import logout
from allauth.socialaccount.models import SocialAccount

def home(request):
    return render(request, 'pages/home.html',{})


class RegiserView(SignupView):
    template_name = ('pages/signup.html')



@login_required
def profile(request):
    extra_data = request.user.socialaccount_set.all()[0].extra_data
    return render(request, 'pages/profile.html',{'extra_data': extra_data})


def button(request):
    return render(request, 'pages/buttons.html',{})


@login_required
def logout_view(request):
    logout(request)
    return redirect('/')

