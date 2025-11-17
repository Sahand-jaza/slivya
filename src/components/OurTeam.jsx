// components/OurTeam.jsx
import React from 'react';
import { Award, Target, Heart, Zap, Instagram, Twitter } from 'lucide-react';
import Sahand from '../assets/sahand.jpg'
import Yad from '../assets/yad.jpg'
import Ayad from '../assets/ayad ali.png'
import Shad from '../assets/shad.jpg'
const OurTeam = () => {
    const teamMembers = [
        {
            name: "Sahand Jaza",
            role: "Founder & Full stack mobile & AI developer",
            image: Sahand,
            icon: Award
        },
        {
            name: "Yad Jalal",
            role: "CO-Founder & Financial Partnership",
            image: Yad,
            icon: Target
        },
        {
            name: "Ayad Ali",
            role: "Software Engineer",
            image: Ayad,
            icon: Heart
        },
        {
            name: "Shad Jalal",
            role: "Designer & Branding lead",
            image: Shad,
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

                                <div className="relative mb-4 overflow-hidden rounded-xl bg-gray-700 h-48 flex items-center justify-center">
                                    <img
                                        src={member.image}
                                        alt={member.name}
                                        className=" w-4/5 h-full rounded-full object-cover bg transform group-hover:scale-105 transition-transform duration-500"
                                        style={{ objectPosition: 'center center' }}
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent opacity-30"></div>
                                    {/* Icon Badge */}
                                    <div className="absolute top-4 right-4 w-12 h-12 bg-gradient-to-br from-purple-600 to-pink-600 rounded-full flex items-center justify-center transform group-hover:rotate-12 transition-transform duration-300 z-10">
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