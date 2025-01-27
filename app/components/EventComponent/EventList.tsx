import React from 'react'
import Link from 'next/link'

const EventList = () => {
    const shows = [
        {
            id: 1,
            date: { month: 'Jun', day: '22' },
            city: 'Lomas de Zamora',
            venue: 'Fear Farm Festival Grounds',
            status: 'available',
        },
        {
            id: 2,
            date: { month: 'Jun', day: '23' },
            city: 'San Isidro',
            venue: 'Hard Rock Hotel',
            status: 'available',
        },
        {
            id: 3,
            date: { month: 'Jun', day: '29' },
            city: 'Mannheim',
            venue: 'Lakewood Amphitheatre',
            status: 'available',
        },
        {
            id: 4,
            date: { month: 'Jun', day: '30' },
            city: 'Avellaneda',
            venue: 'Tinker Field',
            status: 'available',
        },
        {
            id: 5,
            date: { month: 'Jul', day: '01' },
            city: 'Naltchik',
            venue: 'Vinoy Park',
            status: 'soldOut',
        },
        {
            id: 6,
            date: { month: 'Jul', day: '02' },
            city: 'Hampton (VA)',
            venue: 'Perfect Vodka Amphitheatre',
            status: 'cancelled',
        },
        {
            id: 7,
            date: { month: 'Aug', day: '02' },
            city: 'Omsk',
            venue: 'Le Splendid',
            status: 'available',
        },
    ]

    const getStatusButton = (status: string) => {
        switch (status) {
            case 'available':
                return (
                    <Link
                        href="#"
                        className="bg-white text-black px-6 py-2 text-sm font-medium hover:bg-orange-500 hover:text-white transition-colors"
                    >
                        TICKETS
                    </Link>
                )
            case 'soldOut':
                return (
                    <span className="text-sm font-medium text-white opacity-75">
            Sold out!
          </span>
                )
            case 'cancelled':
                return (
                    <span className="text-sm font-medium text-white opacity-75">
            Cancelled
          </span>
                )
            default:
                return null
        }
    }

    return (
        <div className="w-full bg-black text-white py-8">
            <div className="container mx-auto px-4">
                <div className="space-y-6">
                    {shows.map((show) => (
                        <div
                            key={show.id}
                            className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 py-4 border-b border-gray-800"
                        >
                            {/* Date */}
                            <div className="flex items-center gap-8">
                                <div className="w-16">
                                    <div className="text-2xl font-bold">{show.date.day}</div>
                                    <div className="text-sm opacity-75">{show.date.month}</div>
                                </div>

                                {/* Location */}
                                <div>
                                    <div className="font-medium">{show.city}</div>
                                    <div className="text-sm opacity-75">{show.venue}</div>
                                </div>
                            </div>

                            {/* Status/Button */}
                            <div className="ml-24 sm:ml-0">
                                {getStatusButton(show.status)}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default EventList