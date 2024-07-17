// components/BookingPage.js
import React from 'react';
import { useNavigate } from 'react-router-dom';

const BookingPage: React.FC = () => {
  const navigate = useNavigate();

  const handleBoxClick = (status: string) => {
    navigate(`/bookings/${status.toLowerCase()}`);
  };

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">Bookings</h1>
      <div className="grid grid-cols-2 gap-4">
        <div
          className="bg-blue-500 text-white p-8 rounded cursor-pointer"
          onClick={() => handleBoxClick('Scheduled')}
        >
          Scheduled
        </div>
        <div
          className="bg-green-500 text-white p-8 rounded cursor-pointer"
          onClick={() => handleBoxClick('Completed')}
        >
          Completed
        </div>
      </div>
    </div>
  );
};

export default BookingPage;
