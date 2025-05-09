import React from 'react';

 // Format the task creation date to a readable string

const TaskItem = ({ task, onToggle, onDelete }) => {
    const formattedDate = new Date(task.created_at).toLocaleString('en-US', {
        hour: 'numeric',
        minute: 'numeric',
        hour12: true,
        day: 'numeric',
        month: 'short',
        year: 'numeric'
      });

  return (
     // Apply "completed" class conditionally if the task is marked as completed
    <div className={`task-item ${task.completed ? 'completed' : ''}`}>
      <div className="task-left">
        <input
          type="checkbox"
          checked={task.completed === 1}
          onChange={() => onToggle(task.id, task.completed)}
        />
        <div className="task-text">
          <span>{task.title}</span>
          <div className="created-date">🕒 {formattedDate}</div>
        </div>
      </div>
      <button onClick={() => onDelete(task.id)}>Delete</button>
    </div>
  );
};

export default TaskItem;
