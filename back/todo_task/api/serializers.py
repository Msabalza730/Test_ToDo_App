from rest_framework import serializers
from todo_task.models import Task


class TaskSerializer(serializers.ModelSerializer):
    """
    Serializer for the Task model.
    """
    class Meta:
        model = Task
        fields = '__all__'
