import React, { useEffect, useState } from "react";
import talha from './assets/talha.jpg';

const About = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => setShow(true), 100);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <div id="about" className="min-h-screen bg-[#2f2c3d] text-white px-8 py-20 font-sans">
      <h2 className="text-4xl font-bold text-center text-[#f7c6a3] mb-12">About Me</h2>

      <div
        className={`flex flex-col md:flex-row items-center gap-12 transition-opacity duration-1000 ${
          show ? "opacity-100" : "opacity-0"
        }`}
      >
        <div className="md:w-1/2">
          <img
            src={talha}
            alt="About"
            className="rounded-2xl shadow-lg w-full h-[400px] object-cover"
          />
        </div>

        <div className="md:w-1/2 space-y-6">
          <p className="text-gray-300 text-lg leading-relaxed">
            Hello! I’m <span className="text-[#f7c6a3] font-semibold">Talha</span>, a passionate web developer and creative artist based in Islamabad. I specialize in crafting beautiful and interactive digital experiences through design, photography, and code.
          </p>
          <p className="text-gray-400 text-base">
            With a strong eye for detail and a love for storytelling, I combine design and development to create websites that speak volumes. Whether it's building sleek UI, capturing stunning photos, or writing performant code — I do it all with heart.
          </p>
          <button
            onClick={() => window.location.href = '#contact'}
            className="border border-[#f7c6a3] text-[#f7c6a3] px-6 py-2 hover:bg-[#f7c6a3] hover:text-[#2f2c3d] transition-all"
          >
            Contact Me
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
