import React, { useState } from 'react';
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from 'react-icons/fa';

function ContactForm() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here, e.g., send data to a server
    console.log(formData);
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      message: ''
    });
  };

  return (
    <section className="bg-[#0d0d1f] p-8 rounded-lg flex flex-col md:flex-row md:space-x-12">
      {/* Left Section: Intro Text and Social Links */}
      <div className="md:w-1/2 mb-8 ml-[70px] md:mb-0">
        <h2 className="text-2xl font-bold text-white mb-4">Let's get in touch</h2>
        <p className="text-gray-400 mb-4">
          Feel free to reach out to me on social media or drop a message on my portfolio.
        </p>
        <div className="flex space-x-4 text-gray-400">
         
          <a href="https://x.com/SMysticah" target="_blank" rel="noopener noreferrer" className="hover:text-white">
            <FaTwitter size={24} />
          </a>
          <a href="https://www.linkedin.com/in/impuhwe-stella-b7539a258/" target="_blank" rel="noopener noreferrer" className="hover:text-white">
            <FaLinkedin size={24} />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-white">
            <FaInstagram size={24} />
          </a>
        </div>
      </div>

      {/* Right Section: Contact Form */}
      <form onSubmit={handleSubmit} className="md:w-1/2">
        <div className="grid grid-cols-2 gap-4 mb-4">
          <input
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            placeholder="First name"
            className="bg-gray-700 border border-gray-600  p-3 rounded-md w-full"
          />
          <input
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            placeholder="Last name"
            className="bg-gray-700 border border-gray-600 text-white p-3 rounded-md w-full"
          />
        </div>

        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Email address"
          className="bg-gray-700 border border-gray-600 text-white p-3 rounded-md w-full mb-4"
        />

        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Leave a message"
          className="bg-gray-700 border border-gray-600 text-white p-3 rounded-md w-full h-32 mb-4"
        />

        <button type="submit" className="bg-[#0d0d1f] border border-white  text-white rounded-md px-20 py-3 mt-4">
          Submit
        </button>
      </form>
    </section>
  );
}

export default ContactForm;
