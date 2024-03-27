import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import PrivateRoute from './PrivateRoute';
import Home from './Home';
import Login from './Login';
import TaskList from './TaskList';
import TaskForm from './TaskForm';
import TaskDetail from './TaskDetail';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/login" component={Login} />
        <PrivateRoute path="/tasks" component={TaskList} />
        <PrivateRoute path="/task/:id" component={TaskDetail} />
        <PrivateRoute path="/create-task" component={TaskForm} />
        <PrivateRoute path="/edit-task/:id" component={TaskForm} />
      </Switch>
    </Router>
  );
}

export default App;
