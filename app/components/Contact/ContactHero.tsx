import React from 'react'
import Image from 'next/image'


const DiscoHero = () => {
    return (
        <div className="relative h-[60vh] w-full">
            {/* Background Image */}
            <div className="absolute inset-0">
                <Image
                    src="/images/contact-bg.png"
                    alt="Concert performance"
                    fill
                    priority
                    className="object-cover"
                />
            </div>
        </div>
    )
}

export default DiscoHero