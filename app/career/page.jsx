import React from "react";

export default function Page() {
  return (
    <div className="bg-gray-100 py-16 px-6">
      {/* Intro Section */}
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-semibold mb-6 text-[#004c80]">
          Join Our Team
        </h2>
        <p className="text-lg text-gray-700 mb-12">
          At RectorEng, we’re always on the lookout for talented and
          driven individuals who share our passion for innovation, teamwork, and
          delivering excellence. Explore our open positions below and become part
          of a company that values growth, creativity, and collaboration.
        </p>
      </div>

      {/* Job Listings Section */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Job Card 1 */}
        <div
          className="bg-white p-6 rounded-lg shadow-lg transform hover:scale-105 transition duration-300"
          data-aos="fade-up"
        >
          <h3 className="text-xl font-semibold text-[#004c80] mb-2">
            Software Developer
          </h3>
          <p className="text-gray-700 mb-4">
            We’re looking for an experienced Software Developer to join our team
            and build high-quality applications.
          </p>
          <p className="font-medium text-gray-800">Location: Remote</p>
          <p className="font-medium text-gray-800">Experience: 2+ years</p>
          <p className="mt-4 text-[#0065a8] font-semibold">
            Send your CV to <br />
            <a
              href="mailto:contact.rectoreng@gmail.com"
              className="hover:text-[#004c80] underline"
            >
              contact.rectoreng@gmail.com
            </a>
          </p>
        </div>

        {/* Job Card 2 */}
        <div
          className="bg-white p-6 rounded-lg shadow-lg transform hover:scale-105 transition duration-300"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          <h3 className="text-xl font-semibold text-[#004c80] mb-2">
            UI/UX Designer
          </h3>
          <p className="text-gray-700 mb-4">
            We are seeking a creative UI/UX Designer to design user-friendly
            interfaces and experiences for our applications.
          </p>
          <p className="font-medium text-gray-800">Location: New York</p>
          <p className="font-medium text-gray-800">Experience: 3+ years</p>
          <p className="mt-4 text-[#0065a8] font-semibold">
            Send your CV to <br />
            <a
              href="mailto:contact.rectoreng@gmail.com"
              className="hover:text-[#004c80] underline"
            >
              contact.rectoreng@gmail.com
            </a>
          </p>
        </div>

        {/* Job Card 3 */}
        <div
          className="bg-white p-6 rounded-lg shadow-lg transform hover:scale-105 transition duration-300"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          <h3 className="text-xl font-semibold text-[#004c80] mb-2">
            Marketing Manager
          </h3>
          <p className="text-gray-700 mb-4">
            Looking for a Marketing Manager who can help us grow our brand and
            expand our market reach.
          </p>
          <p className="font-medium text-gray-800">Location: Remote</p>
          <p className="font-medium text-gray-800">Experience: 5+ years</p>
          <p className="mt-4 text-[#0065a8] font-semibold">
            Send your CV to <br />
            <a
              href="mailto:contact.rectoreng@gmail.com"
              className="hover:text-[#004c80] underline"
            >
              contact.rectoreng@gmail.com
            </a>
          </p>
        </div>
      </div>

      {/* How to Apply Section */}
      <div className="bg-white py-16 px-6 mt-16">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-semibold mb-6 text-[#004c80]">
            How to Apply
          </h2>
          <p className="text-lg text-gray-700 mb-8">
            Applying for a position at RectorEng is simple. Follow
            the steps below to submit your application:
          </p>
          <ol className="text-lg text-left text-gray-700 list-decimal pl-6">
            <li>Choose a job role that fits your skills and experience.</li>
            <li>Send your CV and portfolio (if applicable) to the email below.</li>
            <li>Our HR team will review your application and respond within 7 business days.</li>
            <li>If shortlisted, we will schedule an interview with you.</li>
          </ol>
          <p className="mt-6 text-[#0065a8] text-lg font-semibold">
            Email:{" "}
            <a
              href="mailto:contact.rectoreng@gmail.com"
              className="hover:text-[#004c80] underline"
            >
              contact.rectoreng@gmail.com
            </a>
          </p>
        </div>
      </div>

      {/* Employee Benefits Section */}
      <div className="bg-gray-200 py-16 px-6 mt-16">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-semibold mb-6 text-[#004c80]">
            Employee Benefits
          </h2>
          <p className="text-lg text-gray-700 mb-12">
            At RectorEng, we value our employees and offer a
            comprehensive benefits package that includes:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Health Insurance */}
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold text-[#004c80] mb-2">
                Health Insurance
              </h3>
              <p className="text-gray-700">
                We provide comprehensive health insurance to ensure your
                well-being.
              </p>
            </div>

            {/* Flexible Hours */}
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold text-[#004c80] mb-2">
                Flexible Hours
              </h3>
              <p className="text-gray-700">
                Work-life balance is important, so we offer flexible working
                hours.
              </p>
            </div>

            {/* Learning Opportunities */}
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold text-[#004c80] mb-2">
                Learning Opportunities
              </h3>
              <p className="text-gray-700">
                We encourage continuous learning with access to courses and
                training programs.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
