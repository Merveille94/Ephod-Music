import React from 'react'
import AboutHero from "@/app/components/AboutComponent/AboutHero";
import LabelHistory from "@/app/components/AboutComponent/LabelHistory";
import LabelServices from "@/app/components/AboutComponent/LabelServices";
import News from "@/app/components/HomeComponents/News";
import NewAlbum from "@/app/components/AboutComponent/NewAlbum";
import Contact from "@/app/components/AboutComponent/Contact";

const Page = () => {
    return (
        <>
            <AboutHero/>
            <LabelHistory/>
            <LabelServices/>
            <News/>
            <NewAlbum/>
            <Contact/>
        </>
    )
}
export default Page
