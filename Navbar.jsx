import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <div className="h-18 w-full flex justify-between bg-[#2f2c3d] px-4 sm:px-10">
      <div className="flex items-center">
        <h4 className="font-light text-[#f7c6a3] text-2xl text-shadow-orange-50 tracking-wide">
          PixelTalha
        </h4>
      </div>

      <div className="hidden md:flex flex-grow justify-center items-center space-x-10 mt-6">
        <ul className="flex space-x-10">
          <li><a href="#" className="text-black no-underline">Home</a></li>
          <li><a href="#services" className="text-black no-underline">Services</a></li>
          <li><a href="#about" className="text-black no-underline">About</a></li>
          <li><a href="#contact" className="text-black no-underline">Contact Us</a></li>
        </ul>
      </div>

      <div className="hidden md:flex items-center">
        <i className="fa-solid fa-bell font-light text-[#f7c6a3] text-1xl"></i>
      </div>

      {/* Hamburger Icon for Mobile */}
      <div className="md:hidden flex items-center" onClick={toggleMenu}>
        {isOpen ? <X size={30} color="#f7c6a3" /> : <Menu size={30} color="#f7c6a3" />}
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden absolute top-18 left-0 w-full bg-[#2f2c3d] ${isOpen ? 'block' : 'hidden'}`}>
        <ul className="space-y-6 p-6 text-center">
          <li><a href="#" className="text-black no-underline block py-2">Home</a></li>
          <li><a href="#services" className="text-black no-underline block py-2">Services</a></li>
          <li><a href="#about" className="text-black no-underline block py-2">About</a></li>
          <li><a href="#contact" className="text-black no-underline block py-2">Contact Us</a></li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
