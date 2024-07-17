import React, { Dispatch, SetStateAction } from 'react';
import Sidebar from './Sidebar';
import { useNavigate } from 'react-router-dom';

interface LayoutProps {
  children: React.ReactNode;
  sidebarOpen: boolean;
  setSidebarOpen: Dispatch<SetStateAction<boolean>>;
  isLoggedIn: boolean;
}

const Layout: React.FC<LayoutProps> = ({ children, sidebarOpen, setSidebarOpen, isLoggedIn }) => {
  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const navigate = useNavigate();

  return (
    <div className="relative">
      <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />
        <div>
      {isLoggedIn && !sidebarOpen && (
          <button className="p-4 text-black fixed top-4 left-4 z-50" onClick={toggleSidebar}>
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
            </svg>
          </button>
        )}
        {isLoggedIn && (
          <button
            className="text-black p-4 fixed top-4 right-4 z-50 flex items-center"
            onClick={() => navigate(-1)}
          >
            <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path>
            </svg>
            Back
          </button>
        )}
        </div>
      <div className={`transition-all duration-300 ease-in-out p-8 ${sidebarOpen ? 'ml-64' : 'ml-0'}`}>
        {children}
      </div>
    </div>
  );
};

export default Layout;
