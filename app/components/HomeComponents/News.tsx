import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const News = () => {
    const newsItems = [
        {
            id: 1,
            image: '/images/news1.png',
            date: 'October 10,2024',
            title: 'Lost In His Presence',
            content: 'Lorem Ipsum Dolor Sit Amet Consectetur Adipiscing Elit Ut Et Massa Mi. Aliquam In Hendrerit Urna. Pellentesque Sit Amet Sapien Fringilla, Mattis Ligula Consectetur, Ultrices Mauris. Maecenas Vitae Mattis Tellus. Nullam Quis Imperdiet Augue. Vestibulum Auctor Ornare Leo, Non Suscipit.',
        },
        {
            id: 2,
            image: '/images/news2.png',
            date: 'October 10,2024',
            title: 'Lost In His Presence',
            content: 'Lorem Ipsum Dolor Sit Amet Consectetur Adipiscing Elit Ut Et Massa Mi. Aliquam In Hendrerit Urna. Pellentesque Sit Amet Sapien Fringilla, Mattis Ligula Consectetur, Ultrices Mauris. Maecenas Vitae Mattis Tellus. Nullam Quis Imperdiet Augue. Vestibulum Auctor Ornare Leo, Non Suscipit.',
        },
        {
            id: 3,
            image: '/images/news3.png',
            date: 'October 10,2024',
            title: 'Lost In His Presence',
            content: 'Lorem Ipsum Dolor Sit Amet Consectetur Adipiscing Elit Ut Et Massa Mi. Aliquam In Hendrerit Urna. Pellentesque Sit Amet Sapien Fringilla, Mattis Ligula Consectetur, Ultrices Mauris. Maecenas Vitae Mattis Tellus. Nullam Quis Imperdiet Augue. Vestibulum Auctor Ornare Leo, Non Suscipit.',
        }
    ]

    return (
        <section className="py-16 px-4 bg-white">
            <div className="container mx-auto">
                {/* Section Header */}
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-light text-gray-500 mb-2">Our Blog</h2>
                    <h3 className="text-3xl font-bold">
                        LATEST <span className="text-orange-500">NEWS</span>
                    </h3>
                </div>

                {/* News Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {newsItems.map((item) => (
                        <article key={item.id} className="group">
                            {/* Image Container */}
                            <div className="relative aspect-[4/3] mb-4 overflow-hidden">
                                <Image
                                    src={item.image}
                                    alt={item.title}
                                    fill
                                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                                />
                            </div>

                            {/* Content */}
                            <div className="space-y-3">
                                <time className="text-gray-500 text-sm">{item.date}</time>
                                <h4 className="text-xl font-semibold">
                                    <Link href="#" className="hover:text-orange-500 transition-colors">
                                        {item.title}
                                    </Link>
                                </h4>
                                <p className="text-gray-600 line-clamp-4">{item.content}</p>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default News