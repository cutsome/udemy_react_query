from .models import Task, Tag
from .serializers import TaskSerializer, TagSerializer
from rest_framework import serializers, viewsets


class TaskViewSet(viewsets.ModelViewSet):
    queryset = Task.objects.all()
    serializer_class = TaskSerializer


class TagViewSet(viewsets.ModelViewSet):
    queryset = Tag.objects.all()
    serializer_class = TagSerializer
