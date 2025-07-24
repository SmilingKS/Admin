import React, { useState } from 'react';
import { Search, Filter, Download, Eye, Edit, Trash2 } from 'lucide-react';
import './StudentList.css';

const StudentList = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedEvent, setSelectedEvent] = useState('');

  // Mock student data
  const mockStudents = [
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

  const handleAction = (action, student) => {
    console.log(`${action} action for student:`, student);
  };

  return (
    <div className="student-list">
      {/* Header */}
      <div className="list-header">
        <div className="header-info">
          <h2>Student List</h2>
          <p>Manage and view all registered students</p>
        </div>
        <button className="export-button">
          <Download />
          Export Data
        </button>
      </div>

      {/* Filters */}
      <div className="filters-section">
        <div className="filters-container">
          <div className="search-container">
            <div className="search-input">
              <Search className="search-icon" />
              <input
                type="text"
                placeholder="Search by name or student ID..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </div>
          <div className="filter-container">
            <div className="filter-select">
              <Filter className="filter-icon" />
              <select
                value={selectedEvent}
                onChange={(e) => setSelectedEvent(e.target.value)}
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
      <div className="table-container">
        <div className="table-wrapper">
          <table className="students-table">
            <thead>
              <tr>
                <th>Student</th>
                <th>Student ID</th>
                <th>Event</th>
                <th>Date Added</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredStudents.map((student) => (
                <tr key={student.id}>
                  <td>
                    <div className="student-info">
                      <div className="student-avatar">
                        <img
                          src={student.photo}
                          alt={`${student.firstName} ${student.lastName}`}
                        />
                      </div>
                      <div className="student-name">
                        {student.firstName} {student.middleName} {student.lastName}
                      </div>
                    </div>
                  </td>
                  <td>
                    <div className="student-id">{student.studentId}</div>
                  </td>
                  <td>
                    <span className="event-badge">
                      {student.event}
                    </span>
                  </td>
                  <td className="date-cell">
                    {new Date(student.createdAt).toLocaleDateString()}
                  </td>
                  <td>
                    <div className="actions">
                      <button
                        onClick={() => handleAction('view', student)}
                        className="action-button view"
                        title="View Details"
                      >
                        <Eye />
                      </button>
                      <button
                        onClick={() => handleAction('edit', student)}
                        className="action-button edit"
                        title="Edit Student"
                      >
                        <Edit />
                      </button>
                      <button
                        onClick={() => handleAction('delete', student)}
                        className="action-button delete"
                        title="Delete Student"
                      >
                        <Trash2 />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {filteredStudents.length === 0 && (
          <div className="empty-state">
            <div className="empty-icon">
              <Search />
            </div>
            <h3>No students found</h3>
            <p>Try adjusting your search criteria or add a new student.</p>
          </div>
        )}
      </div>

      {/* Pagination */}
      {filteredStudents.length > 0 && (
        <div className="pagination">
          <div className="pagination-info">
            Showing <span>1</span> to{' '}
            <span>{filteredStudents.length}</span> of{' '}
            <span>{filteredStudents.length}</span> results
          </div>
          <div className="pagination-controls">
            <button className="pagination-button">Previous</button>
            <button className="pagination-button active">1</button>
            <button className="pagination-button">Next</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default StudentList;