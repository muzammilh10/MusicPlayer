import React, { useState, useEffect } from "react";
import SideNaveBar from "../Component/Sidenavbar/sideNavebar";
import Header from "../Component/Header/Header";
import DND from "../Component/DreagAndDrop";
import MusicPlayer from '../musicPlayer/index';






const Layout = ({ dataItems, currentIndex, setCurrentIndex }) => {

    const [isPlaying, setIsPlaying] = useState(false);

    const handleClick = (item) => {
        setCurrentIndex(item);
        setIsPlaying(true)
    }

    return (
        <div className="containers">

            <div className="column-1">
                <SideNaveBar />
            </div>

            <div className=" column-60">

                <Header className='headerStyle' />



                <section>
                    <div class="container px-6 ">
                        <div class="grid grid-cols-1 mt-8 gap-1 xl:mt-12 xl:gap-12 sm:grid-cols-2 xl:grid-cols-5 lg:grid-cols-4">
                            {dataItems.map((item, index) => (
                                <div
                                    key={index}
                                    className={`w-full cursor-pointer transition-transform transform hover:shadow-lg p-2 hover:bg-[rgb(66,7,7)] hover:rounded-sm ${currentIndex.id === item.id ? "bg-[rgb(66,7,7)] rounded-sm" : ""
                                        }`}
                                    onClick={() => handleClick(item)}
                                >
                                    <div
                                        class="w-full h-auto bg-gray-300 rounded-lg dark:bg-gray-600 transition-colors hover:bg-gray-400 dark:hover:bg-gray-500"
                                    >
                                        <img src={item.image} class="w-full h-auto rounded-md" />
                                    </div>
                                    <p class="w-auto mt-1 text-xs text-white">{item.title}</p>
                                    <p class="w-auto mt-1 text-xs text-white">{item.singer}</p>
                                </div>
                            ))}
                        </div>

                    </div>
                </section>

                <DND
                    dataItems={dataItems}
                    currentIndex={currentIndex}
                    setCurrentIndex={setCurrentIndex}
                    setIsPlaying={setIsPlaying}

                />
            </div>

            <div className="column-3">
                <MusicPlayer
                    dataItems={dataItems}
                    currentIndex={currentIndex}
                    isPlaying={isPlaying}
                    setCurrentIndex={setCurrentIndex}
                    setIsPlaying={setIsPlaying}
                />
            </div>

        </div>
    )
}

export default Layout