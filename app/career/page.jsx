import React from "react";

export default function Page() {
  return (
    <div className="relative w-full min-h-screen pt-[20px] bg-gray-50">
      {/* Career Introduction */}
      <section
        className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center"
        data-aos="fade-up"
      >
        <h2 className="text-4xl font-bold mb-6 text-blue-600">
          Careers at RectorEng
        </h2>
        <p className="text-lg text-gray-700 max-w-3xl mx-auto mb-6">
          At RectorEng, we know that our people are the foundation of everything
          we build. We’re creating a workplace where innovation thrives,
          collaboration is second nature, and diversity drives success.
        </p>
        <p className="text-lg text-gray-700 max-w-2xl mx-auto mb-10">
          Ready to shape the future with a passionate, forward-thinking team?
          Start your journey at RectorEng today.
        </p>
        <a
          href="#open-positions"
          className="inline-block bg-blue-600 text-white px-6 py-3 rounded-xl font-semibold transition duration-300 hover:bg-blue-700 hover:scale-105"
        >
          Explore Open Roles
        </a>
      </section>

      {/* How We Hire in a Box */}
      <section
        className="bg-white py-16 px-4 sm:px-6 lg:px-8"
        data-aos="fade-up"
      >
        <div className="max-w-6xl mx-auto bg-blue-600 rounded-2xl p-10 shadow-lg transition duration-300">
          <h3 className="text-3xl font-bold text-center mb-12 text-white">
            How We Hire
          </h3>
          <div className="grid gap-10 md:grid-cols-3 text-center">
            {[
              {
                title: "1. Submit",
                desc: "Apply online with your resume and cover letter. Tell us why you’re a great fit.",
              },
              {
                title: "2. Interview",
                desc: "Our team will connect with you for meaningful conversations and skill assessments.",
              },
              {
                title: "3. Join Us",
                desc: "Receive an offer and start making an impact from day one at RectorEng.",
              },
            ].map((step, i) => (
              <div
                key={i}
                className="bg-white p-6 rounded-xl shadow-md transition duration-300 hover:shadow-xl hover:-translate-y-1 hover:border hover:border-blue-600"
              >
                <h4 className="text-xl font-bold text-blue-600 mb-2">
                  {step.title}
                </h4>
                <p className="text-gray-700">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section
        id="open-positions"
        className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16"
        data-aos="fade-up"
      >
        <h3 className="text-3xl font-bold text-blue-600 text-center mb-10">
          Open Positions
        </h3>
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-xl shadow-md flex flex-col sm:flex-row justify-between items-start sm:items-center hover:shadow-lg transition duration-300">
            <h4 className="text-lg font-semibold text-gray-800">
              Front End Developer Intern
            </h4>
            <a
              href="/career/frontend-developer-intern"
              className="text-blue-600 mt-2 sm:mt-0 hover:underline"
            >
              View details
            </a>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-md flex flex-col sm:flex-row justify-between items-start sm:items-center hover:shadow-lg transition duration-300">
            <h4 className="text-lg font-semibold text-gray-800">
              .NET Developer Intern
            </h4>
            <a
              href="/career/dotnet-developer-intern"
              className="text-blue-600 mt-2 sm:mt-0 hover:underline"
            >
              View details
            </a>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-md flex flex-col sm:flex-row justify-between items-start sm:items-center hover:shadow-lg transition duration-300">
            <h4 className="text-lg font-semibold text-gray-800">
              UI/UX Intern
            </h4>
            <a
              href="/career/uiux-design-intern"
              className="text-blue-600 mt-2 sm:mt-0 hover:underline"
            >
              View details
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
