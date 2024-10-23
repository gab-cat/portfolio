'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Button } from "@/components/ui/button"
import { Home, Briefcase, User, Mail } from 'lucide-react'

export default function Navbar() {
    const pathname = usePathname()
    if (!pathname) return null;

    const navItems = [
        { name: 'Home', href: '/', icon: Home },
        { name: 'Projects', href: '/project', icon: Briefcase },
        { name: 'Contact', href: '/contact', icon: Mail },
    ]

    return (
        <nav className={`w-full h-[65px] text-white fixed top-0 shadow-lg ${pathname == "/" ? "shadow-[#2a0e61]/50" : "shadow-primary/10"}  bg-[#03001417] backdrop-blur-md z-50`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ">
                <div className="flex justify-between h-16 ">
                    <div className="flex">
                        <div className="flex-shrink-0 flex items-center">
                            <Link href="/" className={`text-2xl font-bold ${ pathname == "/" ? "text-white" : "text-primary" } `}>
                                Gabriel Angelo Catimbang
                            </Link>
                        </div>
                    </div>
                    <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
                        {navItems.map((item) => (
                            <Link
                                key={item.name}
                                href={item.href}
                                className={`inline-flex items-center transition-all ${ pathname == "/" ? "text-white" : "text-primary" } px-1 pt-1 border-b-2 text-sm font-medium ${
                                    pathname === item.href
                                        ? `${pathname == "/" ? "border-white" : "border-black" }   text-primary`
                                        : `border-transparent text-muted-foreground ${ pathname == "/" ? "hover:text-gray-500" : "hover:text-foreground" } hover:border-gray-300 `
                                }`}
                            >
                                <item.icon className="h-4 w-4 mr-2" />
                                {item.name}
                            </Link>
                        ))}
                    </div>
                    <div className={`flex items-center sm:hidden `}>
                        {navItems.map((item) => (
                            <Link
                                key={item.name}
                                href={item.href}
                                className={`p-2 rounded-md transition-all ${ pathname == "/" ? "text-white" : "text-primary" } ${
                                    pathname === item.href
                                        ? 'text-primary bg-primary/10'
                                        : 'text-muted-foreground hover:bg-accent hover:text-accent-foreground'
                                }`}
                            >
                                <item.icon className="h-5 w-5" />
                                <span className="sr-only">{item.name}</span>
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </nav>
    )
}