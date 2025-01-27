import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube } from 'react-icons/fa'
import { FaSoundcloud } from 'react-icons/fa'
import { SlSocialSpotify } from 'react-icons/sl'

const Footer = () => {
    return (
        <footer className="bg-black text-white py-4 px-4">
            <div className="container mx-auto flex flex-col items-center gap-8">
                {/* Logo */}
                <div className="w-24 h-24 relative">
                    <Image
                        src="/images/Artboard 5@2x-8.png"
                        alt="The Ephod Music"
                        fill
                        className="object-contain"
                        priority
                    />
                </div>

                {/* Email Signup */}
                <div className="w-full max-w-md flex flex-col md:flex-row gap-2">
                    <input
                        type="email"
                        placeholder="your email"
                        className="flex-1 px-4 py-2 text-black outline-none rounded-lg"
                    />
                    <button className="bg-orange-500 text-white px-6 py-2 hover:bg-orange-600 transition-colors rounded-lg">
                        SIGN UP
                    </button>
                </div>

                {/* Social Icons */}
                <div className="flex gap-6">
                    <Link href="#" className="hover:text-orange-500 transition-colors">
                        <FaFacebookF size={20} />
                    </Link>
                    <Link href="#" className="hover:text-orange-500 transition-colors">
                        <FaTwitter size={20} />
                    </Link>
                    <Link href="#" className="hover:text-orange-500 transition-colors">
                        <FaInstagram size={20} />
                    </Link>
                    <Link href="#" className="hover:text-orange-500 transition-colors">
                        <SlSocialSpotify size={20} />
                    </Link>
                    <Link href="#" className="hover:text-orange-500 transition-colors">
                        <FaSoundcloud size={20} />
                    </Link>
                    <Link href="#" className="hover:text-orange-500 transition-colors">
                        <FaYoutube size={20} />
                    </Link>
                </div>

                {/* Copyright */}
                <div className="text-sm text-gray-400">
                    © {new Date().getFullYear()} THE EPHOD MUSIC
                </div>
            </div>
        </footer>
    )
}

export default Footer