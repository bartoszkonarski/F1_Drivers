from django.urls import path
from . import views

urlpatterns = [
	path('', views.home),
	path('hamilton/', views.hamilton),
	path('vettel/', views.vettel),
]