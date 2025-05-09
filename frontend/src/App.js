import React, { useEffect, useState } from 'react'; 
import axios from 'axios';  //get user input and send it to the backend
import TaskItem from './TaskItem';
import './App.css';

function App() {
  const [tasks, setTasks] = useState([]);
  const [title, setTitle] = useState('');

  const fetchTasks = async () => {
    const res = await axios.get('http://localhost:5000/tasks');
    setTasks(res.data);
  };

  const addTask = async () => {
    if (title.trim() === '') return;
    await axios.post('http://localhost:5000/tasks', { title });
    setTitle('');
    fetchTasks();
  };

  const toggleComplete = async (id, currentStatus) => {
    const newStatus = currentStatus ? 0 : 1;
    await axios.put(`http://localhost:5000/tasks/${id}`, { completed: newStatus });
    fetchTasks();
  };

  const deleteTask = async (id) => {
    await axios.delete(`http://localhost:5000/tasks/${id}`);
    fetchTasks();
  };

  useEffect(() => {
    fetchTasks();    // use for users input store
  }, []);

  //  Task counts
  const pendingCount = tasks.filter(task => task.completed === 0).length;
  const completedCount = tasks.filter(task => task.completed === 1).length;

  return (
    <div className="app">
      <h1>Task Manager</h1>

      {/* Task stats section */}
      <div className="task-stats">
        <p>🆗 Completed: {completedCount}</p>
        <p>🕓 Pending: {pendingCount}</p>
      </div>

      <div className="task-input">
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Enter a new task"
        />
        <button onClick={addTask}>Add</button>
      </div>

      <div className="task-list">
        {tasks.map(task => (
          <TaskItem
            key={task.id}
            task={task}
            onToggle={() => toggleComplete(task.id, task.completed)}
            onDelete={deleteTask}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
