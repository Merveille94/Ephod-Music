import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const DiscoList = () => {
    const artists = [
        { id: 1, name: 'Holy Poison', genre: 'by Escape', image: '/images/d1.png' },
        { id: 2, name: 'Mono', genre: 'by Escape', image: '/images/d2.png' },
        { id: 3, name: 'Absurdity', genre: 'by Frankie Jones', image: '/images/d3.png' },
        { id: 4, name: 'ProtectLab', genre: 'by Herman Child', image: '/images/d4.png' },
        { id: 5, name: 'Evil Technology', genre: 'Irene Blake', image: '/images/d5.png' },
        { id: 6, name: 'Night like This', genre: 'River Kerry', image: '/images/d6.png' },
        { id: 7, name: 'Beruem', genre: 'By River Kerry', image: '/images/d7.png' },
        { id: 8, name: 'Matthew dear Beans', genre: 'by Tales', image: '/images/d8.png' },
        { id: 9, name: 'Signal Noise', genre: 'by Tales', image: '/images/d9.png' },
        { id: 10, name: 'Luminance', genre: 'by Zoe Nolan', image: '/images/d10.png' },
        { id: 11, name: 'Negative Audio', genre: 'by Legion', image: '/images/d11.png' },
        { id: 12, name: 'Culture', genre: 'by Brach', image: '/images/d12.png' }
    ]

    return (
        <section className="py-16 px-4 bg-black">
            <div className="container mx-auto">
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
                    {artists.map((artist) => (
                        <Link href="/pages/SignIn" key={artist.id}>
                            <div className="group relative aspect-square overflow-hidden">
                                {/* Artist Image */}
                                <Image
                                    src={artist.image}
                                    alt={artist.name}
                                    fill
                                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                                />

                                {/* Overlay */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    {/* Artist Info */}
                                    <div className="absolute bottom-0 left-0 right-0 p-6">
                                        <h3 className="text-white text-xl font-semibold mb-1">
                                            {artist.name}
                                        </h3>
                                        <p className="text-gray-300 text-sm">
                                            {artist.genre}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>

                {/* View More Button */}
                <div className="text-center mt-12">
                    <Link
                        href="#"
                        className="inline-block border border-white px-8 py-3 text-sm text-white hover:bg-white hover:text-black transition-colors duration-300"
                    >
                        VIEW MORE ARTISTS
                    </Link>
                </div>
            </div>
        </section>
    )
}

export default DiscoList