from django.urls import path, include
from rest_framework.routers import DefaultRouter

from Portfolio_App.models import Contact
from .views import ProfileViewSet,SkillViewSet,ProjectViewSet,ExpirienceViewSet,ContactViewSet

router = DefaultRouter()
router.register(r'profiles', ProfileViewSet, basename='profile')
router.register(r'skills', SkillViewSet, basename='skills')
router.register(r'projects', ProjectViewSet, basename='projects')
router.register(r'expiriences', ExpirienceViewSet, basename='expiriences')
router.register(r'contacts', ContactViewSet, basename='contacts')

urlpatterns = [
    path('', include(router.urls)),
]
