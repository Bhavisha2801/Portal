// App.js
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import TilePage from './components/TilePage';
import Layout from './components/Layout';
import BookingPage from './components/BookingPage';
import BookingDetailPage from './components/BookingDetailPage';
import { useState } from 'react';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  return (
    <Router>
      <div>
        <Layout sidebarOpen={sidebarOpen} isLoggedIn={isLoggedIn} setSidebarOpen={setSidebarOpen}>
          <Routes>
            <Route path="/" element={isLoggedIn ? <Dashboard /> : <Login onLogin={handleLogin} />} />
            <Route path="/dashboard/:tile" element={<TilePage />} />
            <Route path="/bookings" element={<BookingPage />} />
            <Route path="/bookings/:status" element={<BookingDetailPage />} />
          </Routes>
        </Layout>
      </div>
    </Router>
  );
}

export default App;
