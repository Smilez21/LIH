import React from "react";
import Header from "../components.tsx/header";
import Footer from "../components.tsx/footer";

const Program = () => {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Header Section */}
      <Header />
      <section className="py-16 bg-[#41AADF] text-white">
        <div className="container mx-auto px-4 lg:px-8 max-w-5xl">
          <div className="text-center">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Our Programs
            </h2>

            <a
              href="/contact"
              className="inline-block bg-white text-[#41AADF] font-medium py-3 px-8 rounded-lg shadow-md hover:bg-indigo-500 hover:text-white transition duration-300"
            >
              Contact Us
            </a>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main className="flex-1 bg-gray-100 py-12">
        <div className="container mx-auto px-4 lg:px-8 max-w-7xl">

          {/* Program Cards */}
          <div className="space-y-12">
            {/* Card 1: Image Left, Text Right */}
            <div className="flex flex-col md:flex-row items-center justify-between">
              <div className="md:w-1/2 mr-4 md:mr-8">
                <img
                  src="15.jpg"
                  alt="Program 1"
                  className="w-full rounded-lg shadow-lg"
                />
              </div>
              <div className="md:w-1/2 text-gray-700 leading-relaxed space-y-4">
                <h3 className="text-2xl font-semibold">
                  Program 1: Leadership Development
                </h3>
                <ul className="list-disc list-inside space-y-2">
                  <li>
                    Enhance leadership skills through interactive workshops.
                  </li>
                  <li>
                    Learn strategic planning and decision-making techniques.
                  </li>
                  <li>Gain insights into effective team management.</li>
                  <li>Receive personalized feedback and coaching.</li>
                </ul>
              </div>
            </div>

            {/* Card 2: Text Left, Image Right */}
            <div className="flex flex-col md:flex-row-reverse items-center justify-between">
              <div className="md:w-1/2 ml-4 md:ml-8">
                <img
                  src="16.jpg"
                  alt="Program 2"
                  className="w-full rounded-lg shadow-lg"
                />
              </div>
              <div className="md:w-1/2 text-gray-700 leading-relaxed space-y-4">
                <h3 className="text-2xl font-semibold">
                  Program 2: Digital Transformation
                </h3>
                <ul className="list-disc list-inside space-y-2">
                  <li>
                    Adopt cutting-edge technologies to streamline operations.
                  </li>
                  <li>
                    Understand the impact of AI and automation on your business.
                  </li>
                  <li>Implement data-driven strategies for growth.</li>
                  <li>
                    Explore cloud computing and cybersecurity best practices.
                  </li>
                </ul>
              </div>
            </div>

            {/* Card 3: Image Left, Text Right */}
            <div className="flex flex-col md:flex-row items-center justify-between">
              <div className="md:w-1/2 mr-4 md:mr-8">
                <img
                  src="17.jpg"
                  alt="Program 3"
                  className="w-full rounded-lg shadow-lg"
                />
              </div>
              <div className="md:w-1/2 text-gray-700 leading-relaxed space-y-4">
                <h3 className="text-2xl font-semibold">
                  Program 3: Customer Experience
                </h3>
                <ul className="list-disc list-inside space-y-2">
                  <li>
                    Design customer-centric strategies to boost satisfaction.
                  </li>
                  <li>Learn how to measure and improve customer loyalty.</li>
                  <li>Implement feedback loops for continuous improvement.</li>
                  <li>Create memorable experiences through personalization.</li>
                </ul>
              </div>
            </div>

            {/* Card 4: Text Left, Image Right */}
            <div className="flex flex-col md:flex-row-reverse items-center justify-between">
              <div className="md:w-1/2 ml-4 md:ml-8">
                <img
                  src="19.jpg"
                  alt="Program 4"
                  className="w-full rounded-lg shadow-lg"
                />
              </div>
              <div className="md:w-1/2 text-gray-700 leading-relaxed space-y-4">
                <h3 className="text-2xl font-semibold">
                  Program 4: Sustainability & Innovation
                </h3>
                <ul className="list-disc list-inside space-y-2">
                  <li>
                    Integrate sustainable practices into your business model.
                  </li>
                  <li>
                    Discover innovative solutions for reducing environmental
                    impact.
                  </li>
                  <li>Learn about renewable energy and resource management.</li>
                  <li>
                    Drive innovation through collaboration and partnerships.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer Section */}
      <Footer />
    </div>
  );
};

export default Program;
