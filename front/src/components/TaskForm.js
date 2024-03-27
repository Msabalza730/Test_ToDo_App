import React, { useState } from 'react';
import axios from 'axios';

const TaskForm = ({ history, match }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = { title, description };
    if (match.params.id) {
      await axios.put(`/api/tasks/${match.params.id}/`, data);
    } else {
      await axios.post('/api/tasks/', data);
    }
    history.push('/tasks');
  };

  return (
    <div>
      <h1>{match.params.id ? 'Edit Task' : 'Create Task'}</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <textarea
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <button type="submit">Save</button>
      </form>
    </div>
  );
}

export default TaskForm;
