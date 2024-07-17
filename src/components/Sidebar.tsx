import React from 'react';
import { Link } from 'react-router-dom';

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, onClose }) => {
  return (
    <aside className={`bg-gray-800 text-white h-screen fixed top-0 left-0 ${isOpen ? 'w-64' : 'w-0'} transition-all duration-300 ease-in-out overflow-y-auto`}>
      <div className="p-4">
        <h2 className="text-2xl font-bold mb-4">Sidebar</h2>
        <nav>
          <ul>
            <li className="py-2">
              <Link to="/" onClick={onClose} className="block hover:text-blue-500">Home</Link>
            </li>
            <li className="py-2">
              <Link to="/bookings" onClick={onClose} className="block hover:text-blue-500">Bookings</Link>
            </li>
            <li className="py-2">
              <Link to="/dashboard/clients" onClick={onClose} className="block hover:text-blue-500">Clients</Link>
            </li>
            <li className="py-2">
              <Link to="/dashboard/inventory" onClick={onClose} className="block hover:text-blue-500">Inventory</Link>
            </li>
            <li className="py-2">
              <Link to="/dashboard/doctors" onClick={onClose} className="block hover:text-blue-500">Doctors</Link>
            </li>
          </ul>
        </nav>
      </div>
      <button className="absolute top-4 right-4 text-white" onClick={onClose}>
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
        </svg>
      </button>
    </aside>
  );
};

export default Sidebar;
