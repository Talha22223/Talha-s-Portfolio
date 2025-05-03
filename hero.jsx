import React from 'react';
import talha from './assets/talha.jpg';

const Hero = () => {
  return (
    <div className="min-h-screen bg-[#2f2c3d] text-white font-sans px-8 py-16">
      <div className="flex flex-col md:flex-row gap-12 items-center">
        {/* Left Info Section */}
        <div className="md:w-1/3 space-y-6 -mt-20 md:mt-0">
          <h1 className="text-5xl font-extrabold text-[#f7c6a3] tracking-wide animate-fade-in-down">
            Talha
          </h1>
          <p className="text-gray-300 leading-relaxed text-lg animate-fade-in">
            Architecture photography is where <span className="text-[#f7c6a3] font-semibold">art meets science</span>.
            I play with contrasts, light, and details — capturing the soul of structures.
            <br />
            <span className="italic text-sm block mt-2">📍 Based in Islamabad, Pakistan</span>
          </p>
          <button className="bg-[#f7c6a3] text-white px-6 py-2 rounded-full font-semibold hover:bg-[#e8b38b] transition-all shadow-md">
            Follow Me
          </button>
        </div>

        {/* Right Image Grid */}
        <div className="md:w-2/3 grid grid-cols-2 gap-4 animate-fade-in">
          {/* Main Photo */}
          <div className="col-span-2 relative rounded-2xl overflow-hidden group">
            <img
              src="https://t3.ftcdn.net/jpg/02/74/50/28/240_F_274502877_n3BQGoAGPRqsjgKIU4lB6wns0mBuPTL3.jpg"
              alt="Islamabad"
              className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute bottom-4 left-4 text-white">
              <h2 className="text-2xl font-bold">ISLAMABAD</h2>
              <p className="text-sm text-gray-200">Capital of Pakistan</p>
            </div>
          </div>

          {/* Supporting Images */}
          <img
            src="https://t4.ftcdn.net/jpg/01/27/43/11/240_F_127431151_diRfdO9C5yK3Clbu9mlSsdrIrJjCzcgT.jpg"
            alt="City 1"
            className="w-full h-48 object-cover rounded-xl shadow-lg hover:scale-105 transition-transform duration-300"
          />
          <img
            src="https://t3.ftcdn.net/jpg/09/02/88/26/240_F_902882699_2WpddfU7aIOLEoFQ6K62hw6AgANkUsXp.jpg"
            alt="City 2"
            className="w-full h-48 object-cover rounded-xl shadow-lg hover:scale-105 transition-transform duration-300"
          />
          <img
            src="https://t3.ftcdn.net/jpg/01/02/63/40/240_F_102634067_Yqjt41Imjs2fltJNIUvejp3N5cQCTsir.jpg"
            alt="Landscape"
            className="col-span-2 w-full h-48 object-cover rounded-xl shadow-lg hover:scale-105 transition-transform duration-300"
          />

          {/* Gradient Chart Bar */}
          <div className="col-span-2 mt-4">
            <div className="h-16 w-full bg-gradient-to-r from-indigo-600 via-pink-500 to-orange-400 opacity-80 rounded-full shadow-inner animate-pulse" />
            <div className="flex justify-between text-sm text-gray-300 mt-2">
              <span className="text-blue-300">● Likes</span>
              <span className="text-pink-300">● Affection</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
