import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';



// const dataItems = [
//     {
//         id: 1,
//         path: './audio1.mp3',
//         title: "Orange Daisy",
//         singer: 'A.R Rahaman ',
//         image:
//             "https://images.pexels.com/photos/130636/pexels-photo-130636.jpeg?auto=compress&cs=tinysrgb&w=640&h=380&dpr=1",
//         duration: '00:00'
//     },
//     {
//         id: 2,
//         path: './audio2.mp3',
//         singer: 'A.R Rahaman ',
//         title: "Sunflower",
//         image:
//             "https://images.pexels.com/photos/1021947/pexels-photo-1021947.jpeg?auto=compress&cs=tinysrgb&w=640&h=380&dpr=1",
//         duration: '00:00'
//     },
//     {
//         id: 3,
//         path: './audio3.mp3',
//         title: "Purple - YellowFlower",
//         singer: 'A.R Rahaman ',
//         image:
//             "https://images.pexels.com/photos/670741/pexels-photo-670741.jpeg?auto=compress&cs=tinysrgb&w=640&h=380&dpr=1",
//         duration: '00:00'
//     },
//     {
//         id: 4,
//         path: './nightChanges.mp3',
//         title: "White Petaled Flowers",
//         singer: 'A.R Rahaman ',
//         image:
//             "https://images.pexels.com/photos/54388/white-flowers-delicate-flowers-three-flowers-54388.jpeg?auto=compress&cs=tinysrgb&w=640&h=380&dpr=1",
//         duration: '00:00'
//     },
//     {
//         id: 5,
//         path: './audio5.mp3',
//         singer: 'A.R Rahaman ',
//         title: "A Purple Flower",
//         image:
//             "https://images.pexels.com/photos/13087944/pexels-photo-13087944.jpeg?auto=compress&cs=tinysrgb&w=640&h=380&dpr=1",
//         duration: '00:00'
//     },
//     {
//         id: 6,
//         path: './audio1.mp3',
//         title: "Purple Flower",
//         singer: 'A.R Rahaman ',

//         image:
//             "https://images.pexels.com/photos/14987632/pexels-photo-14987632.jpeg?auto=compress&cs=tinysrgb&w=640&h=380&dpr=1",
//         duration: '00:00'
//     },
//     {
//         id: 7,
//         path: './audio1.mp3',
//         title: "Orange Daisy",
//         singer: 'A.R Rahaman ',
//         image:
//             "https://images.pexels.com/photos/130636/pexels-photo-130636.jpeg?auto=compress&cs=tinysrgb&w=640&h=380&dpr=1",
//         duration: '00:00'
//     },
//     {
//         id: 8,
//         path: './audio2.mp3',
//         singer: 'A.R Rahaman ',
//         title: "Sunflower",
//         image:
//             "https://images.pexels.com/photos/1021947/pexels-photo-1021947.jpeg?auto=compress&cs=tinysrgb&w=640&h=380&dpr=1",
//         duration: '00:00'
//     },
//     {
//         id: 9,
//         path: './audio3.mp3',
//         singer: 'A.R Rahaman ',
//         title: "Purple - YellowFlower",
//         image:
//             "https://images.pexels.com/photos/670741/pexels-photo-670741.jpeg?auto=compress&cs=tinysrgb&w=640&h=380&dpr=1",
//         duration: '00:00'
//     },
//     {
//         id: 10,
//         path: './audio1.mp3',
//         title: "Orange Daisy",
//         singer: 'A.R Rahaman ',
//         image:
//             "https://images.pexels.com/photos/130636/pexels-photo-130636.jpeg?auto=compress&cs=tinysrgb&w=640&h=380&dpr=1",
//         duration: '00:00'
//     },
//     {
//         id: 11,
//         path: './audio2.mp3',
//         singer: 'A.R Rahaman ',
//         title: "Sunflower",
//         image:
//             "https://images.pexels.com/photos/1021947/pexels-photo-1021947.jpeg?auto=compress&cs=tinysrgb&w=640&h=380&dpr=1",
//         duration: '00:00'
//     },
//     {
//         id: 12,
//         path: './audio3.mp3',
//         title: "Purple - YellowFlower",
//         singer: 'A.R Rahaman ',
//         image:
//             "https://images.pexels.com/photos/670741/pexels-photo-670741.jpeg?auto=compress&cs=tinysrgb&w=640&h=380&dpr=1",
//         duration: '00:00'
//     },
// ];

const Playlist = ({ onClick }) => {

    const navigate = useNavigate();

    const { user, isAuthenticated } = useSelector((state) => state.account)
    const { playlists } = user

    console.log({PluginArray:playlists})

    return (

        <div className="container min-h-[50vh] p-4" style={{
            position: 'relative',
            minHeight: '50vh',
            bottom: '13%',
        }}>{
                isAuthenticated &&
                <>
                    <h1 className="text-xl font-bold text-center mb-1 rounded-sm bg-gray-900">Your Playlist</h1>
                    <div className=" shadow-lg h-64 overflow-y-auto custom-scrollbar custom-scrollbar1">
                        <ul>
                            {playlists?.map((playlist, index) => (
                                <li
                                    onClick={onClick ? () => onClick(playlist) : () => { navigate(`/playlist/${playlist._id}`) }}
                                    key={index}
                                    className="flex justify-between items-center p-2 mb-2 bg-red rounded-lg shadow hover:bg-gray-900"
                                >
                                    <div className="truncate">
                                        <p className="text-sm font-semibold truncate">{playlist.name}</p>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                </>}
        </div>


    );
};

export default Playlist;
