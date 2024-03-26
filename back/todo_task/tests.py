from django.contrib.auth.models import User
from django.test import TestCase
from rest_framework import status
from rest_framework.test import APIClient

from .models import Task
from .views import TaskViewSet


class TaskViewSetTestCase(TestCase):
    def setUp(self):
        self.user = User.objects.create_user(username='testuser', password='password123')
        self.client = APIClient()
        self.client.force_authenticate(user=self.user)

    def test_create_task(self):
        """
        Testing a task creation:
            - Make a POST request to create the task
            - Verifies that the request was successful (status code 201 - Created)
            - Verify that the task was created correctly in the database
        """
        task_data = {
            'title': 'Task test1',
            'description': 'This is a test',
            'completed': False
        }
        response = self.client.post('/api/tasks/', task_data, format='json')
        self.assertEqual(response.status_code, status.HTTP_201_CREATED)
        self.assertTrue(Task.objects.filter(title='Task test1').exists())


    def test_retrieve_task(self):
        """
        Testing a task:
            - Task example for the user
            - Make a GET request to obtain the task created
            - Verifies that the request was successful (status code 200 - OK)
            - Verifies is the data is ok.
        """
        task = Task.objects.create(title='Task example', description='This is a test', completed=False, user=self.user)

        response = self.client.get(f'/api/tasks/{task.id}/')

        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertEqual(response.data['title'], 'Task example')
        self.assertEqual(response.data['description'], 'This is a test')
        self.assertEqual(response.data['completed'], False)


    def test_delete_task(self):
        """
        Testing delete task:
            - Make a DELETE request to delete the task
            - Verifies that the request was successful (status code 204 - NO Content)
            - Verifies is the task was deleted into the database.
        """

        response = self.client.delete(f'/api/tasks/{self.task.id}/')
        self.assertEqual(response.status_code, status.HTTP_204_NO_CONTENT)
        self.assertFalse(Task.objects.filter(pk=self.task.id).exists())


    def test_update_task(self):
        """
        Testing a task update:
            - Make a PUT request to update the task
            - Verifies that the request was successful (status code 200 - OK)
            - Verify that the task was updated correctly in the database
        """
        updated_data = {
            'title': 'Task Updated',
            'description': 'This is a updated task',
            'completed': True
        }

        response = self.client.put(f'/api/tasks/{self.task.id}/', updated_data, format='json')
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.task.refresh_from_db()
        self.assertEqual(self.task.title, 'Task Updated')
        self.assertEqual(self.task.description, 'This is a updated task')
        self.assertEqual(self.task.completed, True)