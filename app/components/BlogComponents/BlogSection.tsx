import React from 'react'
import Upcoming from "@/app/components/HomeComponents/Upcoming";
import BlogPost from "@/app/components/BlogComponents/BlogPost";
import {BsFillPlayFill} from "react-icons/bs";
import Image from "next/image";
import Sidebar from "@/app/components/BlogComponents/Sidebar";

const BlogSection = () => {
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
        <section className="min-h-screen bg-gray-900 w-full pt-4">
            <div className="container mx-auto p-4 w-full">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8 p-4">
                    <div className="col-span-2 w-full">
                        <BlogPost title="I'm Just Super Saiyan"
                                  paragraphs="Auctor magnis, ac lacus augue nunc, pellentesque ac dictumst dapibus! Rhoncus purus, massa
                                  nunc integer placerat eros ac parturient dis placerat tempor, mattis ac tortor nascetur. Cum nec
                                  purus natoque rhoncus a. Adipiscing amet vut."
                                  author="REGGIE LEDOUX"
                                  category="News"
                                  likes={28}
                                  date="FEBRUARY 10, 2017"
                                  views={1000}
                                  comments={47}
                                  image="/images/blog1.png"
                        />
                    </div>
                    <div><Upcoming textColor="text-gray-200"/></div>
                    {/*image 2*/}
                    <div className="col-span-2 w-full">
                        <BlogPost title="Artwork Revealed"
                                  paragraphs="Auctor magnis, ac lacus augue nunc, pellentesque ac dictumst dapibus! Rhoncus purus, massa
                                  nunc integer placerat eros ac parturient dis placerat tempor, mattis ac tortor nascetur. Cum nec
                                  purus natoque rhoncus a. Adipiscing amet vut."
                                  author="REGGIE LEDOUX"
                                  category="News"
                                  likes={28}
                                  date="FEBRUARY 10, 2017"
                                  views={1000}
                                  comments={47}
                                  image="/images/blog2.png"
                        />
                    </div>
                    {/* Track List Side */}
                    <div className="bg-zinc-900 rounded-lg p-6">
                        <Image src="/images/tr1.png" alt="pic" width={500} height={500} className="object-cover"/>
                        {tracks.map((track, index) => (
                            <div key={index} className="flex items-center justify-between py-4 border-b border-zinc-800 group hover:bg-zinc-800 px-4 rounded-lg transition-colors">
                                <div className="flex items-center space-x-4">
                                    <button className="opacity-0 group-hover:opacity-50 transition-opacity">
                                        <BsFillPlayFill className="text-2xl text-white" />
                                    </button>
                                    <span className="text-gray-300">{track.title}</span>
                                </div>
                                <span className="text-gray-500">{track.duration}</span>
                            </div>
                        ))}
                    </div>
                    {/*image3*/}
                    <div className="col-span-2 w-full">
                        <BlogPost title="Self-hosted Playlist"
                                  paragraphs="Auctor magnis, ac lacus augue nunc, pellentesque ac dictumst dapibus! Rhoncus purus, massa
                                  nunc integer placerat eros ac parturient dis placerat tempor, mattis ac tortor nascetur. Cum nec
                                  purus natoque rhoncus a. Adipiscing amet vut."
                                  author="REGGIE LEDOUX"
                                  category="News"
                                  likes={28}
                                  date="FEBRUARY 10, 2017"
                                  views={1000}
                                  comments={47}
                                  image="/images/blog3.png"
                        />
                    </div>
                    <div><Sidebar/></div>

                    {/*image4*/}
                    <div className="col-span-2 w-full">
                        <BlogPost title="Hollywood Undead"
                                  paragraphs="Auctor magnis, ac lacus augue nunc, pellentesque ac dictumst dapibus! Rhoncus purus, massa
                                  nunc integer placerat eros ac parturient dis placerat tempor, mattis ac tortor nascetur. Cum nec
                                  purus natoque rhoncus a. Adipiscing amet vut."
                                  author="REGGIE LEDOUX"
                                  category="News"
                                  likes={28}
                                  date="FEBRUARY 10, 2017"
                                  views={1000}
                                  comments={47}
                                  image="/images/blog4.png"
                        />
                    </div>

                    {/*image5*/}
                    <div className="col-span-2 w-full">
                        <BlogPost title="Black coffe in bed"
                                  paragraphs="Auctor magnis, ac lacus augue nunc, pellentesque ac dictumst dapibus! Rhoncus purus, massa
                                  nunc integer placerat eros ac parturient dis placerat tempor, mattis ac tortor nascetur. Cum nec
                                  purus natoque rhoncus a. Adipiscing amet vut."
                                  author="REGGIE LEDOUX"
                                  category="News"
                                  likes={28}
                                  date="FEBRUARY 10, 2017"
                                  views={1000}
                                  comments={47}
                                  image="/images/blog5.png"
                        />
                    </div>
                </div>
            </div>

        </section>
    )
}
export default BlogSection
