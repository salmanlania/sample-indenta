// src/components/UserDataPanel.js

import React from 'react';

const UserDataPanel = () => {
  const userData = [
    { id: 1, name: 'John Doe', email: 'john@example.com', message: 'Hello, I have a question.' },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com', message: 'I would like to inquire about your services.' },
    // Add more dummy user data as needed
  ];

  return (
    <div className="bg-white p-4 shadow-md rounded-md">
      <h2 className="text-xl font-semibold mb-4">User Data</h2>
      <table className="w-full table-auto">
        <thead>
          <tr className="bg-gray-200">
            <th className="py-2 px-4">Name</th>
            <th className="py-2 px-4">Email</th>
            <th className="py-2 px-4">Message</th>
          </tr>
        </thead>
        <tbody>
          {userData.map((user) => (
            <tr key={user.id} className="hover:bg-gray-100 transition-all">
              <td className="py-2 px-4">{user.name}</td>
              <td className="py-2 px-4">{user.email}</td>
              <td className="py-2 px-4">{user.message}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserDataPanel;
