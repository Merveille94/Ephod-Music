import { FC } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube, FaSpotify } from 'react-icons/fa';

interface Product {
    title: string;
    price: number;
    image: string;
}

interface Post {
    title: string;
    date: string;
}

const Sidebar= () => {
    const products: Product[] = [
        { title: "Product Gallery", price: 115.00, image: "/images/p1.png" },
        { title: "Product Custom Layout", price: 135.00, image: "/images/p1.png" },
        { title: "Product Custom Header", price: 149.00, image: "/images/p1.png" },
    ];

    const posts: Post[] = [
        { title: "I'm Just Super Saiyan", date: "February 16, 2017" },
        { title: "Artwork Revealed", date: "February 16, 2017" },
        { title: "Self-Hosted Playlist", date: "February 16, 2017" },
    ];

    const tags = [
        'audio', 'custom layout', 'embed', 'gallery', 'image',
        'instagram', 'link', 'photo', 'slider', 'playlist',
        'quote', 'review', 'rock', 'slide', 'soundcloud',
        'status', 'story', 'video', 'youtube'
    ];

    return (
        <div className="w-full bg-gray-900 text-gray-300 p-4 space-y-6">
            {/* New Products Section */}
            <section>
                <h2 className="text-white text-xl font-bold mb-4">New Products</h2>
                <div className="space-y-2">
                    {products.map((product, index) => (
                        <div key={index} className="flex gap-4">
                            <div className="w-16 h-16 relative flex-shrink-0">
                                <Image
                                    src={product.image}
                                    alt={product.title}
                                    layout="fill"
                                    objectFit="cover"
                                    className="rounded"
                                />
                            </div>
                            <div>
                                <h3 className="text-sm hover:text-white transition-colors">
                                    {product.title}
                                </h3>
                                <p className="text-gray-400">${product.price.toFixed(2)}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Recent Posts Section */}
            <section>
                <h2 className="text-white text-xl font-bold mb-6">Recent Posts</h2>
                <div className="space-y-4">
                    {posts.map((post, index) => (
                        <div key={index} className="hover:text-white">
                            <h3 className="text-sm mb-1">{post.title}</h3>
                            <p className="text-xs text-gray-500">{post.date}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Tags Section */}
            <section>
                <h2 className="text-white text-xl font-bold mb-6">Tags</h2>
                <div className="flex flex-wrap gap-2">
                    {tags.map((tag, index) => (
                        <Link
                            href={`/tag/${tag}`}
                            key={index}
                            className="text-xs text-gray-400 hover:text-white transition-colors"
                        >
                            #{tag}
                        </Link>
                    ))}
                </div>
            </section>

            {/* Follow Us Section */}
            <section>
                <h2 className="text-white text-xl font-bold mb-6">Follow Us</h2>
                <div className="flex gap-4">
                    <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                        <FaFacebookF size={20} />
                    </Link>
                    <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                        <FaTwitter size={20} />
                    </Link>
                    <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                        <FaInstagram size={20} />
                    </Link>
                    <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                        <FaYoutube size={20} />
                    </Link>
                    <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                        <FaSpotify size={20} />
                    </Link>
                </div>
            </section>
        </div>
    );
};

export default Sidebar;