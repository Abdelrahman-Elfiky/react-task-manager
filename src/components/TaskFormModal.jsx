import React, { useState, useEffect } from 'react';
import { IoClose } from 'react-icons/io5';

const TaskFormModal = ({ isOpen, onClose, taskToEdit, onSave }) => {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    difficulty: 'easy',
    status: 'pending',
    dueDate: '',
  });

  useEffect(() => {
    if (taskToEdit) {
      setFormData({
        ...taskToEdit,
        dueDate: taskToEdit.dueDate ? new Date(taskToEdit.dueDate).toISOString().split('T')[0] : '', 
      });
    } else {
      setFormData({
        title: '',
        description: '',
        difficulty: 'easy',
        status: 'pending',
        dueDate: '',
      });
    }
  }, [taskToEdit, isOpen]); 

  if (!isOpen) return null; 

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(formData);
    onClose(); 
  };

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <div className="modal-header">
          <h3>{taskToEdit ? 'Edit Task' : 'Add New Task'}</h3>
          <button className="delete-button" onClick={onClose}>
            <IoClose size={20} />
          </button>
        </div>
        <form onSubmit={handleSubmit} className="task-form">
          <label>Title: <input type="text" name="title" value={formData.title} onChange={handleChange} required /></label>
          
          <label>Description: <textarea name="description" value={formData.description} onChange={handleChange} required /></label>
          
          <label>Difficulty: 
            <select name="difficulty" value={formData.difficulty} onChange={handleChange}>
              <option value="easy">Easy</option>
              <option value="medium">Medium</option>
              <option value="hard">Hard</option>
            </select>
          </label>
          
          <label>Status:
            <select name="status" value={formData.status} onChange={handleChange}>
              <option value="pending">Pending</option>
              <option value="in progress">In Progress</option>
              <option value="completed">Completed</option>
            </select>
          </label>
          
          <label>Due Date: <input type="date" name="dueDate" value={formData.dueDate} onChange={handleChange} /></label>

          <button type="submit" className="add-task-button">
            {taskToEdit ? 'Save Changes' : 'Add Task'}
          </button>
        </form>
      </div>
    </div>
  );
};
export default TaskFormModal;