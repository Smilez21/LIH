import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";
import { MdOutlineSend } from "react-icons/md";

const services = [
  "About Us",
  "Programs",
  "Contact Us",
  "Volunteer Opportunities",
];
const contacts = [
  "General Inquiries",
  "Donation Queries",
  "Volunteer Coordination",
  "Media Inquiries",
];

const Footer = () => {
  return (
    <footer className=" bg-gray-900 text-white">
      {/* Main Footer Content */}
      <div className="md:py-24 py-12 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-10">
          {/* Brand Section */}
          <div className="space-y-6 text-center md:text-left">
            <h1 className="mb-4 cursor-pointer">
              <img
                src="logo2.png"
                alt="Innovate Logo"
                className="h-12 md:h-16"
              />
            </h1>
            <ul className="space-y-3">
              <li className="text-lg">
                Zamnyan Central Along, Wase Road,
                <br /> Langtang North
              </li>
              <li className="flex items-center space-x-2 text-lg">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 3a2 2 0 012 2v10a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h10zm0 0V5l3.5 3.5m0 0L15 12m3.5-3.5L15 5m3.5 3.5l-3.5 3.5"
                  />
                </svg>
                <p>07053538137 </p>
              </li>
              <li className="flex items-center space-x-2 text-lg">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 3c1.306 0 2.31.663 2.88 1.579C20.903 5.494 21 6.702 21 8v11c0 1.104-.896 2-2 2H5c-1.104 0-2-.896-2-2V8c0-1.298.097-2.506.12-2.421C4.69 3.663 5.694 3 7 3h10zM5 5c-.668 0-1 .332-1 1v11c0 .668.332 1 1 1h12c.668 0 1-.332 1-1V6c0-.668-.332-1-1-1H5z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 14s1 2.5 3 2.5s3-2.5 3-2.5"
                  />
                </svg>
                <a href="#" className="hover:underline">
                  info@langtangihub.org
                </a>
              </li>
            </ul>
            {/* Social Media Icons */}
            <div className="flex justify-center md:justify-start space-x-4 mt-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-blue-400 transition duration-300"
              >
                <FaFacebookF size={20} />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-blue-400 transition duration-300"
              >
                <FaTwitter size={20} />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-pink-500 transition duration-300"
              >
                <FaInstagram size={20} />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-blue-600 transition duration-300"
              >
                <FaLinkedinIn size={20} />
              </a>
            </div>
          </div>
          {/* Services Section */}
          <div>
            <h2 className="text-xl font-semibold mb-4">Our Links</h2>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index}>
                  <a href="#" className="hover:underline text-white">
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          {/* Contacts Section */}
          <div>
            <h2 className="text-xl font-semibold mb-4">Inquires</h2>
            <ul className="space-y-3">
              {contacts.map((contact, index) => (
                <li key={index}>
                  <a href="#" className="hover:underline text-white">
                    {contact}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          {/* Customer Care Section */}
          <div>
            <h2 className="text-xl font-semibold mb-4">Other Links</h2>
            <ul className="space-y-3">
              {contacts.map((contact, index) => (
                <li key={index}>
                  <a href="#" className="hover:underline text-white">
                    {contact}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          {/* Subscription Section */}
          <div>
            <h2 className="text-xl font-semibold mb-4">Stay Updated</h2>
            <p>Subscribe to our newsletter for updates.</p>
            <form className="flex items-center mt-6">
              {/* Input Field */}
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full p-4 border border-gray-600 rounded-l-md focus:outline-none focus:ring-2 focus:ring-primary bg-gray-800 text-white placeholder-gray-400 transition duration-300"
              />
              {/* Send Button with Icon and Border */}
              <button
                type="submit"
                className="flex items-center justify-center w-12 h-12 rounded-r-md bg-gradient-to-r from-primary to-secondary hover:from-secondary hover:to-primary shadow-md transition duration-300"
                aria-label="Subscribe to our newsletter"
              >
                <div className="flex items-center justify-center w-8 h-8 rounded-full border-2 border-white">
                  <MdOutlineSend size={20} className="stroke-white" />
                </div>
              </button>
            </form>
          </div>
        </div>
      </div>
      {/* Rights Reserved and Links Section */}
      <div className="bg-secondary bg-gray-800 text-white py-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          {/* Copyright Text */}
          <p className="text-center text-sm text-white">
            © {new Date().getFullYear()} Langtang Innovation Hub. All Rights
            Reserved.
          </p>
          {/* Links Section */}
          <div className="flex space-x-6">
            <a href="#" className="hover:underline text-sm text-white">
              Terms & Conditions
            </a>
            <a href="#" className="hover:underline text-sm text-white">
              Privacy Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
