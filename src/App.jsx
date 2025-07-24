import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import Layout from './components/Layout';
import Dashboard from './pages/Dashboard';
import AddStudent from './pages/AddStudent';
import StudentList from './pages/StudentList';
import Gallery from './pages/Gallery';
import Login from './pages/Login';

function App() {
  return (
    <Router>
      <div className="App">
        <Toaster
          position="top-right"
          toastOptions={{
            duration: 4000,
            style: {
              background: '#363636',
              color: '#fff',
            },
            success: {
              duration: 3000,
              iconTheme: {
                primary: '#4ade80',
                secondary: '#fff',
              },
            },
            error: {
              duration: 4000,
              iconTheme: {
                primary: '#ef4444',
                secondary: '#fff',
              },
            },
          }}
        />

        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Dashboard />} />
            <Route path="/add-student" element={<AddStudent />} />
            <Route path="/students" element={<StudentList />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path='/login' element={<Login />} />
          </Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
