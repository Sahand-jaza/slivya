// components/OurTeam.jsx
import React from 'react';
import { Award, Target, Heart, Zap, Instagram, Twitter } from 'lucide-react';

const OurTeam = () => {
    const teamMembers = [
        {
            name: "Sarah Ahmed",
            role: "CEO & Founder",
            image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop",
            icon: Award
        },
        {
            name: "Mohammed Ali",
            role: "CTO",
            image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
            icon: Target
        },
        {
            name: "Layla Hassan",
            role: "Head of Design",
            image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop",
            icon: Heart
        },
        {
            name: "Omar Ibrahim",
            role: "Marketing Director",
            image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop",
            icon: Zap
        }
    ];

    return (
        <section id="our-team" className="py-20 px-6">
            <div className="container mx-auto">
                <div className="text-center mb-16 animate-fadeIn">
                    <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                        Our Team
                    </h2>
                    <p className="text-gray-400 text-xl">Meet the passionate people behind Slivya</p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {teamMembers.map((member, index) => (
                        <div
                            key={index}
                            className="group relative animate-fadeInUp"
                            style={{ animationDelay: `${index * 150}ms` }}
                        >
                            <div className="relative bg-gradient-to-br from-gray-800 to-gray-900 p-6 rounded-2xl border border-gray-700 hover:border-purple-500 transition-all duration-300 transform hover:-translate-y-2 overflow-hidden">
                                {/* Image Container */}
                                <div className="relative mb-4 overflow-hidden rounded-xl">
                                    <img
                                        src={member.image}
                                        alt={member.name}
                                        className="w-full h-64 object-cover transform group-hover:scale-110 transition-transform duration-500"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent opacity-60"></div>
                                    {/* Icon Badge */}
                                    <div className="absolute top-4 right-4 w-12 h-12 bg-gradient-to-br from-purple-600 to-pink-600 rounded-full flex items-center justify-center transform group-hover:rotate-12 transition-transform duration-300">
                                        <member.icon className="w-6 h-6 text-white" />
                                    </div>
                                </div>

                                {/* Info */}
                                <h3 className="text-xl font-bold mb-2 text-white">{member.name}</h3>
                                <p className="text-purple-400 font-medium mb-4">{member.role}</p>

                                {/* Social Icons */}
                                <div className="flex gap-3">
                                    <a href="#" className="w-8 h-8 bg-gray-700 hover:bg-purple-600 rounded-full flex items-center justify-center transition-colors duration-300">
                                        <Instagram className="w-4 h-4" />
                                    </a>
                                    <a href="#" className="w-8 h-8 bg-gray-700 hover:bg-pink-600 rounded-full flex items-center justify-center transition-colors duration-300">
                                        <Twitter className="w-4 h-4" />
                                    </a>
                                </div>

                                {/* Decorative element */}
                                <div className="absolute -bottom-8 -right-8 w-24 h-24 bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-full group-hover:scale-150 transition-transform duration-500"></div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default OurTeam;