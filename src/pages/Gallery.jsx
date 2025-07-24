import React, { useState } from 'react';
import { Search, Filter, Grid, List, Download, Heart } from 'lucide-react';
import './Gallery.css';

const Gallery = () => {
  const [viewMode, setViewMode] = useState('grid');
  const [selectedEvent, setSelectedEvent] = useState('');
  const [searchTerm, setSearchTerm] = useState('');

  // Mock gallery data with high-quality student photos
  const galleryItems = [
    {
      id: '1',
      name: 'Emma Johnson',
      event: 'Yearbook',
      date: '2024-01-15',
      image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=800',
      likes: 24,
    },
    {
      id: '2',
      name: 'Michael Chen',
      event: 'Trip Day',
      date: '2024-01-14',
      image: 'https://images.pexels.com/photos/1212984/pexels-photo-1212984.jpeg?auto=compress&cs=tinysrgb&w=800',
      likes: 18,
    },
    {
      id: '3',
      name: 'Sarah Williams',
      event: 'School ID',
      date: '2024-01-13',
      image: 'https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg?auto=compress&cs=tinysrgb&w=800',
      likes: 32,
    },
    {
      id: '4',
      name: 'David Rodriguez',
      event: 'Picnic',
      date: '2024-01-12',
      image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=800',
      likes: 41,
    },
    {
      id: '5',
      name: 'Lisa Anderson',
      event: 'ID',
      date: '2024-01-11',
      image: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=800',
      likes: 15,
    },
    {
      id: '6',
      name: 'James Wilson',
      event: 'Yearbook',
      date: '2024-01-10',
      image: 'https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=800',
      likes: 27,
    },
    {
      id: '7',
      name: 'Maya Patel',
      event: 'Trip Day',
      date: '2024-01-09',
      image: 'https://images.pexels.com/photos/1181424/pexels-photo-1181424.jpeg?auto=compress&cs=tinysrgb&w=800',
      likes: 35,
    },
    {
      id: '8',
      name: 'Alex Thompson',
      event: 'Picnic',
      date: '2024-01-08',
      image: 'https://images.pexels.com/photos/1040881/pexels-photo-1040881.jpeg?auto=compress&cs=tinysrgb&w=800',
      likes: 22,
    },
    {
      id: '9',
      name: 'Zoe Martinez',
      event: 'School ID',
      date: '2024-01-07',
      image: 'https://images.pexels.com/photos/1024311/pexels-photo-1024311.jpeg?auto=compress&cs=tinysrgb&w=800',
      likes: 19,
    },
  ];

  const filteredItems = galleryItems.filter(item => {
    const matchesSearch = item.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesEvent = selectedEvent === '' || item.event === selectedEvent;
    return matchesSearch && matchesEvent;
  });

  const handleLike = (id) => {
    console.log('Liked photo:', id);
  };

  const handleDownload = (id, name) => {
    console.log('Download photo:', id, name);
  };

  return (
    <div className="gallery">
      {/* Header */}
      <div className="gallery-header">
        <div className="header-info">
          <h2>Photo Gallery</h2>
          <p>Browse and manage student photos by event</p>
        </div>
        <div className="view-controls">
          <button
            onClick={() => setViewMode('grid')}
            className={`view-button ${viewMode === 'grid' ? 'active' : ''}`}
          >
            <Grid />
          </button>
          <button
            onClick={() => setViewMode('list')}
            className={`view-button ${viewMode === 'list' ? 'active' : ''}`}
          >
            <List />
          </button>
        </div>
      </div>

      {/* Filters */}
      <div className="gallery-filters">
        <div className="filters-container">
          <div className="search-container">
            <div className="search-input">
              <Search className="search-icon" />
              <input
                type="text"
                placeholder="Search by student name..."
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

      {/* Gallery */}
      {viewMode === 'grid' ? (
        <div className="gallery-grid">
          {filteredItems.map((item) => (
            <div key={item.id} className="gallery-card">
              <div className="card-image">
                <img src={item.image} alt={item.name} />
                <div className="image-overlay">
                  <div className="overlay-actions">
                    <button
                      onClick={() => handleLike(item.id)}
                      className="overlay-button like"
                    >
                      <Heart />
                    </button>
                    <button
                      onClick={() => handleDownload(item.id, item.name)}
                      className="overlay-button download"
                    >
                      <Download />
                    </button>
                  </div>
                </div>
              </div>
              <div className="card-content">
                <h3 className="card-title">{item.name}</h3>
                <div className="card-meta">
                  <span className="event-badge">{item.event}</span>
                  <div className="likes">
                    <Heart />
                    <span>{item.likes}</span>
                  </div>
                </div>
                <p className="card-date">
                  {new Date(item.date).toLocaleDateString()}
                </p>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="gallery-list">
          <div className="list-container">
            {filteredItems.map((item) => (
              <div key={item.id} className="list-item">
                <div className="list-content">
                  <img src={item.image} alt={item.name} className="list-image" />
                  <div className="list-info">
                    <h3 className="list-title">{item.name}</h3>
                    <div className="list-meta">
                      <span className="event-badge">{item.event}</span>
                      <span className="list-date">
                        {new Date(item.date).toLocaleDateString()}
                      </span>
                      <div className="likes">
                        <Heart />
                        <span>{item.likes}</span>
                      </div>
                    </div>
                  </div>
                  <div className="list-actions">
                    <button
                      onClick={() => handleLike(item.id)}
                      className="action-button like"
                    >
                      <Heart />
                    </button>
                    <button
                      onClick={() => handleDownload(item.id, item.name)}
                      className="action-button download"
                    >
                      <Download />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {filteredItems.length === 0 && (
        <div className="empty-state">
          <div className="empty-icon">
            <Search />
          </div>
          <h3>No photos found</h3>
          <p>Try adjusting your search criteria or upload new photos.</p>
        </div>
      )}
    </div>
  );
};

export default Gallery;