// components/Hero.jsx
import React from 'react';
import { Sparkles, MapPin } from 'lucide-react';

const Hero = () => {
    return (
        <section id="home" className="pt-32 pb-20 px-6">
            <div className="container mx-auto">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div className="space-y-8 animate-slideInLeft">
                        <h1 className="text-5xl md:text-7xl font-bold leading-tight">
              <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent animate-gradient">
                Slivya
              </span>
                            <br />
                            <span className="text-3xl md:text-4xl text-gray-300">
                Smart Beauty Booking in Iraq
              </span>
                        </h1>
                        <p className="text-xl text-gray-400 leading-relaxed">
                            Book salons, barbers, and spas in seconds. One platform for customers and beauty centers.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4">
                            <button className="group relative px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full font-semibold text-lg overflow-hidden transform hover:scale-105 transition-all duration-300">
                <span className="relative z-10 flex items-center justify-center gap-2">
                  Join Early Access
                  <Sparkles className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" />
                </span>
                                <div className="absolute inset-0 bg-gradient-to-r from-pink-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                            </button>
                            <button className="group px-8 py-4 border-2 border-purple-500 rounded-full font-semibold text-lg hover:bg-purple-500/20 transition-all duration-300 transform hover:scale-105">
                <span className="flex items-center justify-center gap-2">
                  I'm a Beauty Center
                  <MapPin className="w-5 h-5 group-hover:bounce" />
                </span>
                            </button>
                        </div>
                    </div>

                    {/* Phone Mockup */}
                    <div className="relative animate-slideInRight">
                        <div className="relative mx-auto w-64 h-[500px] bg-gradient-to-br from-purple-600 to-pink-600 rounded-[3rem] p-3 shadow-2xl shadow-purple-500/50 transform hover:rotate-2 transition-transform duration-300">
                            <div className="bg-gray-900 h-full rounded-[2.5rem] overflow-hidden flex flex-col items-center justify-center relative">
                                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-32 h-6 bg-gray-900 rounded-b-2xl"></div>
                                <div className="text-center z-10 space-y-4 animate-pulse">
                                    <Sparkles className="w-16 h-16 mx-auto text-purple-400" />
                                    <h3 className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                                        Slivya
                                    </h3>
                                    <p className="text-xl text-gray-400">Coming Soon</p>
                                </div>
                                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-pink-500/10"></div>
                            </div>
                        </div>
                        {/* Floating Elements */}
                        <div className="absolute -top-4 -right-4 w-20 h-20 bg-purple-500 rounded-full blur-xl opacity-50 animate-blob"></div>
                        <div className="absolute -bottom-4 -left-4 w-20 h-20 bg-pink-500 rounded-full blur-xl opacity-50 animate-blob animation-delay-2000"></div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;