import React, { useState } from 'react';
import { Upload, X, CheckCircle } from 'lucide-react';
import toast from 'react-hot-toast';
import { EVENT_OPTIONS } from '../types';
import './AddStudent.css';

const AddStudent = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    middleName: '',
    lastName: '',
    studentId: '',
    event: '',
  });
  
  const [photoFile, setPhotoFile] = useState(null);
  const [photoPreview, setPhotoPreview] = useState('');
  const [documentFile, setDocumentFile] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handlePhotoUpload = (e) => {
    const file = e.target.files?.[0];
    if (file) {
      if (file.type.startsWith('image/')) {
        setPhotoFile(file);
        const reader = new FileReader();
        reader.onload = (e) => {
          setPhotoPreview(e.target?.result);
        };
        reader.readAsDataURL(file);
      } else {
        toast.error('Please select a valid image file');
      }
    }
  };

  const handleDocumentUpload = (e) => {
    const file = e.target.files?.[0];
    if (file) {
      const validTypes = ['image/', 'application/pdf'];
      const isValid = validTypes.some(type => file.type.startsWith(type));
      
      if (isValid) {
        setDocumentFile(file);
      } else {
        toast.error('Please select an image or PDF file');
      }
    }
  };

  const removePhoto = () => {
    setPhotoFile(null);
    setPhotoPreview('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!formData.firstName || !formData.lastName || !formData.studentId || !formData.event) {
      toast.error('Please fill in all required fields');
      return;
    }

    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    console.log('Form submitted:', {
      ...formData,
      photo: photoFile?.name,
      document: documentFile?.name,
    });

    toast.success('Student added successfully!');
    
    // Reset form
    setFormData({
      firstName: '',
      middleName: '',
      lastName: '',
      studentId: '',
      event: '',
    });
    setPhotoFile(null);
    setPhotoPreview('');
    setDocumentFile(null);
    setIsSubmitting(false);
  };

  return (
    <div className="add-student">
      <div className="form-container">
        <div className="form-header">
          <h2>Add New Student</h2>
          <p>Upload student information and documents for event management</p>
        </div>

        <form onSubmit={handleSubmit} className="student-form">
          {/* Name Fields */}
          <div className="name-fields">
            <div className="form-group">
              <label htmlFor="firstName">First Name *</label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                value={formData.firstName}
                onChange={handleInputChange}
                placeholder="Enter first name"
                required
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="middleName">Middle Name</label>
              <input
                type="text"
                id="middleName"
                name="middleName"
                value={formData.middleName}
                onChange={handleInputChange}
                placeholder="Enter middle name"
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="lastName">Last Name *</label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                value={formData.lastName}
                onChange={handleInputChange}
                placeholder="Enter last name"
                required
              />
            </div>
          </div>

          {/* Student ID and Event */}
          <div className="id-event-fields">
            <div className="form-group">
              <label htmlFor="studentId">Student ID *</label>
              <input
                type="text"
                id="studentId"
                name="studentId"
                value={formData.studentId}
                onChange={handleInputChange}
                placeholder="Enter student ID"
                required
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="event">Event *</label>
              <select
                id="event"
                name="event"
                value={formData.event}
                onChange={handleInputChange}
                required
              >
                <option value="">Select an event</option>
                {EVENT_OPTIONS.map((event) => (
                  <option key={event} value={event}>
                    {event}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Photo Upload */}
          <div className="form-group">
            <label>Student Photo</label>
            
            {!photoPreview ? (
              <div className="upload-area">
                <input
                  type="file"
                  accept="image/*"
                  onChange={handlePhotoUpload}
                  className="file-input"
                  id="photo-upload"
                />
                <label htmlFor="photo-upload" className="upload-label">
                  <Upload className="upload-icon" />
                  <span className="upload-text">Click to upload or drag and drop</span>
                  <span className="upload-hint">PNG, JPG, GIF up to 10MB</span>
                </label>
              </div>
            ) : (
              <div className="photo-preview">
                <img src={photoPreview} alt="Student preview" />
                <button type="button" onClick={removePhoto} className="remove-photo">
                  <X />
                </button>
              </div>
            )}
          </div>

          {/* Document Upload */}
          <div className="form-group">
            <label>Student ID Document</label>
            <div className="document-upload">
              <input
                type="file"
                accept="image/*,.pdf"
                onChange={handleDocumentUpload}
                className="file-input"
                id="document-upload"
              />
              <label htmlFor="document-upload" className="document-label">
                <Upload className="upload-icon" />
                <span>
                  {documentFile ? documentFile.name : 'Upload image or PDF document'}
                </span>
              </label>
            </div>
          </div>

          {/* Submit Button */}
          <div className="form-actions">
            <button type="submit" disabled={isSubmitting} className="submit-button">
              {isSubmitting ? (
                <>
                  <div className="spinner" />
                  <span>Adding Student...</span>
                </>
              ) : (
                <>
                  <CheckCircle />
                  <span>Add Student</span>
                </>
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddStudent;