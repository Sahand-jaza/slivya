// components/Footer.jsx
import React from 'react';
import { Sparkles, Facebook, Instagram, Twitter, Phone, Mail, MapPinned, Heart } from 'lucide-react';
import slivya from '../assets/yellow_clock white_S red_location.svg'
const Footer = () => {
    return (
        <footer className="py-12 px-6 bg-gray-900 border-t border-gray-800">
            <div className="container mx-auto">
                <div className="grid md:grid-cols-4 gap-8 mb-8">
                    {/* Brand */}
                    <div className="md:col-span-1">
                        <div className="flex items-center space-x-2 mb-4">
                            <img src={slivya} alt="slivya logo" width={80}/>
                            <span className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Slivya
              </span>
                        </div>
                        <p className="text-gray-400 mb-4">
                            Iraq's premier beauty booking platform
                        </p>
                        <div className="flex gap-3">
                            <a href="#" className="w-10 h-10 bg-gray-800 hover:bg-purple-600 rounded-full flex items-center justify-center transition-all duration-300 transform hover:scale-110">
                                <Facebook className="w-5 h-5" />
                            </a>
                            <a href="#" className="w-10 h-10 bg-gray-800 hover:bg-pink-600 rounded-full flex items-center justify-center transition-all duration-300 transform hover:scale-110">
                                <Instagram className="w-5 h-5" />
                            </a>
                            <a href="#" className="w-10 h-10 bg-gray-800 hover:bg-blue-600 rounded-full flex items-center justify-center transition-all duration-300 transform hover:scale-110">
                                <Twitter className="w-5 h-5" />
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="font-bold mb-4 text-white">Quick Links</h4>
                        <ul className="space-y-2">
                            {['Home', 'How it Works', 'For Customers', 'For Beauty Centers'].map((link) => (
                                <li key={link}>
                                    <a href={`#${link.toLowerCase().replace(/\s+/g, '-')}`} className="text-gray-400 hover:text-purple-400 transition-colors duration-300">
                                        {link}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Support */}
                    <div>
                        <h4 className="font-bold mb-4 text-white">Support</h4>
                        <ul className="space-y-2">
                            <li><a href="#" className="text-gray-400 hover:text-purple-400 transition-colors duration-300">Help Center</a></li>
                            <li><a href="#" className="text-gray-400 hover:text-purple-400 transition-colors duration-300">Privacy Policy</a></li>
                            <li><a href="#" className="text-gray-400 hover:text-purple-400 transition-colors duration-300">Terms of Service</a></li>
                            <li><a href="#" className="text-gray-400 hover:text-purple-400 transition-colors duration-300">FAQ</a></li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h4 className="font-bold mb-4 text-white">Contact</h4>
                        <ul className="space-y-3">
                            <li className="flex items-start gap-2 text-gray-400">
                                <Phone className="w-5 h-5 text-purple-400 mt-0.5" />
                                <span>+964 773 125 1218</span>
                            </li>
                            <li className="flex items-start gap-2 text-gray-400">
                                <Mail className="w-5 h-5 text-pink-400 mt-0.5" />
                                <span>info@slivya.com</span>
                            </li>
                            <li className="flex items-start gap-2 text-gray-400">
                                <MapPinned className="w-5 h-5 text-purple-400 mt-0.5" />
                                <span>Slemani, Iraq</span>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="pt-8 border-t border-gray-800 text-center">
                    <p className="text-gray-400">
                        © 2025 Slivya. All rights reserved. Made with{' '}
                        <Heart className="inline w-4 h-4 text-pink-400 animate-pulse" /> in Iraq
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;