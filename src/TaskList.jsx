import React, { useState, useEffect } from 'react';
import axios from 'axios';

function TaskList() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const fetchTasks = async () => {
        try {
          const response = await axios.get('http://localhost:3000/users'); // Reemplaza 'URL_DE_TU_API' con la URL real de tu API
          console.log(response);
          setTasks(response.data);
        } catch (error) {
          console.error('Error fetching tasks:', error);
        }
      };
      fetchTasks()
  }, []);

  return (
    <div>
      <h1>Lista de Tareas</h1>
      <ul>
        {tasks.map(task => (
          <li key={task.id} style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>
            {task.name}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TaskList;