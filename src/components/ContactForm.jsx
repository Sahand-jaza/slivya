// components/ContactForm.jsx
import React, { useState } from 'react';
import { Mail } from 'lucide-react';

const ContactForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form submitted:', formData);
        alert('Thank you for your message! We\'ll get back to you soon.');
        setFormData({ name: '', email: '', message: '' });
    };

    return (
        <section id="contact" className="py-20 px-6 bg-gray-900/50">
            <div className="container mx-auto max-w-4xl">
                <div className="text-center mb-12 animate-fadeIn">
                    <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                        Get In Touch
                    </h2>
                    <p className="text-gray-400 text-xl">Have questions? We'd love to hear from you</p>
                </div>

                <form onSubmit={handleSubmit} className="bg-gradient-to-br from-gray-800 to-gray-900 p-8 md:p-12 rounded-2xl border border-gray-700 animate-fadeInUp">
                    <div className="grid md:grid-cols-2 gap-6 mb-6">
                        <div className="group">
                            <label className="block text-sm font-semibold mb-2 text-gray-300 group-focus-within:text-purple-400 transition-colors duration-300">
                                Your Name
                            </label>
                            <input
                                type="text"
                                value={formData.name}
                                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 outline-none transition-all duration-300 text-white"
                                placeholder="Enter your name"
                                required
                            />
                        </div>
                        <div className="group">
                            <label className="block text-sm font-semibold mb-2 text-gray-300 group-focus-within:text-purple-400 transition-colors duration-300">
                                Email Address
                            </label>
                            <input
                                type="email"
                                value={formData.email}
                                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 outline-none transition-all duration-300 text-white"
                                placeholder="Enter your email"
                                required
                            />
                        </div>
                    </div>
                    <div className="mb-6 group">
                        <label className="block text-sm font-semibold mb-2 text-gray-300 group-focus-within:text-purple-400 transition-colors duration-300">
                            Message
                        </label>
                        <textarea
                            value={formData.message}
                            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                            rows="5"
                            className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 outline-none transition-all duration-300 text-white resize-none"
                            placeholder="Tell us what's on your mind"
                            required
                        ></textarea>
                    </div>
                    <button
                        type="submit"
                        className="group relative w-full px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg font-semibold text-lg overflow-hidden transform hover:scale-105 transition-all duration-300"
                    >
            <span className="relative z-10 flex items-center justify-center gap-2">
              Send Message
              <Mail className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </span>
                        <div className="absolute inset-0 bg-gradient-to-r from-pink-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </button>
                </form>
            </div>
        </section>
    );
};

export default ContactForm;