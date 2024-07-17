// components/BookingDetailPage.js
import React from 'react';
import { useParams } from 'react-router-dom';
import ClientTable from './ClientTable';

const BookingDetailPage: React.FC = () => {
  const { status } = useParams<{ status: string }>();

  const validStatus = status || 'Scheduled'; // Provide a default value if status is undefined

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">{validStatus.charAt(0).toUpperCase() + validStatus.slice(1)} Clients</h1>
      <ClientTable status={validStatus} />
    </div>
  );
};

export default BookingDetailPage;
