import React from 'react'
import ContactHero from "@/app/components/Contact/ContactHero";
import ContactUs from "@/app/components/Contact/ContactUs";
import Contact from "@/app/components/AboutComponent/Contact";

const Page = () => {
    return (
        <>
            <ContactHero/>
            <ContactUs/>
            <Contact
                bgColor = "bg-gray-900"
                textColor = "text-gray-200"
            />
        </>
    )
}
export default Page
