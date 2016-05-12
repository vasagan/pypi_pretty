"""pypi URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/1.9/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  url(r'^$', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  url(r'^$', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.conf.urls import url, include
    2. Add a URL to urlpatterns:  url(r'^blog/', include('blog.urls'))
"""
from django.conf.urls import url, include
from django.contrib import admin
from django.views.generic import TemplateView
from .views import *

urlpatterns = [
    url(r'^admin/', admin.site.urls),
    url(r'^accounts/social/signup/', RegiserView.as_view(), name='socialaccount_signup'),
    url(r'^$', home, name='home'),
    url(r'^profile/', profile, name='user_profile'),
    url(r'^logout/', logout_view,  name='user_logout'),
    url(r'^bt/', button, name='user_button'),
    url(r'^accounts/', include('allauth.urls')),
]
