import React from 'react';
import TaskCard from './TaskCard.jsx';

const TaskList = ({ tasks, onDelete, onEdit }) => {
  return (
    <div className="task-list-grid">
      {tasks.map(task => (
        <TaskCard 
            key={task.id} 
            task={task} 
            onDelete={onDelete} 
            onEdit={onEdit}
        />
      ))}
    </div>
  );
};

export default TaskList;