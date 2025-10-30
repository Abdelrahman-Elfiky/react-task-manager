import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header.jsx';
import SearchBar from './components/SearchBar.jsx';
import TaskList from './components/TaskList.jsx';
import AddTaskButton from './components/AddTaskButton.jsx';
import TaskFormModal from './components/TaskFormModal.jsx';
import ProfilePage from './components/ProfilePage.jsx'; 
import { mockTasks } from './data/mockTasks.js';
import './styles/App.css'; 



const App = () => {
  const [tasks, setTasks] = useState(mockTasks);
  const [searchTerm, setSearchTerm] = useState('');
  
  
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingTask, setEditingTask] = useState(null); 


  const deleteTask = (taskId) => {
    setTasks(prevTasks => prevTasks.filter(task => task.id !== taskId));
  };

  
  const handleSaveTask = (taskData) => {
    if (editingTask) {
      
      setTasks(tasks.map(t => 
        t.id === editingTask.id ? { ...t, ...taskData } : t
      ));
    } else {
      
      setTasks(prevTasks => [
        ...prevTasks,
        { 
            ...taskData, 
            id: Date.now(), 
        }
      ]);
    }
    setIsModalOpen(false);
    setEditingTask(null);
  };
  
  
  const openAddModal = () => {
    setEditingTask(null); 
    setIsModalOpen(true);
  };

  
  const openEditModal = (task) => {
    setEditingTask(task);
    setIsModalOpen(true);
  };

  
  const filteredTasks = tasks.filter(task =>
    task.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="app-container">
      <Header />

      <Routes>
        <Route path="/" element={
          <main className="main-content">
            <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
            
            <TaskList 
                tasks={filteredTasks} 
                onDelete={deleteTask} 
                onEdit={openEditModal} 
            />
            
            <AddTaskButton onAddClick={openAddModal} />
          </main>
        } />

        <Route path="/profile" element={<ProfilePage />} /> 
      </Routes>
      
      
      <TaskFormModal 
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        taskToEdit={editingTask}
        onSave={handleSaveTask}
      />
    </div>
  );
};

export default App;