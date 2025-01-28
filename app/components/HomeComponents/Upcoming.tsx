import React from 'react'
import Link from "next/link";

interface UcProps {
    textColor?: string;
}

const Upcoming = ({
    textColor = "text-gray-900",
                  }:UcProps) => {
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
        <div className="container mx-auto">
            <h2 className="text-4xl font-light text-gray-500 mb-2">Tour</h2>
            <h3 className={`text-3xl font-bold ${textColor} mb-8`}>UPCOMING SHOWS</h3>

            {/* Shows List */}
            <div className="space-y-2">
                {shows.map((show) => (
                    <div key={show.id} className="flex items-center justify-between group">
                        {/* Date Box */}
                        <div className="bg-black text-white text-center p-3 w-20">
                            <div className="text-sm">{show.date.month}</div>
                            <div className="text-sm md:text-xl font-bold">{show.date.day}</div>
                        </div>

                        {/* Venue Info */}
                        <div className="flex-grow px-4">
                            <h4 className={`text-sm md:text-xl font-semibold ${textColor}`}>{show.city}</h4>
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
                    href="/pages/events"
                    className="inline-block border border-gray-900 px-8 py-3 text-sm text-gray-900 hover:bg-gray-900 hover:text-white transition-colors duration-300"
                >
                    VIEW MORE EVENTS
                </Link>
            </div>
        </div>
    )
}
export default Upcoming
