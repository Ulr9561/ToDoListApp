import React, { useRef } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import '../styles/Navbar.css';
import { handleLogout } from '../layouts/DefaultLayout';

interface NavbarProps {
  isDashboard: boolean;
}

const Navbar: React.FC<NavbarProps> = ({ isDashboard }) => {
  const navRef = useRef<HTMLElement>(null);

  const showNavbar = () => {
    if (navRef.current) {
      navRef.current.classList.toggle('responsive_nav');
    }
  };

  return (
    <header>
      <div className="logo">
        <a href="#">
          <svg id="logo-35" width="50" height="39" viewBox="0 0 50 39" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M16.4992 2H37.5808L22.0816 24.9729H1L16.4992 2Z" className="ccompli1" fill="#007AFF"></path>
            <path
              d="M17.4224 27.102L11.4192 36H33.5008L49 13.0271H32.7024L23.2064 27.102H17.4224Z"
              className="ccustom"
              fill="#312ECB"
            ></path>
          </svg>
        </a>
      </div>
      <nav ref={navRef}>
        <a href="#">Home</a>
        <a href="#">My Work</a>
        <a href="#">Blog</a>
        <a href="#">About us</a>
        {isDashboard && (
          <a
            className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
            href="#"
            onClick={handleLogout}
          >
            Logout
          </a>
        )}
        <button className="nav-btn nav-close-btn" onClick={showNavbar}>
          <FaTimes />
        </button>
      </nav>
      <button className="nav-btn nav-close-btn" onClick={showNavbar}>
        <FaBars />
      </button>
    </header>
  );
};

export default Navbar;
