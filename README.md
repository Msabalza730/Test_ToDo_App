# Test_ToDo_App
ToDo Application using Django Rest Framework and React Js

## Run this App

- git clone https://github.com/Msabalza730/Test_ToDo_App.git

- Create a virtual env
```python
    - python -m venv env
    - source bin/activate
```
- Create a superuser: python manage.py createsuperuser

- Using Bash: postman or cURL send a post to obtain the token auth
    - curl -X POST -H "Content-Type: application/json" -d '{"username": "name_your_user", "password": "your_password"}' http://127.0.0.1:8000/api-token-auth/


- With your JWT token: curl -H "Authorization: Token <tu_token>" http://127.0.0.1:8000/api/tasks/


## Run the app with docker: 
