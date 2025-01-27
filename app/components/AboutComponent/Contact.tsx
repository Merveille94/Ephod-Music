"use client"
import React from 'react'
import { FaFacebookF, FaInstagram, FaYoutube, FaSoundcloud } from 'react-icons/fa'
import { FaXTwitter } from "react-icons/fa6"

const Contact = () => {
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        // Add form submission logic here
    }

    return (
        <div className="bg-white">
            <div className="container mx-auto py-16 px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    {/* Contact Info */}
                    <div className="space-y-6">
                        <h2 className="text-3xl font-bold">
                            Get In <span className="text-orange-500">Touch</span>
                        </h2>

                        <div className="space-y-2">
                            <p><strong>Address:</strong> 2209 N 99th Ave</p>
                            <p><strong>Zipcode:</strong> 85037</p>
                            <p><strong>State:</strong> Arizona</p>
                            <p><strong>Country:</strong> USA</p>
                            <p><strong>Phone:</strong> (623) 826-5632</p>
                            <p><strong>Email:</strong> lorem@gmail.com</p>
                        </div>

                        {/* Social Media Links */}
                        <div className="flex space-x-4 pt-4">
                            <a href="#" className="p-2 bg-gray-100 rounded-full hover:bg-gray-200 transition-colors">
                                <FaFacebookF className="text-gray-700 text-lg" />
                            </a>
                            <a href="#" className="p-2 bg-gray-100 rounded-full hover:bg-gray-200 transition-colors">
                                <FaXTwitter className="text-gray-700 text-lg" />
                            </a>
                            <a href="#" className="p-2 bg-gray-100 rounded-full hover:bg-gray-200 transition-colors">
                                <FaInstagram className="text-gray-700 text-lg" />
                            </a>
                            <a href="#" className="p-2 bg-gray-100 rounded-full hover:bg-gray-200 transition-colors">
                                <FaYoutube className="text-gray-700 text-lg" />
                            </a>
                            <a href="#" className="p-2 bg-gray-100 rounded-full hover:bg-gray-200 transition-colors">
                                <FaSoundcloud className="text-gray-700 text-lg" />
                            </a>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div>
                        <form onSubmit={handleSubmit} className="space-y-4">
                            <div className="grid grid-cols-2 gap-4">
                                <input
                                    type="text"
                                    placeholder="First Name"
                                    className="bg-gray-300 p-3 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-orange-500"
                                />
                                <input
                                    type="text"
                                    placeholder="Last Name"
                                    className="bg-gray-300 p-3 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-orange-500"
                                />
                            </div>
                            <input
                                type="email"
                                placeholder="Email"
                                className="bg-gray-300 p-3 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-orange-500"
                            />
                            <textarea
                                placeholder="Message"
                                rows={6}
                                className="bg-gray-300 p-3 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-orange-500"
                            />
                            <button
                                type="submit"
                                className="w-full bg-orange-500 text-white py-3 rounded-md hover:bg-orange-600 transition-colors focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2"
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