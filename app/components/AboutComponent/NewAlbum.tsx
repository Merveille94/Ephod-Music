import React from 'react'
import Image from 'next/image'
import { FaSpotify, FaApple, FaAmazon } from 'react-icons/fa'
import { BsFillPlayFill } from 'react-icons/bs'

const NewAlbum = () => {
    const tracks = [
        { title: "Lead to His Glory", duration: "1:56" },
        { title: "Truth", duration: "1:45" },
        { title: "One More", duration: "1:58" },
        { title: "Second Chance", duration: "1:55" },
        { title: "Yes", duration: "1:47" },
        { title: "Last More", duration: "1:56" },
        { title: "Spontaneous", duration: "1:46" },
    ]

    return (
        <div className="bg-black text-white py-16">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold mb-8">
                    New Album Out <span className="text-orange-500">Now!</span>
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Album Cover Side */}
                    <div className="space-y-6">
                        <div className="relative">
                            <Image
                                src="/images/alb1.png"
                                alt="New Album Cover"
                                width={400}
                                height={400}
                                className="w-full rounded-lg"
                            />
                        </div>

                        <div className="flex justify-center space-x-4">
                            <button className="bg-white p-4 rounded-lg hover:bg-gray-200 transition-colors">
                                <FaSpotify className="text-black text-2xl" />
                            </button>
                            <button className="bg-white p-4 rounded-lg hover:bg-gray-200 transition-colors">
                                <FaApple className="text-black text-2xl" />
                            </button>
                            <button className="bg-white p-4 rounded-lg hover:bg-gray-200 transition-colors">
                                <FaAmazon className="text-black text-2xl" />
                            </button>
                        </div>
                    </div>

                    {/* Track List Side */}
                    <div className="bg-zinc-900 rounded-lg p-6">
                        {tracks.map((track, index) => (
                            <div
                                key={index}
                                className="flex items-center justify-between py-4 border-b border-zinc-800 group hover:bg-zinc-800 px-4 rounded-lg transition-colors"
                            >
                                <div className="flex items-center space-x-4">
                                    <button className="opacity-0 group-hover:opacity-100 transition-opacity">
                                        <BsFillPlayFill className="text-2xl" />
                                    </button>
                                    <span className="text-gray-300">{track.title}</span>
                                </div>
                                <span className="text-gray-500">{track.duration}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NewAlbum