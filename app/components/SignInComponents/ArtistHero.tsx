import React from 'react'
import Image from 'next/image'


const ArtistHero = () => {
    return (
        <div className="relative h-[40vh] w-full">
            {/* Background Image */}
            <div className="absolute inset-0">
                <Image
                    src="/images/background.png"
                    alt="Concert performance"
                    fill
                    className="object-cover bg-center bg-contain"
                />
            </div>
        </div>
    )
}

export default ArtistHero