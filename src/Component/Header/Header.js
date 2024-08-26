import { useState } from 'react';
import './header.css';


const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);


  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };


  const handleInputChange = (event) => {
    // Handle search input change here
  };

  return (
    <header className='flex font-sans min-h-[60px] px-10 py-3 relative tracking-wide z-50'>
      <div className='flex flex-wrap items-center max-lg:gap-y-6 max-sm:gap-x-4'>
        <div id="collapseMenu"
          className={`max-lg:hidden lg:!flex lg:items-center ${isMenuOpen ? 'block' : 'hidden'}`}
          style={{ display: isMenuOpen ? 'block' : 'none' }}>
          <button id="toggleClose" onClick={toggleMenu} className='lg:hidden sm-hidden fixed top-2 right-4 z-[100] rounded-full bg-white p-3'>
            <svg xmlns="http://www.w3.org/2000/svg" className="w-4 fill-black" viewBox="0 0 320.591 320.591">
              <path
                d="M30.391 318.583a30.37 30.37 0 0 1-21.56-7.288c-11.774-11.844-11.774-30.973 0-42.817L266.643 10.665c12.246-11.459 31.462-10.822 42.921 1.424 10.362 11.074 10.966 28.095 1.414 39.875L51.647 311.295a30.366 30.366 0 0 1-21.256 7.288z"
                data-original="#000000"></path>
              <path
                d="M287.9 318.583a30.37 30.37 0 0 1-21.257-8.806L8.83 51.963C-2.078 39.225-.595 20.055 12.143 9.146c11.369-9.736 28.136-9.736 39.504 0l259.331 257.813c12.243 11.462 12.876 30.679 1.414 42.922-.456.487-.927.958-1.414 1.414a30.368 30.368 0 0 1-23.078 7.288z"
                data-original="#000000"></path>
            </svg>
          </button>
          <ul className='lg:flex lg:gap-x-10 lg:absolute lg:left-1/2 lg:-translate-x-1/2 max-lg:space-y-3 max-lg:fixed max-lg:bg-[linear-gradient(to_bottom,rgb(45,2,2),rgb(0,0,0))] max-lg:w-1/2 max-lg:min-w-[300px] max-lg:top-0 max-lg:left-0 max-lg:px-10 max-lg:py-4 max-lg:h-full max-lg:shadow-md max-lg:overflow-auto z-50 lg:hidden sm:hidden'>
            <li className='max-lg:border-b max-lg:py-3'><a href='javascript:void(0)' className='hover:text-[#007bff] text-white font-bold text-[15px] block'  >Home</a></li>
            <li className='max-lg:border-b max-lg:py-3'><a href='javascript:void(0)' className='hover:text-[#007bff] text-white font-bold text-[15px] block'>Song List</a></li>
            <li className='max-lg:border-b max-lg:py-3'><a href='javascript:void(0)' className='hover:text-[#007bff] text-white font-bold text-[15px] block'>Create Playlist</a></li>
          </ul>
        </div>

        <div className='flex items-center ml-auto space-x-8'>
          <button id="toggleOpen" onClick={toggleMenu} className='lg:hidden'>
            <svg className="w-7 h-7" fill="#000" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path>
            </svg>
          </button>
        </div>
      </div>

      <div className="bg-gray-100 border border-transparent focus-within:border-blue-500 focus-within:bg-transparent flex px-6 rounded-full h-10 lg:w-2/4 ml-auto">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 192.904 192.904" width="16px" className="fill-gray-600 mr-3 rotate-90">
          <path d="m190.707 180.101-47.078-47.077c11.702-14.072 18.752-32.142 18.752-51.831C162.381 36.423 125.959 0 81.191 0 36.422 0 0 36.423 0 81.193c0 44.767 36.422 81.187 81.191 81.187 19.688 0 37.759-7.049 51.831-18.751l47.079 47.078a7.474 7.474 0 0 0 5.303 2.197 7.498 7.498 0 0 0 5.303-12.803zM15 81.193C15 44.694 44.693 15 81.191 15c36.497 0 66.189 29.694 66.189 66.193 0 36.496-29.692 66.187-66.189 66.187C44.693 147.38 15 117.689 15 81.193z"></path>
        </svg>
        <input type='text' placeholder='Search...' onChange={handleInputChange} className="w-full outline-none bg-transparent text-black font-semibold text-[15px]" />
      </div>
    </header>
  );
};

export default Header;
