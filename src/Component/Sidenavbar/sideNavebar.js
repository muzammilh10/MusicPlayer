import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const SideNaveBar = () => {
    const navigate = useNavigate();
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    useEffect(() => {
        // Check if token and user exist in localStorage
        const token = localStorage.getItem('token');
        const user = localStorage.getItem('user');
        if (token && user) {
            setIsAuthenticated(true);
        }
    }, []);

    const handleLogout = () => {
        // Clear localStorage and update state
        localStorage.removeItem('token');
        localStorage.removeItem('user');
        setIsAuthenticated(false);
        navigate('/login');
    };

    return (
        <>
            <img className="h-auto max-w-full p-5 pt-3 ml-6" src='./logo.png' alt="image description" />
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
                    <span>Discover</span>
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
