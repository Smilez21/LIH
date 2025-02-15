import React from "react";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import Header from "../components.tsx/header";

const contact = () => {
  return (
    <div className="">
      <Header />
      <div className="min-h-screen bg-gray-100 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-purple-50 to-blue-100">
        <div className="max-w-7xl w-full grid grid-cols-1 gap-8 lg:grid-cols-2">
          {/* Left Section */}
          <div className="bg-white p-8 rounded-lg shadow-md space-y-6">
            <h2 className="text-[#27235E] text-3xl md:text-4xl font-normal mb-4">
              <span className="text-[#27235E] text-3xl md:text-4xl font-bold">
                Get In Touch
                <br />
              </span>
              With Us
            </h2>
            <p className="text-[#48576B] text-base md:text-2xl">
              Questions, comments, or suggestions? Simply fill in the form and
              we’ll be in touch shortly.
            </p>
            <div className="flex flex-col space-y-4">
              <div className="flex items-center space-x-4">
                <FaPhoneAlt className="text-[#48576B]  text-2xl" />
                <a
                  href="tel:07053538137"
                  className="text-[#48576B]  hover:text-indigo-800 transition duration-300"
                >
                  07053538137
                </a>
              </div>
              <div className="flex items-center space-x-4">
                <FaEnvelope className="text-[#48576B]  text-2xl" />
                <a
                  href="mailto:info@langtangihub.org"
                  className="text-[#48576B]  hover:text-indigo-800 transition duration-300"
                >
                  info@langtangihub.org
                </a>
              </div>
              <div className="flex items-center space-x-4">
                <FaMapMarkerAlt className="text-[#48576B] text-2xl" />
                <span className="text-[#48576B]">
                  Zamnyan Central Along, Wase Road, Langtang North
                </span>
              </div>
            </div>
          </div>

          {/* Right Section - Form */}
          <div className="bg-white p-8 rounded-lg shadow-md">
            <form className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700"
                >
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Enter your full name"
                  className="mt-1 block w-full border-indigo-300 focus:border-indigo-500 focus:ring-indigo-500 rounded-md shadow-sm py-2 px-3 text-white focus:outline-none"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700"
                >
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Enter your email address"
                  className="mt-1 block w-full border-indigo-300 focus:border-indigo-500 focus:ring-indigo-500 rounded-md shadow-sm py-2 px-3 text-white focus:outline-none"
                />
              </div>
              <div>
                <label
                  htmlFor="subject"
                  className="block text-sm font-medium text-gray-700"
                >
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  placeholder="Subject of your message"
                  className="mt-1 block w-full border-indigo-300 focus:border-indigo-500 focus:ring-indigo-500 rounded-md shadow-sm py-2 px-3 text-white focus:outline-none"
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  placeholder="Write your message here..."
                  className="mt-1 block w-full border-indigo-300 focus:border-indigo-500 focus:ring-indigo-500 rounded-md shadow-sm py-2 px-3 text-white focus:outline-none"
                ></textarea>
              </div>
              <div>
                <button
                  type="submit"
                  className="w-full bg-[#41AADF] border border-transparent rounded-md py-2 px-4 md:p-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default contact;
