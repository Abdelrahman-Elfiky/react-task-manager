import React from 'react';

const AddTaskButton = ({ onAddClick }) => {
  return (
    <div className="add-task-button-container">
      <button 
        className="add-task-button"
        onClick={onAddClick} 
      >
        Add New Task
      </button>
    </div>
  );
};

export default AddTaskButton;