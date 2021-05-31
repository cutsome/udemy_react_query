from django.urls import path, include
from rest_framework import routers
from .views import TaskViewSet, TagViewSet

router = routers.DefaultRouter()
router.register("tasks", TaskViewSet)
router.register("tags", TagViewSet)

urlpatterns = [path("", include(router.urls))]
