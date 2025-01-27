import React from 'react'
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import Link from "next/link";
import Image from "next/image";
import {FaFacebookF, FaInstagram, FaVimeoV, FaYoutube} from "react-icons/fa";


const Header = () => {
    return (
        <header className="bg-black text-white p-2">
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
                            <li><FaFacebookF size={15}/></li>
                            <li><FaInstagram size={18}/></li>
                            <li><FaYoutube size={18}/></li>
                            <li><FaVimeoV size={18}/></li>
                        </ul>
                    </div>
                    <div>
                        <button><HiOutlineMenuAlt3 size={30} className="pt-2"/></button>
                    </div>
                </div>
            </div>
        </header>
    )
}
export default Header
