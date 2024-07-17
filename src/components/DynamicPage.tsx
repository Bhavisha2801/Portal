import React, { useEffect, useState } from 'react';

interface PageProps {
  title: string;
  data: any[]; // Replace with specific data type as per your requirement
}

const DynamicPage: React.FC<PageProps> = ({ title, data }) => {
  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">{title}</h1>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white shadow-md rounded">
          <thead className="bg-gray-200">
            <tr>
              <th className="border px-4 py-2">Client Name</th>
              <th className="border px-4 py-2">Job Type</th>
              <th className="border px-4 py-2">Appt. Date</th>
              <th className="border px-4 py-2">Assigned To</th>
              <th className="border px-4 py-2">Status</th>
              <th className="border px-4 py-2">View Document</th>
              <th className="border px-4 py-2">Copy Icon</th>
              <th className="border px-4 py-2">Edit Icon</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item) => (
              <tr key={item.id}>
                <td className="border px-4 py-2">{item.clientName}</td>
                <td className="border px-4 py-2">{item.jobType}</td>
                <td className="border px-4 py-2">{item.appointmentDate}</td>
                <td className="border px-4 py-2">{item.assignedTo}</td>
                <td className="border px-4 py-2">{item.status}</td>
                <td className="border px-4 py-2">View</td>
                <td className="border px-4 py-2">Copy</td>
                <td className="border px-4 py-2">Edit</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DynamicPage;
