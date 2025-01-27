import React from 'react'
import Image from 'next/image'


const ServicesHero = () => {

    return (
        <div className="relative h-[55vh] w-full">
            {/* Background Image */}
            <div className="absolute inset-0">
                <Image
                    src="/images/bg-artist.png"
                    alt="Concert performance"
                    fill
                    priority
                    className="object-cover"
                />
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-r from-black via-black/45 to-transparent" />
            </div>

            {/* Navigation Content */}
            <div className="relative z-10">
                <div className="container mx-auto px-4 py-12 flex items-center justify-center">
                    <div className="flex flex-col items-center justify-center p-4">
                        <Image src="/images/cross-artist.png" alt="Cross of Christ" width={200} height={300}/>
                        <div className="text-center max-w-4xl">
                            <h2 className="text-4xl font-semibold text-gray-300 mb-2">Services</h2>
                            <h3 className="text-lg text-gray-300">Check out the premium and exclusive services we have for everyone</h3>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ServicesHero