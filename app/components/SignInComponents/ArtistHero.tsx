import React from 'react'
import Image from 'next/image'


const ArtistHero = () => {
    return (
        <div className="relative min-h-[40vh] w-full">
            {/* Background Image setting */}
            <div className="absolute inset-0">
                <Image
                    src="/images/Background.png"
                    alt="Concert performance"
                    fill
                    className="object-cover bg-center"
                />
            </div>
        </div>
    )
}

export default ArtistHero