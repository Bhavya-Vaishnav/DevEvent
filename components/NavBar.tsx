"use client";

import Image from 'next/image'
import Link from 'next/link'
import { useSession, signIn, signOut } from "next-auth/react"

const NavBar = () => {
    const { data: session } = useSession()

    return (
        <header>
            <nav className="flex justify-between items-center py-4 px-6 bg-[#0D1117]/80 backdrop-blur-md sticky top-0 z-50">
                <Link href="/" className="logo flex items-center gap-2">
                    <Image src="/icons/logo.png" alt="logo" width={24} height={24} />
                    <p className="font-bold text-lg text-white">DevEvent</p>
                </Link>
                <div className="flex items-center gap-8">
                    <ul className="flex list-none gap-6 text-sm font-medium text-gray-400">
                        <li><Link href="/" className="hover:text-white transition-colors">Home</Link></li>
                        <li><Link href="/events" className="hover:text-white transition-colors">Events</Link></li>
                        <li><Link href="/events/create" className="hover:text-white transition-colors">Create Event</Link></li>
                    </ul>
                    
                    <div className="flex items-center gap-4">
                        {session ? (
                            <div className="flex items-center gap-4">
                                <div className="flex items-center gap-2">
                                    {session.user?.image && (
                                        <Image 
                                            src={session.user.image} 
                                            alt="Profile" 
                                            width={28} 
                                            height={28} 
                                            className="rounded-full border border-gray-700 shadow-sm"
                                        />
                                    )}
                                    <span className="text-sm text-gray-300 hidden sm:inline-block">
                                        {session.user?.name}
                                    </span>
                                </div>
                                <button 
                                    onClick={() => signOut()}
                                    className="text-xs bg-red-500/10 hover:bg-red-500/20 text-red-400 border border-red-500/20 px-3 py-1.5 rounded-md transition-all"
                                >
                                    Sign Out
                                </button>
                            </div>
                        ) : (
                            <button 
                                onClick={() => signIn()}
                                className="text-xs bg-[#59deca] hover:bg-[#4bcabc] text-black font-semibold px-4 py-2 rounded-md transition-all"
                            >
                                Sign In
                            </button>
                        )}
                    </div>
                </div>
            </nav>
        </header>
    )
}
export default NavBar
