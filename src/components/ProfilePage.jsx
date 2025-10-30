

import React from 'react';
import { FaUserCircle, FaEnvelope, FaCalendarAlt, FaCheckCircle, FaClipboardList } from 'react-icons/fa';
import { userProfile } from '../data/userProfile'; 

const ProfilePage = () => {
  const profile = userProfile; 

  return (
    <div className="profile-container">
      <div className="profile-card">
        
        
        <div className="profile-header-section">
          <FaUserCircle size={80} className="profile-avatar" />
          <h1>{profile.name}</h1>
          <p className="profile-role">Task Manager </p>
        </div>

        
        <div className="profile-details-section">
          <h3> Informations</h3>
          <div className="detail-item">
            <FaEnvelope className="detail-icon" />
            <span>{profile.email}</span>
          </div>
          <div className="detail-item">
            <FaCalendarAlt className="detail-icon" />
            <span>Member Since: {profile.memberSince}</span>
          </div>
        </div>

        
        <div className="profile-stats-section">
          <h3>Tasks</h3>
          <div className="stats-grid">
            <div className="stat-item completed">
              <FaCheckCircle size={24} />
              <h4>{profile.tasksCompleted}</h4>
              <p>Completed Tasks</p>
            </div>
            <div className="stat-item pending">
              <FaClipboardList size={24} />
              <h4>{profile.tasksPending}</h4>
              <p>Pending Tasks</p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default ProfilePage;