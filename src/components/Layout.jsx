import React from 'react';
import { Outlet, Link, useLocation } from 'react-router-dom';
import { 
  Home, 
  UserPlus, 
  Users, 
  Camera,
  Menu,
  X
} from 'lucide-react';
import './Layout.css';

const Layout = () => {
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

  const navigation = [
    { name: 'Dashboard', href: '/', icon: Home },
    { name: 'Add Student', href: '/add-student', icon: UserPlus },
    { name: 'Student List', href: '/students', icon: Users },
    { name: 'Gallery', href: '/gallery', icon: Camera },
  ];

  const isActive = (path) => {
    return location.pathname === path;
  };

  return (
    <div className="layout">
      {/* Mobile menu overlay */}
      {isMobileMenuOpen && (
        <div 
          className="mobile-menu-overlay"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}

      {/* Sidebar */}
      <div className={`sidebar ${isMobileMenuOpen ? 'open' : ''}`}>
        <div className="sidebar-header">
          <div className="sidebar-logo">
            <div className="logo-icon">
              <Camera className="camera-icon" />
            </div>
            <span className="logo-text">Admin Panel</span>
          </div>
          <button
            onClick={() => setIsMobileMenuOpen(false)}
            className="close-button"
          >
            <X className="close-icon" />
          </button>
        </div>
        
        <nav className="sidebar-nav">
          <ul>
            {navigation.map((item) => {
              const Icon = item.icon;
              return (
                <li key={item.name}>
                  <Link
                    to={item.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`nav-link ${isActive(item.href) ? 'active' : ''}`}
                  >
                    <Icon className="nav-icon" />
                    {item.name}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>

      {/* Main content */}
      <div className="main-content">
        {/* Top bar */}
        <header className="header">
          <button
            onClick={() => setIsMobileMenuOpen(true)}
            className="menu-button"
          >
            <Menu className="menu-icon" />
          </button>
          
          <div className="header-title">
            <h1>
              {navigation.find(item => isActive(item.href))?.name || 'Dashboard'}
            </h1>
          </div>
          
          <div className="header-user">
            <div className="user-avatar">
              <span>A</span>
            </div>
            <span className="user-name">Admin</span>
          </div>
        </header>

        {/* Page content */}
        <main className="page-content">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default Layout;