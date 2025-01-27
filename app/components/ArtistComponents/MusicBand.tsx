import React from 'react'
import Image from 'next/image'

const MusicBand = () => {
    return (
        <section className="py-24 px-4 bg-black">
            <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center pb-12 border-b-2 border-gray-600">
                {/* Image Section */}
                <div className="relative aspect-[4/3] w-full">
                    <Image
                        src="/images/band-bg.png"
                        alt="Band performing live"
                        fill
                        className="object-cover"
                        priority
                    />
                </div>

                {/* Content Section */}
                <div className="lg:pl-12">
                    <h2 className="text-4xl font-light text-gray-200 mb-2">Music Band</h2>
                    <h3 className="text-3xl font-bold text-gray-300 mb-8">The Ephod Music Band</h3>

                    <p className="text-gray-600 leading-relaxed mb-12">
                        The very first act on the  Ephod Music record label.<br/>
                        Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi.
                        Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla,
                        mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus..
                    </p>

                </div>
            </div>
        </section>
    )
}

export default MusicBand