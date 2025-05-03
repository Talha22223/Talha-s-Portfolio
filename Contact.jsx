import React, { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your form submission logic here
    setSubmitted(true);
  };

  return (
    <div id="contact" className="min-h-screen bg-[#2f2c3d] text-white p-10 font-sans">
      <h2 className="text-4xl font-bold text-center mb-12 text-[#f7c6a3]">Contact Us</h2>

      <div className="flex flex-col md:flex-row gap-12 items-center">
        {/* Contact Form Section */}
        <div className="md:w-1/2 space-y-6">
          <h3 className="text-2xl font-semibold text-[#f7c6a3]">Get in Touch</h3>
          <p className="text-gray-300">Feel free to reach out. I would love to hear from you!</p>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-semibold text-gray-200">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full p-4 mt-2 bg-[#403c53] rounded-xl border border-gray-500 text-white focus:outline-none"
                placeholder="Your Name"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-semibold text-gray-200">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full p-4 mt-2 bg-[#403c53] rounded-xl border border-gray-500 text-white focus:outline-none"
                placeholder="Your Email"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-semibold text-gray-200">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="w-full p-4 mt-2 bg-[#403c53] rounded-xl border border-gray-500 text-white focus:outline-none"
                placeholder="Your Message"
                rows="5"
              ></textarea>
            </div>
            <button
              type="submit"
              className="bg-[#f7c6a3] text-white px-6 py-2 rounded-full font-semibold hover:bg-[#e8b38b] transition-all shadow-md"
            >
              Send Message
            </button>
          </form>
        </div>

        {/* Contact Info Section */}
        <div className="md:w-1/2 text-center md:text-left">
          <h3 className="text-2xl font-semibold text-[#f7c6a3] mb-4">My Contact Info</h3>
          <p className="text-gray-300 mb-6">You can also reach out to me directly:</p>
          <ul className="space-y-4">
            <li className="text-gray-200">
              <strong>Phone:</strong> +92 3095690628
            </li>
            <li className="text-gray-200">
              <strong>Email:</strong> talhawaris80@gmail.com
            </li>
            <li className="text-gray-200">
              <strong>Location:</strong> Islamabad, Pakistan
            </li>
          </ul>
        </div>
      </div>

      {submitted && (
        <div className="mt-6 text-center text-[#f7c6a3]">
          <p>Thank you for reaching out! I’ll get back to you soon.</p>
        </div>
      )}
    </div>
  );
};

export default Contact;
