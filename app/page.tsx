import React from 'react'
import Discography from "@/app/components/HomeComponents/Discography";
import HeroHome from "@/app/components/HomeComponents/HeroHome";
import Story from "@/app/components/HomeComponents/Story";
import Tour from "@/app/components/HomeComponents/Tour";
import News from "@/app/components/HomeComponents/News";

const Page = () => {
    return (
        <div className="min-h-screen">
            <HeroHome/>
            <Discography/>
            <Story/>
            <Tour/>
            <News/>
        </div>
    )
}
export default Page
