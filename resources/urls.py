"""chaffers URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/1.8/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  url(r'^$', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  url(r'^$', Home.as_view(), name='home')
Including another URLconf
    1. Add an import:  from blog import urls as blog_urls
    2. Add a URL to urlpatterns:  url(r'^blog/', include(blog_urls))
"""
from django.conf.urls import url
from . import views

urlpatterns = [
    url(r'^get_data_by_id', views.get_data_by_id),
    url(r'^get_all_ids', views.get_all_ids),
    url(r'^view_all/(?P<model_name>[A-Za-z]+)', views.view_all),
    url(r'^view/(?P<model_name>[A-Za-z]+)/(?P<model_id>[0-9]+)', views.view),
]
