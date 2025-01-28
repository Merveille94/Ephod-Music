import Image from 'next/image';
import { FaRegComment, FaRegClock, FaRegHeart } from 'react-icons/fa';

interface BlogPostProps {
    title: string;
    author: string;
    category: string;
    paragraphs: string,
    likes: number;
    views: number;
    comments: number;
    date: string;
    image: string;
}

const BlogPost= ({
                                         title,
                                         author,
                                         category,
                                         likes,
                                         views,
                                         comments,
                                         paragraphs,
                                         date,
                                         image
                                     }: BlogPostProps) => {
    return (
        <div className="bg-gray-900 rounded-lg overflow-hidden">
            <div className="relative h-[400px] w-full">
                <Image
                    src={image}
                    alt={title}
                    layout="fill"
                    objectFit="cover"
                    className="transition-transform duration-300 hover:scale-105 rounded-lg bg-contain bg-center object-cover"
                />
            </div>

            <div className="p-4 ">
                <h2 className="text-4xl font-bold text-white mb-4">{title}</h2>

                <p className="my-4 text-gray-400">{paragraphs}</p>

                <div className="text-gray-400 text-sm flex items-center flex-wrap mt-2 border-t-2 border-gray-400 p-2">
                    <div className="flex items-center flex-wrap gap-2 md:gap-4 lowercase mb-3 md:mb-0 space-x-2">
                        <div className="flex items-center gap-2">
                            <FaRegHeart className="text-gray-500" />
                            <span>{likes} LIKES</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <FaRegClock className="text-gray-500" />
                            <span>{views} VIEWS</span>
                        </div>
                        <div className="flex items-center gap-2 pr-2">
                            <FaRegComment className="text-gray-500" />
                            <span>{comments} COMMENTS </span>
                        </div>
                    </div>

                    <div className="flex items-center gap-4">
                        <span className="lowercase"> by {author}</span>
                        <span>In {category} on {date}</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BlogPost;