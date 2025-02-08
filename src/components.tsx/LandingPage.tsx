import React from "react";

const LandingPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-purple-50 to-blue-100 flex flex-col justify-center items-center p-4">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
        {/* Text Section */}
        <div className="md:w-1/2 text-center md:text-left mb-8 md:mb-0">
          <h1 className="text-[#27235E] font-semibold">1000+ ENROLLED STUDENTS</h1>
          <h1 className="text-4xl md:text-8xl font-bold text-[#27235E] mb-4">
            Inno<span className="font-normal">vate.</span>
          </h1>
          <h1 className="text-4xl md:text-8xl font-bold text-[#27235E] mb-4">
            Collabo<span className="font-normal">rate.</span>
          </h1>
          <h1 className="text-4xl md:text-8xl font-bold text-[#27235E] mb-4">
            Ele<span className="font-normal">vate.</span>
          </h1>
          <p className="text-lg text-[#48576B] mb-6 md:text-2xl">
            Unique advantages: Cutting-edge tools, <br />
            expert mentors, hands-on learning
          </p>
          <button className="bg-[#41AADF] text-white px-8 py-4 rounded-lg hover:bg-blue-600 transition duration-300">
            Get Started
          </button>
        </div>

        {/* Image Section */}
        <div className="md:w-1/2">
          <img
            src="1.png" // Replace with your image URL
            alt="Landing Image"
            className="w-full h-auto rounded-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
