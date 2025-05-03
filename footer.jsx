import React from "react";

const Footer = () => {
  return (
    <footer className="bg-[#2f2c3d] text-white py-8">
      <div className="container mx-auto text-center">
        {/* Footer Logo or Brand */}
        <h4 className="text-xl font-light text-[#f7c6a3] mb-4">
          PixelTalha
        </h4>
        
        {/* Footer Links */}
        <div className="flex justify-center space-x-10 mb-6">
          <a href="#home" className="text-[#f7c6a3] hover:text-[#e8b38b] transition-all">Home</a>
          <a href="#services" className="text-[#f7c6a3] hover:text-[#e8b38b] transition-all">Services</a>
          <a href="#about" className="text-[#f7c6a3] hover:text-[#e8b38b] transition-all">About</a>
          <a href="#contact" className="text-[#f7c6a3] hover:text-[#e8b38b] transition-all">Contact</a>
        </div>
        
        {/* Social Media Icons */}
        <div className="flex justify-center space-x-6 mb-6">
          <a href="https://www.facebook.com" className="text-[#f7c6a3] hover:text-[#e8b38b] transition-all" aria-label="Facebook">
            <i className="fab fa-facebook-f"></i>
          </a>
          <a href="https://www.twitter.com" className="text-[#f7c6a3] hover:text-[#e8b38b] transition-all" aria-label="Twitter">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="https://www.instagram.com" className="text-[#f7c6a3] hover:text-[#e8b38b] transition-all" aria-label="Instagram">
            <i className="fab fa-instagram"></i>
          </a>
        </div>
        
        {/* Copyright */}
        <p className="text-sm text-gray-300">
          &copy; {new Date().getFullYear()} PixelTalha. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
