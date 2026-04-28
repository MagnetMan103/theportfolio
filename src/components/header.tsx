// File: theportfolio/src/components/header.tsx
"use client"

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "~/components/ui/avatar"
import { Button } from "~/components/ui/button";
import { RiSendPlaneFill } from "react-icons/ri";
import { HiMenu, HiX } from "react-icons/hi";
import { FaCog, FaCode, FaGraduationCap, FaArchive } from "react-icons/fa";
import {FaRegFile} from "react-icons/fa6";

export default function Header() {
    const pathname = usePathname() || "/";
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    const isHome = pathname === "/";
    const isEngineering = pathname.startsWith("/projects/engineering");
    const isWebDev = pathname.startsWith("/projects/webdev");
    const isArchived = pathname === "/archived" || pathname.startsWith("/archived");
    const isClasses = pathname === "/classes" || pathname.startsWith("/classes");
    const isResume = pathname === "/resume" || pathname.startsWith("/resume");

    const navLinks = [
        {
            href: "/resume",
            label: "Resume",
            active: isResume,
            icon: FaRegFile
        },
        {
            href: "/archived",
            label: "Past Projects",
            active: isArchived,
            icon: FaArchive
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
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden flex items-center">
                        <button
                            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                            className="p-2 text-white hover:text-blue-200 focus:outline-none focus:ring-2 focus:ring-white/50 rounded-md transition-colors"
                            aria-label="Toggle menu"
                        >
                            {mobileMenuOpen ? <HiX className="h-6 w-6" /> : <HiMenu className="h-6 w-6" />}
                        </button>
                    </div>
                </div>

                {/* Mobile Navigation Dropdown */}
                {mobileMenuOpen && (
                    <div className="md:hidden py-3 border-t border-blue-500/30">
                        <div className="flex flex-col space-y-1">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.href}
                                    href={link.href}
                                    onClick={() => setMobileMenuOpen(false)}
                                    className={`flex items-center gap-3 px-4 py-3 rounded-md transition duration-150 ${link.active ? "text-blue-100 bg-white/10 font-medium" : "text-white hover:bg-white/5"}`}
                                >
                                    <link.icon className="h-5 w-5" />
                                    {link.label}
                                </Link>
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </nav>
    );
}
