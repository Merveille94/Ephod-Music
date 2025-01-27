import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Discography = () => {
    const releases = [
        { id: 1, src: '/images/img1.png', alt: 'Trip Album Cover' },
        { id: 2, src: '/images/img2.png', alt: 'Drai Baka Album Cover' },
        { id: 3, src: '/images/img3.png', alt: 'Power Over Me Album Cover' },
        { id: 4, src: '/images/img4.png', alt: 'Solar Album Cover' }
    ]

    return (
        <section className="py-16 px-4 bg-white">
            <div className="container mx-auto">
                {/* Section Title */}
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-light text-gray-500 mb-2">Discography</h2>
                    <h3 className="text-3xl font-bold text-gray-900">MORE RELEASES</h3>
                </div>

                {/* Album Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {releases.map((release) => (
                        <div key={release.id} className="group relative aspect-square overflow-hidden">
                            <Link href="#">
                                <div className="relative w-full h-full">
                                    <Image
                                        src={release.src}
                                        alt={release.alt}
                                        fill
                                        className="object-cover transition-transform duration-300 group-hover:scale-105"
                                    />
                                    {/* Hover Overlay */}
                                    <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-opacity duration-300" />
                                </div>
                            </Link>
                        </div>
                    ))}
                </div>

                {/* View More Button */}
                <div className="text-center mt-12">
                    <Link
                        href="/pages/discography"
                        className="inline-block border border-gray-900 px-8 py-3 text-sm text-gray-900 hover:bg-gray-900 hover:text-white transition-colors duration-300"
                    >
                        VIEW MORE RELEASES
                    </Link>
                </div>
            </div>
        </section>
    )
}

export default Discography