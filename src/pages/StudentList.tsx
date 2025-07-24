import React, { useState } from 'react';
import { Search, Filter, Download, Eye, Edit, Trash2 } from 'lucide-react';
import type { Student } from '../types';

const StudentList: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedEvent, setSelectedEvent] = useState('');

  // Mock student data
  const mockStudents: Student[] = [
    {
      id: '1',
      firstName: 'Emma',
      middleName: 'Rose',
      lastName: 'Johnson',
      studentId: 'STU001',
      photo: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=400',
      event: 'Yearbook',
      createdAt: '2024-01-15',
    },
    {
      id: '2',
      firstName: 'Michael',
      lastName: 'Chen',
      studentId: 'STU002',
      photo: 'https://images.pexels.com/photos/1212984/pexels-photo-1212984.jpeg?auto=compress&cs=tinysrgb&w=400',
      event: 'Trip Day',
      createdAt: '2024-01-14',
    },
    {
      id: '3',
      firstName: 'Sarah',
      middleName: 'Elizabeth',
      lastName: 'Williams',
      studentId: 'STU003',
      photo: 'https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg?auto=compress&cs=tinysrgb&w=400',
      event: 'School ID',
      createdAt: '2024-01-13',
    },
    {
      id: '4',
      firstName: 'David',
      lastName: 'Rodriguez',
      studentId: 'STU004',
      photo: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=400',
      event: 'Picnic',
      createdAt: '2024-01-12',
    },
    {
      id: '5',
      firstName: 'Lisa',
      lastName: 'Anderson',
      studentId: 'STU005',
      photo: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=400',
      event: 'ID',
      createdAt: '2024-01-11',
    },
    {
      id: '6',
      firstName: 'James',
      middleName: 'Alexander',
      lastName: 'Wilson',
      studentId: 'STU006',
      photo: 'https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=400',
      event: 'Yearbook',
      createdAt: '2024-01-10',
    },
  ];

  const filteredStudents = mockStudents.filter(student => {
    const matchesSearch = `${student.firstName} ${student.lastName} ${student.studentId}`
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    const matchesEvent = selectedEvent === '' || student.event === selectedEvent;
    return matchesSearch && matchesEvent;
  });

  const handleAction = (action: string, student: Student) => {
    console.log(`${action} action for student:`, student);
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between space-y-4 sm:space-y-0">
        <div>
          <h2 className="text-2xl font-bold text-slate-900">Student List</h2>
          <p className="text-slate-600 mt-1">
            Manage and view all registered students
          </p>
        </div>
        <button className="flex items-center px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors duration-200">
          <Download className="w-4 h-4 mr-2" />
          Export Data
        </button>
      </div>

      {/* Filters */}
      <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
        <div className="flex flex-col sm:flex-row gap-4">
          <div className="flex-1">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-slate-400" />
              <input
                type="text"
                placeholder="Search by name or student ID..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
          </div>
          <div className="sm:w-48">
            <div className="relative">
              <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-slate-400" />
              <select
                value={selectedEvent}
                onChange={(e) => setSelectedEvent(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent appearance-none bg-white"
              >
                <option value="">All Events</option>
                <option value="Trip Day">Trip Day</option>
                <option value="ID">ID</option>
                <option value="School ID">School ID</option>
                <option value="Yearbook">Yearbook</option>
                <option value="Picnic">Picnic</option>
              </select>
            </div>
          </div>
        </div>
      </div>

      {/* Students Table */}
      <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-slate-200">
            <thead className="bg-slate-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">
                  Student
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">
                  Student ID
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">
                  Event
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">
                  Date Added
                </th>
                <th className="px-6 py-3 text-right text-xs font-medium text-slate-500 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-slate-200">
              {filteredStudents.map((student) => (
                <tr key={student.id} className="hover:bg-slate-50 transition-colors duration-150">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <div className="flex-shrink-0 h-10 w-10">
                        <img
                          className="h-10 w-10 rounded-full object-cover"
                          src={student.photo}
                          alt={`${student.firstName} ${student.lastName}`}
                        />
                      </div>
                      <div className="ml-4">
                        <div className="text-sm font-medium text-slate-900">
                          {student.firstName} {student.middleName} {student.lastName}
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-slate-900 font-mono">{student.studentId}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="inline-flex px-2 py-1 text-xs font-semibold rounded-full bg-blue-100 text-blue-800">
                      {student.event}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-slate-500">
                    {new Date(student.createdAt).toLocaleDateString()}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                    <div className="flex items-center justify-end space-x-2">
                      <button
                        onClick={() => handleAction('view', student)}
                        className="text-slate-400 hover:text-blue-500 transition-colors duration-200"
                        title="View Details"
                      >
                        <Eye className="w-4 h-4" />
                      </button>
                      <button
                        onClick={() => handleAction('edit', student)}
                        className="text-slate-400 hover:text-green-500 transition-colors duration-200"
                        title="Edit Student"
                      >
                        <Edit className="w-4 h-4" />
                      </button>
                      <button
                        onClick={() => handleAction('delete', student)}
                        className="text-slate-400 hover:text-red-500 transition-colors duration-200"
                        title="Delete Student"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {filteredStudents.length === 0 && (
          <div className="text-center py-12">
            <div className="text-slate-400 mb-2">
              <Search className="w-12 h-12 mx-auto" />
            </div>
            <h3 className="text-lg font-medium text-slate-900 mb-1">No students found</h3>
            <p className="text-slate-500">
              Try adjusting your search criteria or add a new student.
            </p>
          </div>
        )}
      </div>

      {/* Pagination */}
      {filteredStudents.length > 0 && (
        <div className="bg-white rounded-xl shadow-sm border border-slate-200 px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="text-sm text-slate-700">
              Showing <span className="font-medium">1</span> to{' '}
              <span className="font-medium">{filteredStudents.length}</span> of{' '}
              <span className="font-medium">{filteredStudents.length}</span> results
            </div>
            <div className="flex space-x-2">
              <button className="px-3 py-1 text-sm bg-slate-100 text-slate-600 rounded hover:bg-slate-200 transition-colors duration-200">
                Previous
              </button>
              <button className="px-3 py-1 text-sm bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors duration-200">
                1
              </button>
              <button className="px-3 py-1 text-sm bg-slate-100 text-slate-600 rounded hover:bg-slate-200 transition-colors duration-200">
                Next
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default StudentList;