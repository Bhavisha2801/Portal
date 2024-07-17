// components/ClientTable.tsx
import React from 'react';
import { FaFileAlt, FaCopy, FaEdit, FaPlus } from 'react-icons/fa';

interface ClientTableProps {
  status: string;
}

const ClientTable: React.FC<ClientTableProps> = ({ status }) => {
  const clients = [
    { name: 'John Doe', jobType: 'Inspection', apptDate: '2024-07-20', assignedTo: 'Jane Smith', status: 'Scheduled' },
    { name: 'Alice Johnson', jobType: 'Consultation', apptDate: '2024-07-21', assignedTo: 'Robert Brown', status: 'Completed' },
    { name: 'Michael Brown', jobType: 'Repair', apptDate: '2024-07-22', assignedTo: 'Emily Davis', status: 'Scheduled' },
    { name: 'Sarah Wilson', jobType: 'Installation', apptDate: '2024-07-23', assignedTo: 'Emily Davis', status: 'Completed' },
    { name: 'James Smith', jobType: 'Maintenance', apptDate: '2024-07-24', assignedTo: 'Jane Smith', status: 'Scheduled' },
  ];

  const filteredClients = clients.filter(client => client.status.toLowerCase() === status.toLowerCase());

  return (
    <div className="overflow-x-auto relative">
        <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-bold">{status} Clients</h2>
        <button
          className="bg-blue-500 text-white rounded-full w-10 h-10 flex items-center justify-center hover:bg-blue-600 transition duration-300 ease-in-out"
          onClick={() => {
            // Handle the click event for the + icon
            console.log('Add new client');
          }}
        >
          <FaPlus className="text-xl" />
        </button>
      </div>
        {
            !status ? 
            <table className="min-w-full bg-white border border-gray-200">
        <thead>
          <tr>
            <th className="px-4 py-2 border-b">Client Name</th>
            <th className="px-4 py-2 border-b">Job Type</th>
            <th className="px-4 py-2 border-b">Appointment Date</th>
            <th className="px-4 py-2 border-b">Assigned To</th>
            <th className="px-4 py-2 border-b">Status</th>
            <th className="px-4 py-2 border-b">View (Document)</th>
            <th className="px-4 py-2 border-b">Copy</th>
            <th className="px-4 py-2 border-b">Edit</th>
          </tr>
        </thead>
        <tbody>
          {clients.map((client, index) => (
            <tr key={index} className="hover:bg-gray-100">
              <td className="px-4 py-2 border-b">{client.name}</td>
              <td className="px-4 py-2 border-b">{client.jobType}</td>
              <td className="px-4 py-2 border-b">{client.apptDate}</td>
              <td className="px-4 py-2 border-b">{client.assignedTo}</td>
              <td className="px-4 py-2 border-b">{client.status}</td>
              <td className="px-4 py-2 border-b text-center"><FaFileAlt className="text-blue-500 cursor-pointer" /></td>
              <td className="px-4 py-2 border-b text-center"><FaCopy className="text-green-500 cursor-pointer" /></td>
              <td className="px-4 py-2 border-b text-center"><FaEdit className="text-yellow-500 cursor-pointer" /></td>
            </tr>
          ))}
        </tbody>
      </table> 
       : 
<table className="min-w-full bg-white border border-gray-200">
        <thead>
          <tr>
            <th className="px-4 py-2 border-b">Client Name</th>
            <th className="px-4 py-2 border-b">Job Type</th>
            <th className="px-4 py-2 border-b">Appointment Date</th>
            <th className="px-4 py-2 border-b">Assigned To</th>
            <th className="px-4 py-2 border-b">Status</th>
            <th className="px-4 py-2 border-b">View (Document)</th>
            <th className="px-4 py-2 border-b">Copy</th>
            <th className="px-4 py-2 border-b">Edit</th>
          </tr>
        </thead>
        <tbody>
          {filteredClients.map((client, index) => (
            <tr key={index} className="hover:bg-gray-100">
              <td className="px-4 py-2 border-b">{client.name}</td>
              <td className="px-4 py-2 border-b">{client.jobType}</td>
              <td className="px-4 py-2 border-b">{client.apptDate}</td>
              <td className="px-4 py-2 border-b">{client.assignedTo}</td>
              <td className="px-4 py-2 border-b">{client.status}</td>
              <td className="px-4 py-2 border-b text-center"><FaFileAlt className="text-blue-500 cursor-pointer" /></td>
              <td className="px-4 py-2 border-b text-center"><FaCopy className="text-green-500 cursor-pointer" /></td>
              <td className="px-4 py-2 border-b text-center"><FaEdit className="text-yellow-500 cursor-pointer" /></td>
            </tr>
          ))}
        </tbody>
      </table>
        }
    </div>
  );
};

export default ClientTable;
