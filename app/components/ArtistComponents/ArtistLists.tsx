import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const ArtistList = () => {
    const artists = [
        { id: 1, name: 'Sonnie Badu', genre: 'Gospel music', image: '/images/A1.png' },
        { id: 2, name: 'Leslie Alexander', genre: 'Pop Gospel music', image: '/images/A2.png' },
        { id: 3, name: 'Albert Flores', genre: 'Gospel', image: '/images/A3.png' },
        { id: 4, name: 'Robert Fox', genre: 'Genre', image: '/images/A4.png' },
        { id: 5, name: 'Theresa Webb', genre: 'Genre', image: '/images/A5.png' },
        { id: 6, name: 'Dianne Russell', genre: 'Genre', image: '/images/A6.png' },
        { id: 7, name: 'Kathryn Murphy', genre: 'Genre', image: '/images/A7.png' },
        { id: 8, name: 'Jenny Wilson', genre: 'Genre', image: '/images/A8.png' },
        { id: 9, name: 'Bessie Cooper', genre: 'Genre', image: '/images/A9.png' }
    ]

    return (
        <section className="py-16 px-4 bg-black">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
                    {artists.map((artist) => (
                        <Link href="#" key={artist.id}>
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

export default ArtistList