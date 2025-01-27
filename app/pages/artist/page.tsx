import React from 'react'
import HeroArtist from "@/app/components/ArtistComponents/HeroArtist";
import MusicBand from "@/app/components/ArtistComponents/MusicBand";
import ArtistList from "@/app/components/ArtistComponents/ArtistLists";

const Page = () => {
    return (
        <>
            <HeroArtist/>
            <MusicBand/>
            <ArtistList/>
        </>
    )
}
export default Page
