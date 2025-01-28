import React from 'react'
import Image from 'next/image'


const BlogHero = () => {
    return (
        <div className="relative h-[60vh] w-full">
            {/* Background Image */}
            <div className="absolute inset-0">
                <Image
                    src="/images/blog-bg.png"
                    alt="Concert performance"
                    fill
                    priority
                    className="object-cover"
                />
            </div>
        </div>
    )
}

export default BlogHero