"use client";

import Link from "next/link";
import { Facebook, Instagram, Twitter, Linkedin, Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
    return (
        <footer className="bg-gray-900 text-gray-300 pt-16 pb-8">
            <div className="max-w-7xl mx-auto px-6">

                {/* Top Section */}
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-10 border-b border-gray-700 pb-10">

                    {/* Left - Logo */}
                    <div>
                        <h2 className="text-2xl font-bold text-white">TravelGo</h2>
                        <p className="mt-4 text-sm max-w-sm text-gray-400">
                            Discover the world with our exclusive travel packages and event services.
                            Making every journey unforgettable.
                        </p>
                    </div>

                    {/* Right - Social Icons */}
                    <div>
                        <h3 className="text-lg font-semibold text-white mb-4">
                            Follow Us
                        </h3>
                        <div className="flex gap-4">
                            <Link href="#"><Facebook className="hover:text-blue-500" /></Link>
                            <Link href="#"><Instagram className="hover:text-pink-500" /></Link>
                            <Link href="#"><Twitter className="hover:text-sky-400" /></Link>
                            <Link href="#"><Linkedin className="hover:text-blue-400" /></Link>
                        </div>
                    </div>
                </div>

                {/* Middle Links Section */}
                <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mt-12">

                    {/* Product */}
                    <div>
                        <h4 className="text-white font-semibold mb-4">Product</h4>
                        <ul className="space-y-2 text-sm">
                            <li><Link href="#">Destinations</Link></li>
                            <li><Link href="#">Packages</Link></li>
                            <li><Link href="#">Event Services</Link></li>
                            <li><Link href="#">Custom Tours</Link></li>
                        </ul>
                    </div>

                    {/* Our Plans */}
                    <div>
                        <h4 className="text-white font-semibold mb-4">Our Plans</h4>
                        <ul className="space-y-2 text-sm">
                            <li><Link href="#">Basic Plan</Link></li>
                            <li><Link href="#">Premium Plan</Link></li>
                            <li><Link href="#">Corporate Plan</Link></li>
                            <li><Link href="#">Wedding Travel</Link></li>
                        </ul>
                    </div>

                    {/* Services */}
                    <div>
                        <h4 className="text-white font-semibold mb-4">Services</h4>
                        <ul className="space-y-2 text-sm">
                            <li><Link href="#">Hotel Booking</Link></li>
                            <li><Link href="#">Flight Booking</Link></li>
                            <li><Link href="#">Event Management</Link></li>
                            <li><Link href="#">Visa Assistance</Link></li>
                        </ul>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-white font-semibold mb-4">Quick Links</h4>
                        <ul className="space-y-2 text-sm">
                            <li><Link href="#">About Us</Link></li>
                            <li><Link href="#">Blog</Link></li>
                            <li><Link href="#">Locations</Link></li>
                            <li><Link href="#">Support</Link></li>
                        </ul>
                    </div>

                    {/* Contacts */}
                    <div>
                        <h4 className="text-white font-semibold mb-4">Contacts</h4>
                        <ul className="space-y-3 text-sm">
                            <li className="flex gap-2 items-center">
                                <MapPin size={16} /> Delhi, India
                            </li>
                            <li className="flex gap-2 items-center">
                                <Phone size={16} /> +91 98765 43210
                            </li>
                            <li className="flex gap-2 items-center">
                                <Mail size={16} /> info@travelgo.com
                            </li>
                        </ul>
                    </div>

                </div>

                {/* Bottom Copyright */}
                <div className="text-center text-sm text-gray-500 mt-12 border-t border-gray-700 pt-6">
                    © {new Date().getFullYear()} TravelGo. All Rights Reserved.
                </div>

            </div>
        </footer>
    );
}
