import React from 'react';
import { IoClose } from 'react-icons/io5'; 

const getStatusClass = (value) => value.toLowerCase().replace(' ', '-');

const TaskCard = ({ task, onEdit, onDelete }) => {
  const { id, title, description, difficulty, status, dueDate } = task;

  const handleDeleteClick = (e) => {
    e.stopPropagation(); 
    onDelete(id); 
  };

  return (
    <div className="task-card" onClick={() => onEdit(task)}>
      <div className="task-header">
        <h3 className="task-title">{title}</h3>
        
        <button 
          className="delete-button" 
          aria-label="Delete Task"
          onClick={handleDeleteClick} 
        >
          <IoClose size={20} />
        </button>
      </div>
      
      <p className="task-description">{description}</p>
      
      <div className="task-badges">
        <span className={`badge difficulty-${getStatusClass(difficulty)}`}>
          {difficulty}
        </span>
        <span className={`badge status-${getStatusClass(status)}`}>
          {status}
        </span>
      </div>
      
      <p className="task-due-date">Due : {dueDate}</p>
    </div>
  );
};

export default TaskCard;