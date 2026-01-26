// File: theportfolio/src/components/header.tsx
"use client"

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "~/components/ui/avatar"
import { Button } from "~/components/ui/button";
import { RiSendPlaneFill } from "react-icons/ri";
import { HiMenu, HiX } from "react-icons/hi";
import { FaCog, FaCode, FaGraduationCap } from "react-icons/fa";

export default function Header() {
    const pathname = usePathname() || "/";
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    const isHome = pathname === "/";
    const isEngineering = pathname.startsWith("/projects/engineering");
    const isWebDev = pathname.startsWith("/projects/webdev");
    const isClasses = pathname === "/classes" || pathname.startsWith("/classes");

    const navLinks = [
        {
            href: "/projects/engineering",
            label: "Engineering",
            active: isEngineering,
            icon: FaCog
        },
        {
            href: "/projects/webdev",
            label: "Web Dev",
            active: isWebDev,
            icon: FaCode
        },
        {
            href: "/classes",
            label: "Classes",
            active: isClasses,
            icon: FaGraduationCap
        },
    ];

    const linkClass = (active: boolean) =>
        `flex items-center gap-2 px-3 py-2 rounded-md transition duration-150 hover:bg-white/10 ${active ? "text-blue-200 bg-white/10" : "text-white hover:text-blue-100"
        }`;

    return (
        <nav className="sticky top-0 z-50 w-full bg-blue-700/95 backdrop-blur-sm text-white border-b border-blue-600 shadow-lg">
            <div className="container mx-auto px-4">
                <div className="flex h-16 items-center justify-between">
                    {/* Logo */}
                    <Link
                        href="/"
                        className={`flex items-center gap-3 ${linkClass(isHome)}`}
                    >
                        <Avatar className="h-10 w-10">
                            <AvatarImage src="/mylogo.jpg" alt="Alan Munschy" />
                            <AvatarFallback>AM</AvatarFallback>
                        </Avatar>
                        <span className="text-xl font-semibold hidden sm:inline">
                            Alan Munschy
                        </span>
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center gap-1">
                        {navLinks.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                className={linkClass(link.active)}
                            >
                                <link.icon className="h-4 w-4" />
                                {link.label}
                            </Link>
                        ))}

                        <div className="ml-4 pl-4 border-l border-blue-500">
                            <a
                                href="mailto:alanmunschy@gmail.com"
                                className="flex items-center gap-2 px-3 py-2 rounded-md transition duration-150 hover:bg-white/10 text-white hover:text-blue-100"
                            >
                                <RiSendPlaneFill className="h-4 w-4" />
                                Email
                            </a>
                        </div>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        className="md:hidden p-2 rounded-md hover:bg-white/10"
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        aria-label="Toggle menu"
                    >
                        {mobileMenuOpen ? (
                            <HiX className="h-6 w-6" />
                        ) : (
                            <HiMenu className="h-6 w-6" />
                        )}
                    </button>
                </div>

                {/* Mobile Navigation */}
                {mobileMenuOpen && (
                    <div className="md:hidden py-4 border-t border-blue-600">
                        <div className="flex flex-col gap-2">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.href}
                                    href={link.href}
                                    className={linkClass(link.active)}
                                    onClick={() => setMobileMenuOpen(false)}
                                >
                                    <link.icon className="h-4 w-4" />
                                    {link.label}
                                </Link>
                            ))}
                            <a
                                href="mailto:alanmunschy@gmail.com"
                                className={linkClass(false)}
                            >
                                <RiSendPlaneFill className="h-4 w-4" />
                                Email Me
                            </a>
                        </div>
                    </div>
                )}
            </div>
        </nav>
    );
}
