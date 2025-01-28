import React from 'react'
import Image from 'next/image'


const ArtistHero = () => {
    return (
        <div className="h-[40vh] w-full">
            {/* Background Image setting */}
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