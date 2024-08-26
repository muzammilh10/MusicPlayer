import React, { useState, useEffect } from "react";
import SideNaveBar from "../Component/Sidenavbar/sideNavebar";
import Header from "../Component/Header/Header";
import DND from "../Component/DreagAndDrop";
import MusicPlayer from '../Component/musicPlayer/index';


import Routers from "./../Router/router";
import { addPlaylist } from "../states/actors/playlistActor";
import { useDispatch, useSelector } from "react-redux";






const Layout = ({ dataItems, currentIndex, setCurrentIndex }) => {

    const [isPlaying, setIsPlaying] = useState(false);

    const dispatch = useDispatch()
    const { user } = useSelector((state) => state.account)

    const playList = async () => {
        const token = JSON.parse(localStorage.getItem("token"))
        if (user) {
            const playlistRes = await fetch(`http://localhost:5001/api/playlist/userPlaylist/${user._id}`);
            const playlists = await playlistRes.json();
            console.log({playlists})
            dispatch(addPlaylist(playlists.data));
        }
    }

    useEffect(() => {
        playList()
    }, [])

    // const handleClick = (item) => {
    //     setCurrentIndex(item);
    //     setIsPlaying(true)
    // }

    return (
        <div className="containers overflow-hidden h-screen">

            <div className="column-1">
                <SideNaveBar />
            </div>


            <div className="column-60 overflow-y-auto h-screen custom-scrollbar">
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