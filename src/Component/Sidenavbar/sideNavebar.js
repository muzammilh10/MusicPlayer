import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux'
import { userLogout } from '../../states/actors/userActor'
import ReactDOM from 'react-dom';
import { addPlaylist } from './../../states/actors/playlistActor';
import Playlist from "../PlayList/Playlist";


const Popup = ({ isOpen, onClose, onSubmit, newPlaylistName, setNewPlaylistName }) => {
    if (!isOpen) return null;

    return ReactDOM.createPortal(
        <div className="popup-overlay">
            <div className="popup-content">
                <h3>Create a New Playlist</h3>
                <input
                    type="text"
                    value={newPlaylistName}
                    onChange={(e) => setNewPlaylistName(e.target.value)}
                    placeholder="Enter playlist name"
                />
                <button onClick={onSubmit}>Create</button>
                <button onClick={onClose}>Cancel</button>
            </div>
        </div>,
        document.querySelector('body') // Ensure this element exists in your HTML
    );
};




const SideNaveBar = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate();
    const token = localStorage.getItem('token')
    const { isAuthenticated } = useSelector((state) => state.account)

    const [playlists, setPlaylists] = useState([]);
    const [isPopupOpen, setIsPopupOpen] = useState(false);
    const [newPlaylistName, setNewPlaylistName] = useState("");
    // const playlists = useSelector(state => state.playlist.playlists);

    const handleAddPlaylist = (playlist) => {
        dispatch(addPlaylist(playlist));
    };

    // Handle logout
    const handleLogout = () => {
        localStorage.removeItem('token');
        localStorage.removeItem('user');
        dispatch(userLogout({ user: '' }))
        navigate('/login');
    };

    // Handle creating a new playlist

    const handleCreatePlaylist = async () => {
        if (newPlaylistName.trim()) {
            try {
                const response = await fetch(`http://localhost:5001/api/user/playlists`, {
                    method: 'POST',
                    body: JSON.stringify({ name: newPlaylistName }), // Wrap newPlaylistName in an object
                    headers: {
                        'Content-Type': 'application/json',
                        Authorization: `Bearer ${JSON.parse(token)}`,
                    },
                });

                if (response.ok) { // response.ok is true if the status code is between 200-299
                    const createdPlaylist = await response.json(); // Parse the JSON body
                    setPlaylists([...playlists, createdPlaylist.name]); // Update the state with the new playlist
                    handleAddPlaylist(createdPlaylist); // Update the Redux store with the new playlist
                    setNewPlaylistName(''); // Clear the input field
                    setIsPopupOpen(false); // Close the popup
                } else {
                    const errorData = await response.json();
                    console.error('Failed to create playlist:', errorData.message);
                }
            } catch (error) {
                console.error('Error creating playlist:', error);
            }
        } else {
            alert('Playlist name cannot be empty.');
        }
    };


    return (
        <>
            <img className="h-auto max-w-full p-4 pt-5 logostyle" src='./Logo.png' alt="logo" />
            <ul className='menuStyle'>
                <li className="flex items-center space-x-2 cursor-pointer" onClick={() => navigate('/home')}>
                    <img src='./vector.png' className="w-5 h-5" />
                    <span>Home</span>
                </li>
                {/* <li className="flex items-center space-x-2 cursor-pointer">
                    <img src='./vector (2).png' className="w-5 h-5" />
                    <span>Trends</span>
                </li> */}
                <li className="flex items-center space-x-2 cursor-pointer" onClick={() => navigate('/playlist')}>
                    <img src='./vector (1).png' className="w-5 h-5" />
                    <span>Playlist</span>
                </li>
                <li className="flex items-center space-x-2 cursor-pointer" onClick={() => setIsPopupOpen(true)}>
                    <img src='./vector (3).png' className="w-5 h-5" />
                    <span>Create Playlist</span>
                </li>
            </ul>

            {/* Popup component using createPortal */}
            <Popup
                isOpen={isPopupOpen}
                onClose={() => setIsPopupOpen(false)}
                onSubmit={handleCreatePlaylist}
                newPlaylistName={newPlaylistName}
                setNewPlaylistName={setNewPlaylistName}
            />

            {/* Display the list of playlists */}
            <ul className='playlist-list'>
                {playlists.map((playlist, index) => (
                    <li key={index} className="flex items-center space-x-2 cursor-pointer">
                        <img src='./vector (1).png' className="w-5 h-5" />
                        <span>{playlist}</span>
                    </li>
                ))}
            </ul>
            
            <Playlist />

            <ul className='bottom_left_content'>
                {isAuthenticated ? (
                    <li className="flex items-center space-x-2 cursor-pointer" onClick={handleLogout}>
                        <img src='./Log Out.png' className="w-5 h-5" />
                        <span>Log Out</span>
                    </li>
                ) : (
                    <>
                        <li className="flex items-center space-x-2 cursor-pointer" onClick={() => navigate('/signup')}>
                            <img src='./Log Out.png' className="w-5 h-5" />
                            <span>SignUp</span>
                        </li>
                        <li className="flex items-center space-x-2 cursor-pointer" onClick={() => navigate('/login')}>
                            <img src='./Log Out.png' className="w-5 h-5" />
                            <span>Login</span>
                        </li>
                    </>
                )}
            </ul>


        </>
    );
};

export default SideNaveBar;
