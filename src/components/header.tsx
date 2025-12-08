// File: theportfolio/src/components/header.tsx
"use client"

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Avatar, AvatarFallback, AvatarImage } from "~/components/ui/avatar"
import { RiSendPlaneFill } from "react-icons/ri";
import { MdOutlineClass } from "react-icons/md";

export default function Header() {
    const pathname = usePathname() || "/";
    const isHome = pathname === "/";
    const isClasses = pathname === "/classes" || pathname.startsWith("/classes");

    const buttonClass = "flex gap-2 items-center px-3 py-1 rounded-md transition duration-150 hover:opacity-80 hover:bg-white/10";
    const selectedTextClass = "text-blue-200";
    const defaultTextClass = "text-white";

    return (
        <nav className="flex w-full items-center justify-between bg-blue-700 text-white p-4 text-2xl font-semibold border-b">
            <div>
                <a href="/" className={`${buttonClass} flex-row space-x-3 justify-center items-center`}>
                    <Avatar className={""}>
                        <AvatarImage src="mylogo.jpg"/>
                        <AvatarFallback>AM</AvatarFallback>
                    </Avatar>
                    <p className={isHome ? selectedTextClass : defaultTextClass}>Alan Munschy</p>
                </a>
            </div>

            <div className="flex items-center">
                <Link href="/classes" className={`${buttonClass} mr-12`}>
                    <p className={isClasses ? selectedTextClass : defaultTextClass}>Class Projects</p>
                    <MdOutlineClass size={30} className={isClasses ? selectedTextClass : defaultTextClass} />
                </Link>

                <a href="mailto:alanmunschy@gmail.com" className={`${buttonClass} mr-4 hidden md:inline-flex`}>
                    <p className={defaultTextClass}>Email</p>
                    <RiSendPlaneFill size={30} className={defaultTextClass}/>
                </a>
            </div>
        </nav>
    );
}
