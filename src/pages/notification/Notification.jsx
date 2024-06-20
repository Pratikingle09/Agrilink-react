import React, { useState, useEffect } from "react";

import Navbar from "../../components/navbar/Navbar";
import NotificationComponant from "../../components/notification/NotificationComponant";
import './notification.css'

function Notification() {
  const [notifications, setNotifications] = useState(JSON.parse(localStorage.getItem('notification')));

  return (
    <div>
      <Navbar />
      <NotificationComponant
        notifications={notifications}
        setNotifications={setNotifications}
      />
    </div>
  );
}

export default Notification;
