"use client"
import React from 'react'
import { FaFacebookF, FaInstagram, FaYoutube, FaSoundcloud } from 'react-icons/fa'
import { FaXTwitter } from "react-icons/fa6"

interface ContactProps {
    bgColor?: string; // Background color for the component
    textColor?: string; // Text color for headings and paragraphs
    buttonColor?: string; // Button background color
    buttonHoverColor?: string; // Button hover color
}

const Contact = ({
                                             bgColor = "bg-white",
                                             textColor = "text-gray-700",
                                             buttonColor = "bg-orange-500",
                                             buttonHoverColor = "bg-orange-600",
                                         }: ContactProps) => {
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        // Add form submission logic here
    }

    return (
        <div className={`${bgColor} py-16`}>
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    {/* Contact Info */}
                    <div className="space-y-6">
                        <h2 className={`text-3xl font-bold ${textColor}`}>
                            Get In <span className="text-orange-500">Touch</span>
                        </h2>

                        <div className={`space-y-2 ${textColor}`}>
                            <p><strong>Address:</strong> 2209 N 99th Ave</p>
                            <p><strong>Zipcode:</strong> 85037</p>
                            <p><strong>State:</strong> Arizona</p>
                            <p><strong>Country:</strong> USA</p>
                            <p><strong>Phone:</strong> (623) 826-5632</p>
                            <p><strong>Email:</strong> lorem@gmail.com</p>
                        </div>

                        {/* Social Media Links */}
                        <div className="flex space-x-4 pt-4">
                            {[
                                { icon: <FaFacebookF />, href: "#" },
                                { icon: <FaXTwitter />, href: "#" },
                                { icon: <FaInstagram />, href: "#" },
                                { icon: <FaYoutube />, href: "#" },
                                { icon: <FaSoundcloud />, href: "#" },
                            ].map((item, idx) => (
                                <a
                                    key={idx} // Use the index as a unique key
                                    href={item.href}
                                    className="p-2 bg-gray-100 rounded-full hover:bg-gray-200 transition-colors text-gray-800"
                                >
                                    {item.icon}
                                </a>
                            ))}
                        </div>

                    </div>

                    {/* Contact Form */}
                    <div>
                        <form onSubmit={handleSubmit} className="space-y-4">
                            <div className="grid grid-cols-2 gap-4">
                                <input
                                    type="text"
                                    placeholder="First Name"
                                    className={`bg-gray-300 p-3 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-orange-500`}
                                />
                                <input
                                    type="text"
                                    placeholder="Last Name"
                                    className={`bg-gray-300 p-3 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-orange-500`}
                                />
                            </div>
                            <input
                                type="email"
                                placeholder="Email"
                                className={`bg-gray-300 p-3 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-orange-500`}
                            />
                            <textarea
                                placeholder="Message"
                                rows={6}
                                className={`bg-gray-300 p-3 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-orange-500`}
                            />
                            <button
                                type="submit"
                                className={`w-full ${buttonColor} text-white py-3 rounded-md hover:${buttonHoverColor} transition-colors focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2`}
                            >
                                Get In Touch
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact
