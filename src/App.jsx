import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import AdminDashboard from './pages/AdminDashboard';
import './styles/animations.css';

const App = () => {
    return (
        <Router>
            <div className="bg-gradient-to-br w-full overflow-x-hidden from-gray-900 via-purple-900 to-gray-900 min-h-screen text-white">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/admin" element={<AdminDashboard />} />
                </Routes>
            </div>
        </Router>
    );
};

export default App;