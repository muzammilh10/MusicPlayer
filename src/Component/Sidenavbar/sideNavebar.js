import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux'
import { userLogout } from '../../states/actors/userActor'

const SideNaveBar = () => {
    const dispatch = useDispatch()

    const navigate = useNavigate();
    const { isAuthenticated } = useSelector((state) => state.account)


    // Clear localStorage and update state
    const handleLogout = () => {
        localStorage.removeItem('token');
        localStorage.removeItem('user');
        dispatch(userLogout({ user: '' }))
        navigate('/login');
    };

    return (
        <>
            <img className="h-auto max-w-full p-5 pt-5 ml-3 logostyle" src='./logo.png' alt="image description" />
            <ul className='menuStyle'>
                <li className="flex items-center space-x-2 cursor-pointer" onClick={() => navigate('/home')}>
                    <img src='./vector.png' className="w-5 h-5" />
                    <span>Home</span>
                </li>
                <li className="flex items-center space-x-2 cursor-pointer">
                    <img src='./vector (2).png' className="w-5 h-5" />
                    <span>Trends</span>
                </li>
                <li className="flex items-center space-x-2 cursor-pointer" onClick={() => navigate('/playlist')}>
                    <img src='./vector (1).png' className="w-5 h-5" />
                    <span>Playlist</span>
                </li>
                <li className="flex items-center space-x-2 cursor-pointer">
                    <img src='./vector (3).png' className="w-5 h-5" />
                    <span>Create Playlist</span>
                </li>
            </ul>

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
