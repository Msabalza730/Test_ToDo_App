import React, { useState, useEffect } from 'react';
import axios from 'axios';

const TaskDetail = ({ match }) => {
  const [task, setTask] = useState(null);

  useEffect(() => {
    const fetchTask = async () => {
      try {
        const response = await axios.get(`/api/tasks/${match.params.id}/`);
        setTask(response.data);
      } catch (error) {
        console.error('Error fetching task:', error);
      }
    };

    fetchTask();
  }, [match.params.id]);

  return (
    <div>
      <h1>Task Detail</h1>
      {task ? (
        <div>
          <h2>{task.title}</h2>
          <p>Description: {task.description}</p>
          <p>Status: {task.completed ? 'Completed' : 'Pending'}</p>
        </div>
      ) : (
        <p>Loading task...</p>
      )}
    </div>
  );
};

export default TaskDetail;
