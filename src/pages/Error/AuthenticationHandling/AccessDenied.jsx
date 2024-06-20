import React from 'react';
import { Link } from 'react-router-dom';
import './AccessDenied.css';

const AccessDenied = () => {
  return (
    <div className="error-container">
      <h1 className="error-title">Access Denied</h1>
      <p className="error-message">You need to be logged in to view this page.</p>
      <Link to="/auth" className="login-button">Log In</Link>
    </div>
  );
};

export default AccessDenied;
