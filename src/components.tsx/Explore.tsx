import React from "react";

const Explore: React.FC = () => {
  return (
    <section className="w-full py-16 bg-gray-100">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Text Section */}
        <div className="mb-8">
          <h2 className="text-4xl font-normal text-[#27235E] mb-4">
            Join Our <span className="font-bold">Vibrant Community</span>
          </h2>
          <p className="text-base text-[#48576B] leading-relaxed">
            Be part of a dynamic network where ideas thrive, connections
            flourish, and growth is limitless. Engage with like-minded
            individuals, collaborate on exciting projects, and access resources
            that empower you to achieve your goals. Together, we inspire,
            support, and succeed.
          </p>
        </div>

        {/* Image Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* First Image */}
          <div className="relative overflow-hidden rounded-lg shadow-md">
            <img
              src="enroll.png"
              alt="Image 1"
              className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
            />
          </div>

          {/* Second Image */}
          <div className="w-full p-4 md:p-14 text-center md:text-left ">
            <h2 className="text-[#27235E] text-3xl md:text-4xl font-normal mb-4">
              <span className="text-[#27235E] text-3xl md:text-4xl font-bold">
                Enroll
                <br />
              </span>
              With Us Today
            </h2>
            <p className="text-[#48576B] text-base md:text-2xl leading-relaxed mb-6">
              Want to be part of the next cohort of participants in our
              training, do not hesitate to enroll in our Digital Training
              Course.
            </p>
            <button className="bg-[#41AADF] text-white px-8 py-4 rounded-lg hover:bg-blue-600 transition duration-300">
            Enroll Now
          </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Explore;
