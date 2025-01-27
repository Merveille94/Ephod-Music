import React from 'react'
import Image from 'next/image'


const AboutHero = () => {
    return (
        <div className="relative h-[30vh] w-full">
            {/* Background Image */}
            <div className="absolute inset-0">
                <Image
                    src="/images/ab-bg.png"
                    alt="Concert performance"
                    fill
                    priority
                    className="object-cover"
                />
            </div>

            {/* Navigation Content */}
            <div className="relative z-10">
                <div className="container mx-auto py-12 flex items-center justify-center">
                    <div className="flex items-center justify-center">
                        {/*<Image src="/images/cross-artist.png" alt="Cross of Christ" width={200} height={300}/>*/}
                        <div className="text-center max-w-6xl">
                            <h2 className="text-4xl font-semibold text-gray-200 mb-2">About Us</h2>
                            <h3 className="text-lg text-gray-300">Find out more about the wonderful ministers of the world God has given us...</h3>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutHero