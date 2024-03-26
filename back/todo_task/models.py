from django.contrib.auth.models import User
from django.db import models


class Task(models.Model):
    """
    Model representing a Task with:
        -Title of the task
        -Description of the task
        -If the task is Done check TRUE else FALSE
        -The user who create the task
    """
    title = models.CharField(max_length=100)
    description = models.TextField()
    completed = models.BooleanField(default=False)
    created_at = models.DateTimeField(auto_now_add=True)
    user = models.ForeignKey(User, on_delete=models.CASCADE)

    def __str__(self):
        return self.title

