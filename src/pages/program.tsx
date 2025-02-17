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
            <h2 className="text-3xl lg:text-4xl font-bold md:mt-12 mb-4">
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
                  Digital Skill Training
                </h3>
                <div>
                  <ul className="list-disc list-inside space-y-2">
                    <li>
                      AI: Machine learning, neural networks, and AI
                      applications.
                    </li>
                    <li>
                      Data Science: Data analytics, visualization, and machine
                      learning with Python and R.
                    </li>
                    <li>
                      Cybersecurity: Ethical hacking and digital asset
                      protection.
                    </li>
                    <li>
                      Software Development: Full-stack development with React
                      and Django.
                    </li>
                    <li>
                      Product Design: UI/UX, prototyping, and tools like Figma.
                    </li>
                  </ul>
                </div>
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
                <h3 className="text-2xl font-semibold">Coaching & Mentoring</h3>
                <ul className="list-disc list-inside space-y-2">
                  <li>
                    One-on-one sessions with experienced mentors from the
                    technology and business sectors.
                  </li>
                  <li>
                    Goal setting and progress tracking to ensure personal and
                    professional growth.
                  </li>
                  <li>
                    Access to networking events and industry insights to stay
                    updated on market trends.
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
                  Innovation Challenges & Hackathon
                </h3>
                <ul className="list-disc list-inside space-y-2">
                  <li>
                    Real-world problem statements presented by industry leaders.
                  </li>
                  <li>
                    Team-based competitions to encourage collaboration and
                    creativity.
                  </li>
                  <li>
                    Opportunities to pitch solutions to potential investors and
                    stakeholders.
                  </li>
                  <li>
                    Exciting prizes and potential employment opportunities for
                    top performers.
                  </li>
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
                  Entrepreneuship Support
                </h3>
                <ul className="list-disc list-inside space-y-2">
                  <li>Business development workshops and training sessions.</li>
                  <li>
                    Guidance on creating business plans and securing funding.
                  </li>
                  <li>
                    Access to a network of investors, advisors, and industry
                    professionals.
                  </li>
                  <li>Incubation support and office space for startups.</li>
                </ul>
              </div>
            </div>

            {/* Card 5: Image Left, Text Right */}
            <div className="flex flex-col md:flex-row items-center justify-between">
              <div className="md:w-1/2 mr-4 md:mr-8">
                <img
                  src="20.jpg"
                  alt="Program 5"
                  className="w-full rounded-lg shadow-lg"
                />
              </div>
              <div className="md:w-1/2 text-gray-700 leading-relaxed space-y-4">
                <h3 className="text-2xl font-semibold">
                  Industry Collaboration
                </h3>
                <ul className="list-disc list-inside space-y-2">
                  <li>
                    Interactive workshops led by industry experts and thought
                    leaders.
                  </li>
                  <li>
                    Hands-on projects to apply learning in real-world scenarios.
                  </li>
                  <li>
                    Networking sessions with professionals from top companies.
                  </li>
                  <li>
                    Access to exclusive resources and tools for career
                    advancement.
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
