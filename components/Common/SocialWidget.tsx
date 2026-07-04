"use client";

import {
    PinIcon,
} from "lucide-react";
import { FaFacebook, FaInstagram, FaPinterest, FaTwitter, FaYoutube } from "react-icons/fa";

const socialLinks = [
    {
        href: "https://www.instagram.com/corbettnainitalofficial",
        icon: <FaInstagram size={20} />,
        label: "Instagram",
    },
    {
        href: "https://www.facebook.com/profile.php?id=61590430782552",
        icon: <FaFacebook size={20} />,
        label: "Facebook",
    },
    // {
    //     href: "https://youtube.com/@yourchannel",
    //     icon: <FaYoutube size={20} />,
    //     label: "YouTube",
    // },
    // {
    //     href: "https://twitter.com/yourusername",
    //     icon: <FaTwitter size={20} />,
    //     label: "Twitter",
    // },
    {
        href: "https://www.pinterest.com/corbettnainital/_profile",
        icon: <FaPinterest size={20} />,
        label: "Pinterest",
    },
];

export default function SocialWidget() {
    return (
        <div className="fixed left-6 bottom-24 z-[9999] flex flex-col gap-3">
            {socialLinks.map((item) => (
                <a
                    key={item.label}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={item.label}
                    className="flex h-11 w-11 items-center justify-center rounded-full bg-white text-gray-700 shadow-lg transition-all duration-300 hover:scale-110 hover:bg-blue-600 hover:text-white"
                >
                    {item.icon}
                </a>
            ))}
        </div>
    );
}