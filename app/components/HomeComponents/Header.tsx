"use client"
import React, { useState, useEffect } from 'react'
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { IoMdClose } from "react-icons/io";
import Link from "next/link";
import Image from "next/image";
import { FaFacebookF, FaInstagram, FaVimeoV, FaYoutube } from "react-icons/fa";
import {SignedIn, SignedOut, SignInButton, UserButton} from "@clerk/nextjs";

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [showNavbar, setShowNavbar] = useState(true);
    const [prevScrollPos, setPrevScrollPos] = useState(0);
    const [isScrolled, setIsScrolled] = useState(false); // New state for background change

    const menuItems = [
        { title: 'HOME', path: '/' },
        { title: 'DISCOGRAPHY', path: '/pages/discography' },
        { title: 'ARTISTS', path: '/pages/artist' },
        { title: 'EVENTS', path: '/pages/events' },
        { title: 'BLOG', path: '/pages/blog' },
        { title: 'SERVICES', path: '/pages/services' },
        { title: 'ABOUT US', path: '/pages/about' },
        { title: 'CONTACT US', path: '/pages/contact' },
    ];

    // Scroll handler to hide/show navbar based on scroll
    const handleScroll = () => {
        const currentScrollPos = window.pageYOffset;
        const isScrollingUp = currentScrollPos > prevScrollPos;
        setShowNavbar(isScrollingUp || currentScrollPos < 100); // Show navbar when scrolling up or when near the top
        setIsScrolled(currentScrollPos > 50); // Change background after scrolling down 50px
        setPrevScrollPos(currentScrollPos);
    };


    // For the click outside screen
    useEffect(() => {
        const handleOutsideClick = (event: MouseEvent) => {
            const target = event.target as HTMLElement; // Explicitly type the event target
            if (isMenuOpen && !target.closest('.menu-container')) {
                setIsMenuOpen(false);
            }
        };

        document.addEventListener('mousedown', handleOutsideClick);
        return () => {
            document.removeEventListener('mousedown', handleOutsideClick);
        };
    }, [isMenuOpen]);



    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [handleScroll, prevScrollPos]);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <header className={`fixed top-0 left-0 w-full z-20 flex justify-between items-center p-4 text-white bg-black transition-transform duration-300 ${
            showNavbar ? "transform translate-y-0" : "transform -translate-y-full"
        } ${isScrolled ? "bg-black" : "bg-transparent"}`}>
            <div className="container mx-auto flex items-center justify-between">
                {/* Logo */}
                <div className="flex items-center justify-center">
                    <Link href="/" className="flex items-center space-x-2">
                        <Image src="/images/Artboard 9@2x.png"
                               alt="Logo"
                               height={25}
                               width={25}
                        />
                        <h1 className="hidden sm:block uppercase pt-8">The Ephod Music</h1>
                    </Link>
                </div>
                <div className="flex items-center space-x-1 justify-center text-gray-200">
                    <div className="hidden md:flex items-center justify-center">
                        <ul className="flex items-center space-x-4 p-2">
                            <li><Link href="#"><FaFacebookF size={15}/></Link></li>
                            <li><Link href="#"><FaInstagram size={18}/></Link></li>
                            <li><Link href="#"><FaYoutube size={18}/></Link></li>
                            <li><Link href="#"><FaVimeoV size={18}/></Link></li>
                        </ul>
                    </div>

                    <div>
                        <SignedOut>
                            <div className="text-sm border-2 border-blue-200 hover:border-green-900 rounded-lg p-2 hover:bg-gray-200 hover:text-black font-semibold">
                                <SignInButton />
                            </div>
                        </SignedOut>
                        <SignedIn>
                            <div className=""><UserButton /></div>
                        </SignedIn>
                    </div>

                    <div>
                        <button onClick={toggleMenu}>
                            {isMenuOpen ?
                                <IoMdClose size={30} className="pt-2"/> :
                                <HiOutlineMenuAlt3 size={35} className="pt-2"/>
                            }
                        </button>
                    </div>
                </div>
            </div>

            {/* Dropdown Menu */}
            <div className={`menu-container fixed top-0 right-0 h-screen w-full sm:w-80 bg-black transform transition-transform duration-300 ease-in-out z-30  ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
                <div className="flex justify-end p-4">
                    <button onClick={toggleMenu}>
                        <IoMdClose size={30}/>
                    </button>
                </div>
                <nav className="p-4">
                    <ul className="space-y-6">
                        {menuItems.map((item, index) => (
                            <li key={index}>
                                <Link
                                    href={item.path}
                                    className="text-2xl hover:text-orange-500 transition-colors duration-200"
                                    onClick={toggleMenu}
                                >
                                    {item.title}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </nav>


                {/* Mobile Social Icons */}
                <div className="md:hidden absolute bottom-10 left-4">
                    <ul className="flex items-center space-x-6">
                        <li><Link href="#" className="hover:text-orange-500 transition-colors duration-200"><FaFacebookF size={20}/></Link></li>
                        <li><Link href="#" className="hover:text-orange-500 transition-colors duration-200"><FaInstagram size={23}/></Link></li>
                        <li><Link href="#" className="hover:text-orange-500 transition-colors duration-200"><FaYoutube size={23}/></Link></li>
                        <li><Link href="#" className="hover:text-orange-500 transition-colors duration-200"><FaVimeoV size={23}/></Link></li>
                    </ul>
                </div>
            </div>

            {/* Overlay */}
            {isMenuOpen && (
                <div
                    className="fixed inset-0 bg-black bg-opacity-50 z-10"
                    onClick={toggleMenu}
                />
            )}
        </header>
    )
}

export default Header