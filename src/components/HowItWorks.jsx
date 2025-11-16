// components/HowItWorks.jsx
import React from 'react';
import { Calendar, Clock, CheckCircle } from 'lucide-react';

const HowItWorks = () => {
    const steps = [
        {
            icon: Calendar,
            title: "Choose Your Service",
            description: "Browse through hundreds of salons, barbers, and spas. Filter by location, ratings, and services.",
            color: "from-purple-500 to-purple-600"
        },
        {
            icon: Clock,
            title: "Pick Your Time",
            description: "Select your preferred date and time slot. Real-time availability ensures instant confirmation.",
            color: "from-pink-500 to-pink-600"
        },
        {
            icon: CheckCircle,
            title: "Get Beautified",
            description: "Show up and enjoy! Receive reminders and manage your appointments all in one place.",
            color: "from-purple-500 to-pink-500"
        }
    ];

    return (
        <section id="how-it-works" className="py-20 px-6 bg-gray-900/50">
            <div className="container mx-auto">
                <div className="text-center mb-16 animate-fadeIn">
                    <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                        How It Works
                    </h2>
                    <p className="text-gray-400 text-xl">Simple steps to your perfect beauty experience</p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {steps.map((step, index) => (
                        <div
                            key={index}
                            className="group relative bg-gray-800/50 backdrop-blur-sm p-8 rounded-2xl border border-gray-700 hover:border-purple-500 transition-all duration-300 transform hover:-translate-y-2 animate-fadeInUp"
                            style={{ animationDelay: `${index * 200}ms` }}
                        >
                            <div className={`w-16 h-16 bg-gradient-to-br ${step.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 group-hover:rotate-6`}>
                                <step.icon className="w-8 h-8 text-white" />
                            </div>
                            <h3 className="text-2xl font-bold mb-4 text-white">{step.title}</h3>
                            <p className="text-gray-400 leading-relaxed">{step.description}</p>
                            <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default HowItWorks;