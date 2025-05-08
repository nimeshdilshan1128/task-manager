import React from 'react';

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
