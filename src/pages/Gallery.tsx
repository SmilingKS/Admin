import React, { useState } from 'react';
import { Search, Filter, Grid, List, Download, Heart } from 'lucide-react';

const Gallery: React.FC = () => {
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
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

  const handleLike = (id: string) => {
    console.log('Liked photo:', id);
  };

  const handleDownload = (id: string, name: string) => {
    console.log('Download photo:', id, name);
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between space-y-4 sm:space-y-0">
        <div>
          <h2 className="text-2xl font-bold text-slate-900">Photo Gallery</h2>
          <p className="text-slate-600 mt-1">
            Browse and manage student photos by event
          </p>
        </div>
        <div className="flex items-center space-x-2">
          <button
            onClick={() => setViewMode('grid')}
            className={`p-2 rounded-lg transition-colors duration-200 ${
              viewMode === 'grid'
                ? 'bg-blue-100 text-blue-600'
                : 'text-slate-400 hover:text-slate-600 hover:bg-slate-100'
            }`}
          >
            <Grid className="w-5 h-5" />
          </button>
          <button
            onClick={() => setViewMode('list')}
            className={`p-2 rounded-lg transition-colors duration-200 ${
              viewMode === 'list'
                ? 'bg-blue-100 text-blue-600'
                : 'text-slate-400 hover:text-slate-600 hover:bg-slate-100'
            }`}
          >
            <List className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Filters */}
      <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
        <div className="flex flex-col sm:flex-row gap-4">
          <div className="flex-1">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-slate-400" />
              <input
                type="text"
                placeholder="Search by student name..."
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

      {/* Gallery */}
      {viewMode === 'grid' ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden hover:shadow-md transition-shadow duration-300 group"
            >
              <div className="relative aspect-square overflow-hidden">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
                  <div className="flex space-x-2">
                    <button
                      onClick={() => handleLike(item.id)}
                      className="p-2 bg-white bg-opacity-90 rounded-full text-red-500 hover:bg-opacity-100 transition-all duration-200"
                    >
                      <Heart className="w-4 h-4" />
                    </button>
                    <button
                      onClick={() => handleDownload(item.id, item.name)}
                      className="p-2 bg-white bg-opacity-90 rounded-full text-blue-500 hover:bg-opacity-100 transition-all duration-200"
                    >
                      <Download className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-slate-900 mb-1">{item.name}</h3>
                <div className="flex items-center justify-between">
                  <span className="inline-flex px-2 py-1 text-xs font-medium rounded-full bg-blue-100 text-blue-800">
                    {item.event}
                  </span>
                  <div className="flex items-center space-x-1 text-sm text-slate-500">
                    <Heart className="w-3 h-3" />
                    <span>{item.likes}</span>
                  </div>
                </div>
                <p className="text-xs text-slate-400 mt-2">
                  {new Date(item.date).toLocaleDateString()}
                </p>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
          <div className="divide-y divide-slate-200">
            {filteredItems.map((item) => (
              <div key={item.id} className="p-6 hover:bg-slate-50 transition-colors duration-150">
                <div className="flex items-center space-x-4">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-16 h-16 rounded-lg object-cover"
                  />
                  <div className="flex-1 min-w-0">
                    <h3 className="text-lg font-semibold text-slate-900">{item.name}</h3>
                    <div className="flex items-center space-x-4 mt-1">
                      <span className="inline-flex px-2 py-1 text-xs font-medium rounded-full bg-blue-100 text-blue-800">
                        {item.event}
                      </span>
                      <span className="text-sm text-slate-500">
                        {new Date(item.date).toLocaleDateString()}
                      </span>
                      <div className="flex items-center space-x-1 text-sm text-slate-500">
                        <Heart className="w-3 h-3" />
                        <span>{item.likes}</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <button
                      onClick={() => handleLike(item.id)}
                      className="p-2 text-slate-400 hover:text-red-500 transition-colors duration-200"
                    >
                      <Heart className="w-4 h-4" />
                    </button>
                    <button
                      onClick={() => handleDownload(item.id, item.name)}
                      className="p-2 text-slate-400 hover:text-blue-500 transition-colors duration-200"
                    >
                      <Download className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {filteredItems.length === 0 && (
        <div className="text-center py-12">
          <div className="text-slate-400 mb-2">
            <Search className="w-12 h-12 mx-auto" />
          </div>
          <h3 className="text-lg font-medium text-slate-900 mb-1">No photos found</h3>
          <p className="text-slate-500">
            Try adjusting your search criteria or upload new photos.
          </p>
        </div>
      )}
    </div>
  );
};

export default Gallery;