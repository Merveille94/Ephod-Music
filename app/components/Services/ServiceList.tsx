import Image from "next/image";
import { AiOutlineRight } from "react-icons/ai";

const ServiceList = () => {
    return (
        <div className="bg-gray-900 text-white p-8 py-20">
            <div className="container mx-auto space-y-10">
                {/* First Service */}
                <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
                    <div className="w-full md:w-1/2">
                        <Image
                            src="/images/s1.png"
                            alt="Event"
                            width={600}
                            height={300}
                            className="rounded-lg shadow-lg"
                        />
                    </div>
                    <div className="w-full md:w-1/3 space-y-4">
                        <h2 className="text-xl font-bold">1. Book The Ephod Band For Events</h2>
                        <p className="text-gray-300">
                            The very first act on the Ephod Music record label. Get in touch if
                            you need a live performance for any of your events. We respond
                            promptly.
                        </p>
                        <button className="bg-orange-500 text-white px-6 py-3 rounded-lg flex items-center gap-2 hover:bg-orange-600">
                            BOOK FOR EVENT <AiOutlineRight />
                        </button>
                    </div>
                </div>

                {/* Second Service */}
                <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
                    <div className="w-full md:w-1/2">
                        <Image
                            src="/images/s2.png"
                            alt="Studio"
                            width={600}
                            height={300}
                            className="rounded-lg shadow-lg"
                        />
                    </div>
                    <div className="w-full md:w-1/3 space-y-4">
                        <h2 className="text-xl font-bold">2. Book Studio Time</h2>
                        <p className="text-gray-300">
                            We have the equipment for quality recording, mixing, and video
                            services. Schedule a time from available slots to come to the studio.
                            We are happy to have you.
                        </p>
                        <button className="bg-orange-500 text-white px-6 py-3 rounded-lg flex items-center gap-2 hover:bg-orange-600">
                            BOOK STUDIO TIME <AiOutlineRight />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServiceList;
