// components/Why Slivya Is Different.jsx
import React from 'react';
import { Users, TrendingUp, Calendar } from 'lucide-react';

const WhySlivyaIsDifferent = () => {
    const benefits = [
        {
            icon: Users,
            title: "Local-First Platform",
            description: "Optimized for salons and barbers in Iraq with Arabic & Kurdish support, local time zones, and cultural habits built in.",
        },
        {
            icon: TrendingUp,
            title: "Flexible Payments",
            description: "Supports cash, card, and local e-wallets so beauty centers can get paid the way their customers actually pay.",
        },
        {
            icon: Calendar,
            title: "Two Apps, One Ecosystem",
            description: "A dedicated app for customers and a separate app for beauty centers, fully synced for smoother bookings and management.",
        }
      
    ];

    return (
        <section id="for-beauty-centers" className="py-20 px-6 bg-gray-900/50">
            <div className="container mx-auto">
                <div className="text-center mb-16 animate-fadeIn">
                    <h2 className="text-4xl md:text-5xl font-bold mb-4 py-3 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                        Why Slivya Is Different
                    </h2>
                    <p className="text-gray-400 text-xl">Built for beauty businesses in Iraq, not just another global booking app.</p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {benefits.map((benefit, index) => (
                        <div
                            key={index}
                            className="group relative bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-2xl border border-gray-700 hover:border-pink-500 transition-all duration-300 transform hover:-translate-y-2 animate-fadeInUp overflow-hidden"
                            style={{ animationDelay: `${index * 200}ms` }}
                        >
                            <div className="w-16 h-16 bg-gradient-to-br from-pink-600 to-purple-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                                <benefit.icon className="w-8 h-8 text-white" />
                            </div>
                            <h3 className="text-2xl font-bold mb-4 text-white">{benefit.title}</h3>
                            <p className="text-gray-400 mb-4 leading-relaxed">{benefit.description}</p>
                            
                            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-pink-500/5 to-purple-500/5 rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default WhySlivyaIsDifferent;