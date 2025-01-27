import React from 'react'
import Image from 'next/image'

const Story = () => {
    return (
        <section className="py-24 px-4 bg-white">
            <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                {/* Image Section */}
                <div className="relative aspect-[4/3] w-full">
                    <Image
                        src="/images/story-bg.png"
                        alt="Band performing live"
                        fill
                        className="object-cover"
                        priority
                    />
                </div>

                {/* Content Section */}
                <div className="lg:pl-12">
                    <h2 className="text-4xl font-light text-gray-500 mb-2">The Story</h2>
                    <h3 className="text-3xl font-bold text-gray-900 mb-8">ABOUT US</h3>

                    <p className="text-gray-600 leading-relaxed mb-12">
                        Ephod Music is a passionate collective of gospel musicians committed to
                        uplifting and inspiring audiences through powerful, soul-stirring performances.
                        As both a band and an emerging record label, we bring excellence and integrity
                        to every project, whether it&#39;s delivering live concerts or producing high-quality
                        studio recordings. Our mission is to connect listeners with the divine and foster a
                        sense of community through music that resonates with the heart and soul.
                    </p>

                    {/* Signature Image */}
                    <div className="relative h-16 w-32">
                        <Image
                            src="/images/sign.png"
                            alt="Signature"
                            fill
                            className="object-contain object-left"
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Story