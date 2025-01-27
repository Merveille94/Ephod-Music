import React from 'react'
import Image from 'next/image'


const EventHero = () => {
    return (
        <div className="relative h-[70vh] w-full">
            {/* Background Image */}
            <div className="absolute inset-0">
                <Image
                    src="/images/events-bg.png"
                    alt="Concert performance"
                    fill
                    priority
                    className="object-cover"
                />
            </div>
        </div>
    )
}

export default EventHero