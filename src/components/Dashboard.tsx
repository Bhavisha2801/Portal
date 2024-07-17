// components/Dashboard.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Dashboard() {
  const navigate = useNavigate();

  const handleTileClick = (tile: string) => {
    if (tile === 'Bookings') {
      navigate('/bookings');
    } else {
      navigate(`/dashboard/${tile.toLowerCase()}`);
    }
  };

  return (
    <main className="flex-1 p-8">
      <h1 className="text-2xl font-bold mb-4">Dashboard</h1>
      <div className="grid grid-cols-2 gap-4">
        {['Bookings', 'Clients', 'Inventory', 'Doctors'].map((tile) => (
          <div
            key={tile}
            className="bg-blue-500 text-white p-8 rounded cursor-pointer"
            onClick={() => handleTileClick(tile)}
          >
            {tile}
          </div>
        ))}
      </div>
    </main>
  );
}

export default Dashboard;
