import React, { useState } from 'react';
import Playlist from '../PlayList/Playlist';
import { useSelector } from 'react-redux';

const DropdownMenu = ({ playlistDetail = {}, setDropdownVisible }) => {
  // const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isSubDropdownOpen, setIsSubDropdownOpen] = useState(false);
  const { isAuthenticated } = useSelector((state) => state.account)


  const toggleSubDropdown = (e) => {
    e.stopPropagation();
    setIsSubDropdownOpen(!isSubDropdownOpen);
  };



  const handlePlaylistClick = async (playlistData) => {
    try {

      const response = await fetch(`http://localhost:5001/api/playlist/${playlistData.uniqueId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(playlistDetail),
      });

      if (response.ok) {
        console.log('Song added to playlist:', playlistData.name);
        setDropdownVisible(false)
      } else {
        console.error('Failed to add song to playlist', await response.json());
      }
    } catch (error) {
      console.error('Error adding song to playlist:', error);
    }
  };


  return (
    <div className="relative inline-block text-left right-48 top-4">
      {(
        <div
          id="multi-dropdown"
          className="z-10 absolute bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700"
        >
          <ul
            className="py-2 text-sm text-gray-700 dark:text-gray-200 order-2"
            aria-labelledby="multiLevelDropdownButton"
          >
            {isAuthenticated &&
              <li>
                <button
                  id="doubleDropdownButton"
                  onClick={toggleSubDropdown}
                  type="button"
                  className="flex items-center justify-between w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white order-2"
                >
                  Add to Playlist
                  <svg
                    className="w-2.5 h-2.5 ms-3 rtl:rotate-180"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 6 10"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="m1 9 4-4-4-4"
                    />
                  </svg>
                </button>

                {/* Sub-dropdown menu */}
                {isSubDropdownOpen && (
                  <div
                    id="doubleDropdown"
                    className="z-10 absolute mr-2 top-0 right-full bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700"
                  >
                    <ul
                      className="py-2 text-sm text-gray-700 dark:text-gray-200"
                      aria-labelledby="doubleDropdownButton"
                    >
                      <Playlist onClick={handlePlaylistClick}
                      />
                    </ul>
                  </div>
                )}
              </li>
            }
          </ul>
        </div>
      )}
    </div>
  );
};

export default DropdownMenu;
