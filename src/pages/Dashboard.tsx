import React from 'react';
import { Users, Camera, FileText, Calendar, UserPlus } from 'lucide-react';

const Dashboard: React.FC = () => {
  const stats = [
    {
      name: 'Total Students',
      value: '2,847',
      icon: Users,
      change: '+12%',
      changeType: 'positive' as const,
    },
    {
      name: 'Photos Uploaded',
      value: '8,392',
      icon: Camera,
      change: '+5%',
      changeType: 'positive' as const,
    },
    {
      name: 'Documents',
      value: '1,429',
      icon: FileText,
      change: '+8%',
      changeType: 'positive' as const,
    },
    {
      name: 'Active Events',
      value: '3',
      icon: Calendar,
      change: 'stable',
      changeType: 'neutral' as const,
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
    <div className="space-y-8">
      {/* Welcome Section */}
      <div className="bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl shadow-lg">
        <div className="px-6 py-8 sm:px-8 sm:py-10">
          <div className="max-w-3xl">
            <h1 className="text-3xl font-bold text-white mb-2">
              Welcome back, Admin!
            </h1>
            <p className="text-blue-100 text-lg leading-relaxed">
              Manage student photos and documents efficiently. Your dashboard shows the latest activity 
              and system statistics to help you stay on top of everything.
            </p>
          </div>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => {
          const Icon = stat.icon;
          return (
            <div
              key={stat.name}
              className="bg-white rounded-xl shadow-sm border border-slate-200 p-6 hover:shadow-md transition-shadow duration-200"
            >
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-slate-600">{stat.name}</p>
                  <p className="text-3xl font-bold text-slate-900 mt-2">{stat.value}</p>
                </div>
                <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center">
                  <Icon className="w-6 h-6 text-blue-500" />
                </div>
              </div>
              <div className="mt-4 flex items-center">
                <span
                  className={`text-sm font-medium ${
                    stat.changeType === 'positive'
                      ? 'text-green-600'
                      : stat.changeType === 'negative'
                      ? 'text-red-600'
                      : 'text-slate-500'
                  }`}
                >
                  {stat.change}
                </span>
                <span className="text-sm text-slate-500 ml-2">from last month</span>
              </div>
            </div>
          );
        })}
      </div>

      {/* Recent Activity */}
      <div className="bg-white rounded-xl shadow-sm border border-slate-200">
        <div className="px-6 py-4 border-b border-slate-200">
          <h3 className="text-lg font-semibold text-slate-900">Recent Activity</h3>
        </div>
        <div className="divide-y divide-slate-200">
          {recentActivity.map((activity) => (
            <div key={activity.id} className="px-6 py-4 hover:bg-slate-50 transition-colors duration-150">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                    <span className="text-sm font-medium text-blue-600">
                      {activity.student.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-slate-900">{activity.student}</p>
                    <p className="text-sm text-slate-500">
                      {activity.action} • {activity.event}
                    </p>
                  </div>
                </div>
                <div className="text-sm text-slate-400">{activity.time}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Quick Actions */}
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
          <h3 className="text-lg font-semibold text-slate-900 mb-4">Quick Actions</h3>
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
            <button className="flex items-center justify-center px-4 py-3 bg-blue-50 text-blue-700 rounded-lg hover:bg-blue-100 transition-colors duration-200 font-medium">
              <UserPlus className="w-4 h-4 mr-2" />
              Add Student
            </button>
            <button className="flex items-center justify-center px-4 py-3 bg-slate-50 text-slate-700 rounded-lg hover:bg-slate-100 transition-colors duration-200 font-medium">
              <Camera className="w-4 h-4 mr-2" />
              Bulk Upload
            </button>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
          <h3 className="text-lg font-semibold text-slate-900 mb-4">System Status</h3>
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-sm text-slate-600">Storage Used</span>
              <span className="text-sm font-semibold text-slate-900">68% (3.2TB)</span>
            </div>
            <div className="w-full bg-slate-200 rounded-full h-2">
              <div className="bg-blue-500 h-2 rounded-full" style={{ width: '68%' }} />
            </div>
            <div className="flex items-center justify-between text-sm">
              <span className="text-green-600">System Healthy</span>
              <span className="text-slate-500">Last backup: 2 hours ago</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;