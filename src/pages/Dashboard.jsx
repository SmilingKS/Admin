import React from 'react';
import { Users, Camera, FileText, Calendar, UserPlus } from 'lucide-react';
import './Dashboard.css';

const Dashboard = () => {
  const stats = [
    {
      name: 'Total Students',
      value: '2,847',
      icon: Users,
      change: '+12%',
      changeType: 'positive',
    },
    {
      name: 'Photos Uploaded',
      value: '8,392',
      icon: Camera,
      change: '+5%',
      changeType: 'positive',
    },
    {
      name: 'Documents',
      value: '1,429',
      icon: FileText,
      change: '+8%',
      changeType: 'positive',
    },
    {
      name: 'Active Events',
      value: '3',
      icon: Calendar,
      change: 'stable',
      changeType: 'neutral',
    },
  ];

  const recentActivity = [
    { id: 1, student: 'Emma Johnson', action: 'Photo uploaded', event: 'Yearbook', time: '2 mins ago' },
    { id: 2, student: 'Michael Chen', action: 'Document added', event: 'School ID', time: '5 mins ago' },
    { id: 3, student: 'Sarah Williams', action: 'Profile updated', event: 'Trip Day', time: '12 mins ago' },
    { id: 4, student: 'David Rodriguez', action: 'Photo uploaded', event: 'Picnic', time: '18 mins ago' },
    { id: 5, student: 'Lisa Anderson', action: 'Document verified', event: 'ID', time: '25 mins ago' },
  ];

  return (
    <div className="dashboard">
      {/* Welcome Section */}
      <div className="welcome-section">
        <div className="welcome-content">
          <h1>Welcome back, Admin!</h1>
          <p>
            Manage student photos and documents efficiently. Your dashboard shows the latest activity 
            and system statistics to help you stay on top of everything.
          </p>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="stats-grid">
        {stats.map((stat) => {
          const Icon = stat.icon;
          return (
            <div key={stat.name} className="stat-card">
              <div className="stat-content">
                <div className="stat-info">
                  <p className="stat-name">{stat.name}</p>
                  <p className="stat-value">{stat.value}</p>
                </div>
                <div className="stat-icon">
                  <Icon />
                </div>
              </div>
              <div className="stat-change">
                <span className={`change-value ${stat.changeType}`}>
                  {stat.change}
                </span>
                <span className="change-label">from last month</span>
              </div>
            </div>
          );
        })}
      </div>

      {/* Recent Activity */}
      <div className="activity-section">
        <div className="activity-header">
          <h3>Recent Activity</h3>
        </div>
        <div className="activity-list">
          {recentActivity.map((activity) => (
            <div key={activity.id} className="activity-item">
              <div className="activity-content">
                <div className="activity-user">
                  <div className="user-avatar">
                    <span>
                      {activity.student.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  <div className="user-info">
                    <p className="user-name">{activity.student}</p>
                    <p className="user-action">
                      {activity.action} • {activity.event}
                    </p>
                  </div>
                </div>
                <div className="activity-time">{activity.time}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Quick Actions */}
      <div className="bottom-section">
        <div className="quick-actions">
          <h3>Quick Actions</h3>
          <div className="actions-grid">
            <button className="action-button primary">
              <UserPlus />
              Add Student
            </button>
            <button className="action-button secondary">
              <Camera />
              Bulk Upload
            </button>
          </div>
        </div>

        <div className="system-status">
          <h3>System Status</h3>
          <div className="status-content">
            <div className="status-item">
              <span className="status-label">Storage Used</span>
              <span className="status-value">68% (3.2TB)</span>
            </div>
            <div className="progress-bar">
              <div className="progress-fill" style={{ width: '68%' }}></div>
            </div>
            <div className="status-footer">
              <span className="status-healthy">System Healthy</span>
              <span className="status-backup">Last backup: 2 hours ago</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;