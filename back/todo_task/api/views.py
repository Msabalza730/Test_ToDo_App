from rest_framework import viewsets
from rest_framework.permissions import IsAuthenticated
from todo_task.models import Task

from .serializers import TaskSerializer


class TaskViewSet(viewsets.ModelViewSet):
    """
    View for listing and creating task if user is authenticated.
    """
    queryset = Task.objects.all()
    serializer_class = TaskSerializer
    permission_classes = [IsAuthenticated]

    def perform_create(self, serializer):
        serializer.save(user=self.request.user)
