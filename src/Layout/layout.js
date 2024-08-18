import React, { useState, useEffect } from "react";
import SideNaveBar from "../Component/Sidenavbar/sideNavebar";
import Header from "../Component/Header/Header";
import DND from "../Component/DreagAndDrop";
import MusicPlayer from '../musicPlayer/index';


import Routers from "./../Router/router";






const Layout = ({ dataItems, currentIndex, setCurrentIndex }) => {

    const [isPlaying, setIsPlaying] = useState(false);

    // const handleClick = (item) => {
    //     setCurrentIndex(item);
    //     setIsPlaying(true)
    // }

    return (
        <div className="containers">

            <div className="column-1">
                <SideNaveBar />
            </div>

            <div className=" column-60">
                <Header className='headerStyle' />
                <Routers dataItems={dataItems} setIsPlaying={setIsPlaying} setCurrentIndex={setCurrentIndex} currentIndex={currentIndex} />
            </div >
            <div className="column-3">
                <MusicPlayer
                    dataItems={dataItems}
                    currentIndex={currentIndex}
                    isPlaying={isPlaying}
                    setCurrentIndex={setCurrentIndex}
                    setIsPlaying={setIsPlaying}
                />
            </div>

        </div >
    )
}

export default Layout