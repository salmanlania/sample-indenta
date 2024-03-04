// src/components/NotificationPanel.js

import React from 'react';

const NotificationPanel = () => {
  const notifications = [
    { id: 1, message: 'New user registered', timestamp: '2024-01-26 10:30 AM' },
    { id: 2, message: 'Form submission received', timestamp: '2024-01-26 11:15 AM' },
    // Add more dummy notifications as needed
  ];

  return (
    <div className="bg-white p-4 shadow-md rounded-md">
      <h2 className="text-xl font-semibold mb-4">Notifications</h2>
      <ul className="divide-y divide-gray-300">
        {notifications.map((notification) => (
          <li key={notification.id} className="py-2">
            <span className="text-gray-800">{notification.message}</span>
            <br />
            <span className="text-sm text-gray-500">{notification.timestamp}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NotificationPanel;
