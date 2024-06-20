import React, { useState } from 'react';
import PropTypes from 'prop-types';

const NotificationComponent = ({ notifications,setNotifications}) => {

  const formatDate = (date) => {
    const options = { day: '2-digit', month: 'short' };
    return new Intl.DateTimeFormat('en-GB', options).format(new Date(date));
  };

  const handleCleanNotifications = () => {
    setNotifications([])
    localStorage.setItem('notification',JSON.stringify([]))
  };

  return (
    <div className="body" style={{ top: 0, position: "absolute" }}>
    <div className="notifications" style={{marginTop:'10rem'}}>
      <div className="heading">
        <span>All Notifications</span>
        <button onClick={handleCleanNotifications} className="clean">Clean All</button>
      </div>
      <div className="notification-list">
        {notifications.map(notification => (
          <div key={notification.id} className="alert-body">
            <div >{notification.actor_name +" "+ notification.message}</div>
            <div className="time">{formatDate(notification.created_at)}</div>
          </div>
        ))}
      </div>
    </div>
    </div>
  );
};



export default NotificationComponent;
