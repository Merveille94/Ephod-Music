import React from 'react'
import Link from 'next/link'

const Tour = () => {
    const shows = [
        {
            id: 1,
            date: { month: 'JUN', day: '22' },
            city: 'Phoenix, AZ',
            venue: 'Fear Farm Festival Grounds',
            ticketLink: '#'
        },
        {
            id: 2,
            date: { month: 'JUN', day: '23' },
            city: 'Las Vegas, NV',
            venue: 'Hard Rock Hotel',
            ticketLink: '#'
        },
        {
            id: 3,
            date: { month: 'JUN', day: '29' },
            city: 'Atlanta, GA',
            venue: 'Lakewood Amphitheatre',
            ticketLink: '#'
        },
        {
            id: 4,
            date: { month: 'JUN', day: '30' },
            city: 'Orlando, FL',
            venue: 'Tinker Field',
            ticketLink: '#'
        }
    ]

    return (
        <section className=" py-16 px-4 bg-white">
            <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10">
                {/* Tour Dates Section */}
                <div>
                    <h2 className="text-4xl font-light text-gray-500 mb-2">Tour</h2>
                    <h3 className="text-3xl font-bold text-gray-900 mb-8">UPCOMING SHOWS</h3>

                    {/* Shows List */}
                    <div className="space-y-2">
                        {shows.map((show) => (
                            <div key={show.id} className="flex items-center justify-between group">
                                {/* Date Box */}
                                <div className="bg-black text-white text-center p-3 w-20">
                                    <div className="text-sm">{show.date.month}</div>
                                    <div className="text-2xl font-bold">{show.date.day}</div>
                                </div>

                                {/* Venue Info */}
                                <div className="flex-grow px-6">
                                    <h4 className="text-xl font-semibold">{show.city}</h4>
                                    <p className="text-gray-600">{show.venue}</p>
                                </div>

                                {/* Ticket Button */}
                                <Link
                                    href={show.ticketLink}
                                    className="bg-orange-500 text-white px-6 py-2 hover:bg-orange-600 transition-colors"
                                >
                                    TICKETS
                                </Link>
                            </div>
                        ))}
                    </div>

                    {/* View More Button */}
                    <div className="mt-12 text-center">
                        <Link
                            href="#"
                            className="inline-block border border-gray-900 px-8 py-3 text-sm text-gray-900 hover:bg-gray-900 hover:text-white transition-colors duration-300"
                        >
                            VIEW MORE EVENTS
                        </Link>
                    </div>
                </div>

                {/* Video Section */}
                <div className="relative aspect-video bg-black">
                    <iframe
                        className="w-full h-full"
                        src="https://www.youtube.com/embed/dQw4w9WgXcQ"  // Example video
                        title="Watch Our New Video"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    />
                    {/*<div className="absolute inset-0 flex flex-col items-center justify-center bg-black/50 opacity-0 hover:opacity-100 transition-opacity duration-300">*/}
                    {/*    <div className="w-16 h-16 border-2 border-white rounded-full flex items-center justify-center mb-4">*/}
                    {/*        <div className="w-0 h-0 border-l-[12px] border-l-white border-y-[8px] border-y-transparent ml-1" />*/}
                    {/*    </div>*/}
                    {/*    <p className="text-white text-lg">Watch Our New Video</p>*/}
                    {/*</div>*/}
                </div>
            </div>
        </section>
    )
}

export default Tour