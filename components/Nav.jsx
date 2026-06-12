"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from 'react';

// Reemplaza el array `links` en Nav.jsx y MobileNav.jsx
const links = [
  {
    name: "home",
    path: "/",
  },
  {
    name: "projects",
    path: "/projects",
  },
  {
    name: "resume",
    path: "/resume",
  },
  {
    name: "posts",
    path: "/posts",
  },
  // "work" dropdown eliminado — projects directo
  // "gallery" movido fuera del nav principal
  // "services" renombrado a contacto o eliminado del nav
];

export const Nav = () => {
    const pathname = usePathname();
    const [openDropdown, setOpenDropdown] = useState(null);

    const toggleDropdown = (name) => {
        setOpenDropdown(openDropdown === name ? null : name);
    };

    return (
        <nav className="flex gap-8 relative">
            {links.map((link, index) => {
                if (link.subLinks) {
                    return (
                        <div key={index} className="relative group">
                            <button 
                                onClick={() => toggleDropdown(link.name)}
                                className={`flex items-center gap-1 capitalize cursor-pointer font-medium hover:text-cyan-400 transition-all ${
                                    link.subLinks.some(sublink => sublink.path === pathname) && "text-cyan-500"
                                }`}
                            >
                                {link.name}
                                {/* Flecha animada */}
                                <svg 
                                    className={`w-4 h-4 transition-transform duration-200 ${
                                        openDropdown === link.name ? 'rotate-180' : ''
                                    }`}
                                    fill="none" 
                                    stroke="currentColor" 
                                    viewBox="0 0 24 24" 
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path 
                                        strokeLinecap="round" 
                                        strokeLinejoin="round" 
                                        strokeWidth={3} 
                                        d="M19 9l-7 7-7-7" 
                                    />
                                </svg>
                            </button>
                            {openDropdown === link.name && (
                                <div className="absolute left-0 mt-2 w-48 bg-gray-900 shadow-lg rounded-md py-1 z-10">
                                    {link.subLinks.map((subLink, subIndex) => (
                                        <Link
                                            href={subLink.path}
                                            key={subIndex}
                                            className={`block px-4 py-2 hover:bg-gray-800 font-medium capitalize ${
                                                subLink.path === pathname ? "text-cyan-500" : "text-gray-400"
                                            }`}
                                            onClick={() => setOpenDropdown(null)}
                                        >
                                            {subLink.name}
                                        </Link>
                                    ))}
                                </div>
                            )}
                        </div>
                    );
                } else {
                    return (
                        <Link 
                            href={link.path} 
                            key={index} 
                            className={`${link.path === pathname && "text-cyan-500 border-b-3 border-cyan-500"} capitalize font-medium hover:text-cyan-400 transition-all`} 
                            prefetch
                        >
                            {link.name}
                        </Link>
                    );
                }
            })}
        </nav>
    );
};


export default Nav