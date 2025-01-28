import React from 'react'
import Upcoming from "@/app/components/HomeComponents/Upcoming";

const Tour = () => {

    return (
        <section className=" py-16 px-4 bg-white">
            <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10">
                {/* Tour Dates Section */}
                <Upcoming/>

                {/* Video Section */}
                <div className="relative aspect-video bg-black">
                    <iframe
                        className="w-full h-full"
                        src="https://www.youtube.com/embed/dQw4w9WgXcQ"  // Example video
                        title="Watch Our New Video"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    />
                </div>
            </div>
        </section>
    )
}

export default Tour