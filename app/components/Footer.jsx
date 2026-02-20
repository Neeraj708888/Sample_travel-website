"use client";

import Link from "next/link";
import {
    Facebook,
    Instagram,
    Twitter,
    Linkedin,
    Mail,
    Phone,
    MapPin,
} from "lucide-react";

export default function Footer() {
    return (
        <footer className="bg-gray-950 text-gray-300 pt-16 pb-8">
            <div className="max-w-7xl mx-auto px-6">

                {/* Top Section */}
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-10 border-b border-gray-800 pb-10">

                    {/* Logo + Description */}
                    <div>
                        <h2 className="text-2xl font-bold text-white tracking-wide">
                            Ananta Group
                        </h2>
                        <p className="mt-4 text-sm max-w-sm text-gray-400 leading-relaxed">
                            Discover the world with our exclusive travel packages,
                            luxury tours, and premium event services.
                            Making every journey unforgettable.
                        </p>
                    </div>

                    {/* Social Links */}
                    <div>
                        <h3 className="text-lg font-semibold text-white mb-4">
                            Follow Us
                        </h3>
                        <div className="flex gap-5">
                            <Link href="#" aria-label="Facebook">
                                <Facebook className="w-5 h-5 hover:text-blue-500 transition-colors duration-300" />
                            </Link>
                            <Link href="#" aria-label="Instagram">
                                <Instagram className="w-5 h-5 hover:text-pink-500 transition-colors duration-300" />
                            </Link>
                            <Link href="#" aria-label="Twitter">
                                <Twitter className="w-5 h-5 hover:text-sky-400 transition-colors duration-300" />
                            </Link>
                            <Link href="#" aria-label="LinkedIn">
                                <Linkedin className="w-5 h-5 hover:text-blue-400 transition-colors duration-300" />
                            </Link>
                        </div>
                    </div>
                </div>

                {/* Links Grid */}
                <div className="grid grid-cols-2 md:grid-cols-5 gap-10 mt-12 text-sm">

                    {/* Product */}
                    <div>
                        <h4 className="text-white font-semibold mb-4">Product</h4>
                        <ul className="space-y-2">
                            <li><Link href="/destinations" className="hover:text-white transition">Destinations</Link></li>
                            <li><Link href="/packages" className="hover:text-white transition">Packages</Link></li>
                            <li><Link href="/events" className="hover:text-white transition">Event Services</Link></li>
                            <li><Link href="/custom-tours" className="hover:text-white transition">Custom Tours</Link></li>
                        </ul>
                    </div>

                    {/* Plans */}
                    <div>
                        <h4 className="text-white font-semibold mb-4">Our Plans</h4>
                        <ul className="space-y-2">
                            <li><Link href="#" className="hover:text-white transition">Basic Plan</Link></li>
                            <li><Link href="#" className="hover:text-white transition">Premium Plan</Link></li>
                            <li><Link href="#" className="hover:text-white transition">Corporate Plan</Link></li>
                            <li><Link href="#" className="hover:text-white transition">Wedding Travel</Link></li>
                        </ul>
                    </div>

                    {/* Services */}
                    <div>
                        <h4 className="text-white font-semibold mb-4">Services</h4>
                        <ul className="space-y-2">
                            <li><Link href="#" className="hover:text-white transition">Hotel Booking</Link></li>
                            <li><Link href="#" className="hover:text-white transition">Flight Booking</Link></li>
                            <li><Link href="#" className="hover:text-white transition">Event Management</Link></li>
                            <li><Link href="#" className="hover:text-white transition">Visa Assistance</Link></li>
                        </ul>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-white font-semibold mb-4">Quick Links</h4>
                        <ul className="space-y-2">
                            <li><Link href="/about" className="hover:text-white transition">About Us</Link></li>
                            <li><Link href="/blog" className="hover:text-white transition">Blog</Link></li>
                            <li><Link href="/locations" className="hover:text-white transition">Locations</Link></li>
                            <li><Link href="/support" className="hover:text-white transition">Support</Link></li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h4 className="text-white font-semibold mb-4">Contact</h4>
                        <ul className="space-y-3">
                            <li className="flex gap-2 items-center">
                                <MapPin size={16} />
                                Delhi, India
                            </li>
                            <li className="flex gap-2 items-center">
                                <Phone size={16} />
                                +91 98765 43210
                            </li>
                            <li className="flex gap-2 items-center">
                                <Mail size={16} />
                                info@anantagroup.com
                            </li>
                        </ul>
                    </div>

                </div>

                {/* Bottom */}
                <div className="text-center text-xs text-gray-500 mt-14 border-t border-gray-800 pt-6">
                    © {new Date().getFullYear()} Ananta Group. All Rights Reserved.
                </div>

            </div>
        </footer>
    );
}
