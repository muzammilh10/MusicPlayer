import React, { useState, useEffect } from "react";





const SideNaveBar = () => {
    return (
        <>

                 <img class="h-auto max-w-full p-5 pt-3 ml-6" src='./logo.png' alt="image description" />
                <ul className='menuStyle'>
                    <li className="flex items-center space-x-2">
                        <img src='./vector.png' className="w-5 h-5" />
                        <span>Home</span>
                    </li>
                    <li className="flex items-center space-x-2">
                        <img src='./vector (2).png' className="w-5 h-5" />
                        <span>Trends</span>
                    </li>
                    <li className="flex items-center space-x-2" onClick={() => { }}>
                        <img src='./vector (1).png' className="w-5 h-5" />
                        <span>Playlist</span>
                    </li>
                    <li className="flex items-center space-x-2">
                        <img src='./vector (3).png' className="w-5 h-5" />
                        <span>Discover</span>
                    </li>
                </ul>

                <ul className='bottom_left_content'>
                    <li className="flex items-center space-x-2">
                        <img src='./Settings.png' className="w-5 h-5" />
                        <span>Setting</span>
                    </li>
                    <li className="flex items-center space-x-2">
                        <img src='./Log Out.png' className="w-5 h-5" />
                        <span>Log Out</span>
                    </li>
                </ul>

        </>
    )
}

export default SideNaveBar 