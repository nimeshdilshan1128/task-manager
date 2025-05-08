const express = require('express');
const cors = require('cors');
const db = require('./db');

const app = express();
app.use(cors());
app.use(express.json());

// Get all tasks
app.get('/tasks', async (req, res) => {
  const [rows] = await db.query('SELECT * FROM tasks ORDER BY id DESC');
  res.json(rows);
});

// Add a task
app.post('/tasks', async (req, res) => {
  const { title } = req.body;
  await db.query('INSERT INTO tasks (title) VALUES (?)', [title]);
  res.json({ message: 'Task added' });
});

// Update task
app.put('/tasks/:id', async (req, res) => {
  const { id } = req.params;
  const { completed } = req.body;
  await db.query('UPDATE tasks SET completed = ? WHERE id = ?', [completed, id]);
  res.json({ message: 'Task updated' });
});

// Delete task
app.delete('/tasks/:id', async (req, res) => {
  const { id } = req.params;
  await db.query('DELETE FROM tasks WHERE id = ?', [id]);
  res.json({ message: 'Task deleted' });
});

// Start server
app.listen(5000, () => console.log('Backend running at http://localhost:5000'));
