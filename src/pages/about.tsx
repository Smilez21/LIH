import React from "react";
import Header from "../components.tsx/header";
import Footer from "../components.tsx/footer";
import {
  FaLightbulb,
  FaChartLine,
  FaUsers,
  FaGlobe,
  FaShieldAlt,
  FaClock,
} from "react-icons/fa"; // Import icons from React Icons

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Header Section */}
      <Header />

      {/* Main Content */}
      <main className="flex-1 bg-gray-100">
        {/* Call to Action Section */}
        <section className="py-16 bg-[#41AADF] text-white">
          <div className="container mx-auto px-4 lg:px-8 max-w-5xl">
            <div className="text-center">
              <h2 className="text-3xl lg:text-4xl font-bold md:mt-12 mb-4">
                Ready to Work Together?
              </h2>
              {/* <p className="text-lg mb-8">
                Let's discuss how we can help your business grow.
              </p> */}
              <a
                href="/contact"
                className="inline-block bg-white text-[#41AADF] font-medium py-3 px-8 rounded-lg shadow-md hover:bg-indigo-500 hover:text-white transition duration-300"
              >
                Contact Us
              </a>
            </div>
          </div>
        </section>

        {/* About Our Company Section with Cards */}
        <section className="py-12">
          <div className="container mx-auto px-4 lg:px-8 max-w-5xl">
            <div className="text-center mb-12">
              <h3 className="text-2xl lg:text-3xl text-[#41AADF] font-semibold mb-6">
                Why Choose Us?
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Langtang Innovation Hub aims to equip young people with
                essential digital skills to thrive in the 4IR era. Our mission
                is to bridge the skills gap, foster innovation, and prepare the
                next generation for the future job market.
              </p>
            </div>

            {/* Card Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Card 1 */}
              <div className="bg-white shadow-lg rounded-lg p-6 text-center hover:shadow-xl transition duration-300">
                <div className="text-[#41AADF] text-4xl mb-4">
                  <FaLightbulb /> {/* React Icon */}
                </div>
                <h4 className="text-xl font-semibold mb-2">
                  Innovative Solutions
                </h4>
                <p className="text-gray-600">
                  Provide hands-on training in in-demand digital skills (AI,
                  Data Science, Cybersecurity, Software Development, Data
                  Analysis, Product Design, etc.)
                </p>
              </div>

              {/* Card 2 */}
              <div className="bg-white shadow-lg rounded-lg p-6 text-center hover:shadow-xl transition duration-300">
                <div className="text-[#41AADF] text-4xl mb-4">
                  <FaChartLine /> {/* React Icon */}
                </div>
                <h4 className="text-xl font-semibold mb-2">
                  Data-Driven Insights
                </h4>
                <p className="text-gray-600">
                  Foster creativity, innovation, and entrepreneurship
                </p>
              </div>

              {/* Card 3 */}
              <div className="bg-white shadow-lg rounded-lg p-6 text-center hover:shadow-xl transition duration-300">
                <div className="text-[#41AADF] text-4xl mb-4">
                  <FaUsers /> {/* React Icon */}
                </div>
                <h4 className="text-xl font-semibold mb-2">
                  Job Opportunities
                </h4>
                <p className="text-gray-600">
                  Enhance employability and job readiness
                </p>
              </div>

              {/* Card 4 */}
              <div className="bg-white shadow-lg rounded-lg p-6 text-center hover:shadow-xl transition duration-300">
                <div className="text-[#41AADF] text-4xl mb-4">
                  <FaGlobe /> {/* React Icon */}
                </div>
                <h4 className="text-xl font-semibold mb-2">Global Reach</h4>
                <p className="text-gray-600">
                  Promote digital literacy and inclusion
                </p>
              </div>

              {/* Card 5 */}
              <div className="bg-white shadow-lg rounded-lg p-6 text-center hover:shadow-xl transition duration-300">
                <div className="text-[#41AADF] text-4xl mb-4">
                  <FaShieldAlt /> {/* React Icon */}
                </div>
                <h4 className="text-xl font-semibold mb-2">Security & Trust</h4>
                <p className="text-gray-600">
                  Cyber awareness through hands on learning.
                </p>
              </div>

              {/* Card 6 */}
              <div className="bg-white shadow-lg rounded-lg p-6 text-center hover:shadow-xl transition duration-300">
                <div className="text-[#41AADF] text-4xl mb-4">
                  <FaClock /> {/* React Icon */}
                </div>
                <h4 className="text-xl font-semibold mb-2">Timely Delivery</h4>
                <p className="text-gray-600">
                  We ensure projects are delivered on time, every time.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer Section */}
      <Footer />
    </div>
  );
};

export default About;
