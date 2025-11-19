import React, { useState, useEffect } from 'react';
import { Trash2, Lock } from 'lucide-react';

const AdminDashboard = () => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [password, setPassword] = useState('');
    const [messages, setMessages] = useState([]);
    const [loading, setLoading] = useState(false);

    const handleLogin = (e) => {
        e.preventDefault();
        // Simple hardcoded password for demonstration
        if (password === 'admin123') {
            setIsAuthenticated(true);
            fetchMessages();
        } else {
            alert('Incorrect password');
        }
    };

    const fetchMessages = async () => {
        setLoading(true);
        try {
            const response = await fetch('http://localhost:3001/api/messages');
            const data = await response.json();
            setMessages(data);
        } catch (error) {
            console.error('Error fetching messages:', error);
        } finally {
            setLoading(false);
        }
    };

    const handleDelete = async (id) => {
        if (!window.confirm('Are you sure you want to delete this message?')) return;

        try {
            await fetch(`http://localhost:3001/api/messages/${id}`, {
                method: 'DELETE',
            });
            setMessages(messages.filter((msg) => msg.id !== id));
        } catch (error) {
            console.error('Error deleting message:', error);
        }
    };

    if (!isAuthenticated) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-gray-900 text-white">
                <form onSubmit={handleLogin} className="bg-gray-800 p-8 rounded-lg shadow-lg w-96">
                    <div className="flex justify-center mb-6">
                        <div className="bg-purple-600 p-3 rounded-full">
                            <Lock className="w-8 h-8 text-white" />
                        </div>
                    </div>
                    <h2 className="text-2xl font-bold text-center mb-6">Admin Login</h2>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Enter Password"
                        className="w-full p-3 mb-4 bg-gray-700 rounded border border-gray-600 focus:border-purple-500 focus:outline-none text-white"
                    />
                    <button
                        type="submit"
                        className="w-full bg-purple-600 hover:bg-purple-700 text-white py-3 rounded font-semibold transition-colors"
                    >
                        Login
                    </button>
                </form>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gray-900 text-white p-8">
            <div className="max-w-6xl mx-auto">
                <div className="flex justify-between items-center mb-8">
                    <h1 className="text-3xl font-bold">Admin Dashboard</h1>
                    <button
                        onClick={() => setIsAuthenticated(false)}
                        className="bg-red-600 hover:bg-red-700 px-4 py-2 rounded transition-colors"
                    >
                        Logout
                    </button>
                </div>

                {loading ? (
                    <div className="text-center py-10">Loading messages...</div>
                ) : (
                    <div className="bg-gray-800 rounded-lg shadow-xl overflow-hidden">
                        <div className="overflow-x-auto">
                            <table className="w-full text-left">
                                <thead className="bg-gray-700">
                                    <tr>
                                        <th className="p-4">Date</th>
                                        <th className="p-4">Name</th>
                                        <th className="p-4">Email</th>
                                        <th className="p-4">Phone</th>
                                        <th className="p-4">Message</th>
                                        <th className="p-4">Actions</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-700">
                                    {messages.length === 0 ? (
                                        <tr>
                                            <td colSpan="6" className="p-8 text-center text-gray-400">
                                                No messages found.
                                            </td>
                                        </tr>
                                    ) : (
                                        messages.map((msg) => (
                                            <tr key={msg.id} className="hover:bg-gray-750">
                                                <td className="p-4 text-sm text-gray-300">
                                                    {new Date(msg.date).toLocaleDateString()}
                                                </td>
                                                <td className="p-4 font-medium">{msg.name}</td>
                                                <td className="p-4 text-gray-300">{msg.email}</td>
                                                <td className="p-4 text-gray-300">{msg.phone}</td>
                                                <td className="p-4 text-gray-300 max-w-xs truncate" title={msg.message}>
                                                    {msg.message}
                                                </td>
                                                <td className="p-4">
                                                    <button
                                                        onClick={() => handleDelete(msg.id)}
                                                        className="text-red-400 hover:text-red-300 transition-colors"
                                                        title="Delete Message"
                                                    >
                                                        <Trash2 className="w-5 h-5" />
                                                    </button>
                                                </td>
                                            </tr>
                                        ))
                                    )}
                                </tbody>
                            </table>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default AdminDashboard;
