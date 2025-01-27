import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const HeroHome = () => {
    const navItems = [
        { id: 1, title: 'Artists', href: '/artists' },
        { id: 2, title: 'Discography', href: '/discography' },
        { id: 3, title: 'Services', href: '/services' },
        { id: 4, title: 'Events', href: '/events' }
    ]

    return (
        <div className="relative h-[70vh] w-full">
            {/* Background Image */}
            <div className="absolute inset-0">
                <Image
                    src="/images/hero-bg.png"
                    alt="Concert performance"
                    fill
                    priority
                    className="object-cover"
                />
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-r from-black via-black/50 to-transparent" />
            </div>

            {/* Navigation Content */}
            <div className="relative z-10 h-full">
                <div className="container mx-auto px-4 py-12 h-full flex flex-col justify-center">
                    <nav className="max-w-xl">
                        <ul className="space-y-4">
                            {navItems.map((item) => (
                                <li key={item.id}>
                                    <Link
                                        href={item.href}
                                        className="text-white text-5xl sm:text-7xl font-bold hover:text-orange-500 transition-colors duration-300 block"
                                    >
                                        {item.title}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </nav>
                </div>
            </div>

            {/* Down Arrow */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
                <div className="animate-bounce">
                    <svg
                        className="w-8 h-8 text-white"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
                    </svg>
                </div>
            </div>
        </div>
    )
}

export default HeroHome