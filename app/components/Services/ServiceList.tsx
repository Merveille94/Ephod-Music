import React from 'react'
import { FaMicrophone } from "react-icons/fa";
import { MdEventAvailable } from "react-icons/md";
import Image from "next/image";

const ServiceList = () => {
    return (
        <div className="w-full py-16 px-4 bg-gray-900 text-white">
            <div className="container mx-auto space-y-12">
                {/* First Service */}
                <div className="flex flex-col md:flex-row items-center gap-8">
                    <div className="w-full md:w-1/2">
                        <Image
                            src="/images/s1.png"
                            alt="Live band performance"
                            width={350}
                            height={450}
                            className="w-full h-64 object-cover rounded-lg"
                        />
                    </div>
                    <div className="w-full md:w-1/2 space-y-4">
                        <div className="flex items-center gap-2">
                            <MdEventAvailable className="text-2xl text-orange-500" />
                            <h2 className="text-xl md:text-2xl font-bold">Book The Ephod Band For Events</h2>
                        </div>
                        <p className="text-gray-300">
                            The very first act on the Ephod Music record label. Get in touch if you need a live
                            performance for any of your events. We respond promptly.
                        </p>
                        <button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-md
              transition duration-300">
                            BOOK FOR EVENT
                        </button>
                    </div>
                </div>

                {/* Second Service */}
                <div className="flex flex-col md:flex-row items-center gap-10">
                    <div className="w-full md:w-1/2 md:order-2">
                        <Image
                            src="/images/s2.png"
                            alt="Studio equipment"
                            width={350}
                            height={450}
                            className="w-full h-64 object-cover rounded-lg"
                        />
                    </div>
                    <div className="w-full md:w-1/2 space-y-4 md:order-1">
                        <div className="flex items-center gap-2">
                            <FaMicrophone className="text-2xl text-orange-500" />
                            <h2 className="text-xl md:text-2xl  font-bold">Book Studio Time</h2>
                        </div>
                        <p className="text-gray-300">
                            We have the equipment for quality recording, mixing-HD and video services.
                            Schedule a time from available slots to come to the studio. We are ready to have you.
                        </p>
                        <button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-md
              transition duration-300">
                            BOOK STUDIO TIME
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ServiceList