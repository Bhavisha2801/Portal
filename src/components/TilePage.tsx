// components/TilePage.js
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ClientTable from './ClientTable';

function TilePage() {
  const { tile } = useParams<{ tile: string }>();
  const [data, setData] = useState([]);

  useEffect(() => {
    // Fetch data based on the tile, if needed
    // For simplicity, we're directly showing the ClientTable for the 'Clients' tile
  }, [tile]);

  const renderContent = () => {
    // if (tile === 'clients' || tile === 'Doctors') {
      return (
        <div>
          <h2 className="text-xl font-bold mb-4">{tile}</h2>
          <ClientTable status="" />
        </div>
      );
    // }

    // Add other conditional renderings for different tiles as needed
    // return <div>Other tile content</div>;
  };

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">{tile} Data</h1>
      {renderContent()}
    </div>
  );
}

export default TilePage;
