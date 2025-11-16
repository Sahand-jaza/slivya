// components/ForCustomers.jsx
import React from 'react';
import { MapPin, Star, Bell, Calendar } from 'lucide-react';

const ForCustomers = () => {
    const features = [
        {
            icon: MapPin,
            title: "Find Nearby",
            description: "Discover top-rated beauty centers near you",
            gradient: "from-purple-600 to-purple-700"
        },
        {
            icon: Star,
            title: "Read Reviews",
            description: "Make informed decisions with real customer reviews",
            gradient: "from-pink-600 to-pink-700"
        },
        {
            icon: Bell,
            title: "Smart Reminders",
            description: "Never miss an appointment with timely notifications",
            gradient: "from-purple-500 to-pink-500"
        },
        {
            icon: Calendar,
            title: "Easy Booking",
            description: "Book appointments in just a few taps",
            gradient: "from-pink-500 to-purple-500"
        }
    ];

    return (
        <section id="for-customers" className="py-20 px-6">
            <div className="container mx-auto">
                <div className="text-center mb-16 animate-fadeIn">
                    <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                        For Customers
                    </h2>
                    <p className="text-gray-400 text-xl">Everything you need for the perfect beauty experience</p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {features.map((feature, index) => (
                        <div
                            key={index}
                            className="group relative bg-gradient-to-br from-gray-800 to-gray-900 p-6 rounded-xl border border-gray-700 hover:border-purple-500 transition-all duration-300 transform hover:scale-105 animate-fadeInUp overflow-hidden"
                            style={{ animationDelay: `${index * 150}ms` }}
                        >
                            <div className={`w-14 h-14 bg-gradient-to-br ${feature.gradient} rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 group-hover:rotate-12 transition-all duration-300`}>
                                <feature.icon className="w-7 h-7 text-white" />
                            </div>
                            <h3 className="text-xl font-bold mb-2 text-white">{feature.title}</h3>
                            <p className="text-gray-400 text-sm">{feature.description}</p>
                            <div className="absolute -bottom-8 -right-8 w-24 h-24 bg-gradient-to-br from-purple-500/5 to-pink-500/5 rounded-full group-hover:scale-150 transition-transform duration-500"></div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ForCustomers;