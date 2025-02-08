import React from "react";

const About: React.FC = () => {
  return (
    <section className="flex flex-col items-center justify-center py-10 md:flex-row md:py-20 bg-[#F2F1FF]">
      {/* Image Container */}
      <div className="w-full md:w-1/2 p-4 md:p-20">
        <img
          src="about.png" // Replace with your image URL
          alt="About Us"
          className="w-full h-auto rounded-lg shadow-md"
        />
      </div>

      {/* Text Container */}
      <div className="w-full md:w-1/2 p-4 md:p-14 text-center md:text-left ">
        <h2 className="text-[#27235E] text-4xl md:text-8xl font-normal mb-4">
          About <br /><span className="text-[#27235E] text-4xl md:text-8xl font-bold">Us</span>
        </h2>
        <p className="text-[#48576B] text-base md:text-3xl leading-relaxed mb-6">
          Langtang Innovation Hub aims to equip young people with essential
          digital skills to thrive in the 4IR era. Our mission is to bridge the
          skills gap, foster innovation, and prepare the next generation for the
          future job market
        </p>
      </div>
    </section>
  );
};

export default About;
