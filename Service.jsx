import React, { useEffect, useState } from "react";
import { Camera, Brush, Code } from "lucide-react";

const Services = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => setShow(true), 100);
    return () => clearTimeout(timeout);
  }, []);

  const services = [
    {
      icon: <Camera size={40} className="text-pink-400" />,
      title: "Photography",
      desc: "Capture architecture with emotion and elegance using artistic lighting and angles.",
    },
    {
      icon: <Brush size={40} className="text-blue-400" />,
      title: "Design",
      desc: "Crafting clean, minimal, and aesthetic UI designs tailored for photographers.",
    },
    {
      icon: <Code size={40} className="text-green-400" />,
      title: "Development",
      desc: "Building fast, animated, and responsive websites with React and Tailwind.",
    },
    {
      icon: <Camera size={40} className="text-pink-400" />,
      title: "Video Editing",
      desc: "Polished, cinematic video cuts with effects, transitions, and sound design.",
    },
    {
      icon: <Code size={40} className="text-green-400" />,
      title: "Frontend Development",
      desc: "Building fast and interactive user interfaces using React, Tailwind, and modern tools.",
    },
    {
      icon: <Brush size={40} className="text-blue-400" />,
      title: "Social Media Management",
      desc: "Crafting engaging content and managing your brand's presence on platforms.",
    },
    {
      icon: <Code size={40} className="text-green-400" />,
      title: "Portfolio Website Development",
      desc: "Building elegant and functional personal portfolios for creatives and developers.",
    },
    {
      icon: <Brush size={40} className="text-blue-400" />,
      title: "SEO Optimization",
      desc: "Improving site visibility and ranking through performance tuning and SEO best practices.",
    },
    {
      icon: <Code size={40} className="text-green-400" />,
      title: "UI Animation",
      desc: "Bringing designs to life with smooth transitions and micro-interactions.",
    },
  ];

  return (
    <div id="services" className="min-h-screen bg-[#2f2c3d] text-white p-10 font-sans">
      <h2 className="text-4xl font-bold text-center mb-12 text-[#f7c6a3]">Our Services</h2>
      <div
        className={`grid md:grid-cols-3 sm:grid-cols-2 gap-10 transition-opacity duration-1000 ${
          show ? "opacity-100" : "opacity-0"
        }`}
      >
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-[#403c53] rounded-xl p-6 hover:scale-105 hover:shadow-lg transition-transform duration-500 text-center"
          >
            <div className="mb-4 flex justify-center">{service.icon}</div>
            <h3 className="text-xl font-semibold text-[#f7c6a3] mb-2">{service.title}</h3>
            <p className="text-gray-300">{service.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
