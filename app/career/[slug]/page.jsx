"use client";

import { useParams } from "next/navigation";

const jobDetails = {
  "frontend-developer-intern": {
    title: "Front End Developer Intern",
    description:
      "Join our dynamic engineering team to build modern, responsive web interfaces using cutting-edge technologies like React and Tailwind CSS.",
    responsibilities: [
      "Develop and maintain scalable user interfaces with React.",
      "Collaborate with UX/UI designers to bring mockups to life.",
      "Ensure cross-browser compatibility and responsiveness.",
      "Write clean, maintainable, and well-documented code.",
      "Participate in agile ceremonies including daily standups and sprint planning.",
      "Debug and troubleshoot frontend issues and performance bottlenecks.",
    ],
    requirements: [
      "Proficiency in HTML5, CSS3, and JavaScript (ES6+).",
      "Basic understanding of React and state management.",
      "Familiarity with Git and version control workflows.",
      "Good eye for design and attention to detail.",
      "Willingness to learn new technologies and frameworks.",
      "Strong communication and teamwork skills.",
    ],
  },
  "dotnet-developer-intern": {
    title: ".NET Developer Intern",
    description:
      "Contribute to building secure, scalable backend services and APIs using the .NET ecosystem in a collaborative and fast-paced environment.",
    responsibilities: [
      "Assist in the development of RESTful APIs using ASP.NET Core.",
      "Work with SQL Server and Entity Framework for data handling.",
      "Write unit and integration tests for new features.",
      "Collaborate with frontend and DevOps teams to integrate services.",
      "Participate in code reviews and technical discussions.",
      "Debug issues and provide fixes in a timely manner.",
    ],
    requirements: [
      "Basic knowledge of C# and ASP.NET Core.",
      "Familiarity with databases and SQL syntax.",
      "Understanding of object-oriented programming concepts.",
      "Knowledge of RESTful API design principles.",
      "Eagerness to learn enterprise-level backend development.",
      "Strong problem-solving and collaboration skills.",
    ],
  },
};

export default function JobDetailPage() {
  const { slug } = useParams();
  const job = jobDetails[slug];

  if (!job) {
    return (
      <div className="text-center py-20 text-xl text-gray-600">
        Job not found.
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto px-6 py-16">
      <h1 className="text-4xl font-extrabold text-blue-700 text-center mb-4">
        {job.title}
      </h1>
      <p className="text-lg text-gray-700 mb-8 leading-relaxed">
        {job.description}
      </p>

      <div className="mb-10">
        <h2 className="text-2xl font-semibold text-blue-600 mb-4">
          Key Responsibilities
        </h2>
        <ul className="space-y-3 list-disc list-inside text-gray-700 text-base">
          {job.responsibilities.map((item, idx) => (
            <li key={idx}>{item}</li>
          ))}
        </ul>
      </div>

      <div className="mb-12">
        <h2 className="text-2xl font-semibold text-blue-600 mb-4">
          Required Qualifications
        </h2>
        <ul className="space-y-3 list-disc list-inside text-gray-700 text-base">
          {job.requirements.map((item, idx) => (
            <li key={idx}>{item}</li>
          ))}
        </ul>
      </div>

      <div className="text-center">
        <div className="mt-8 p-6 bg-blue-50 rounded-lg border border-blue-200 text-center text-blue-700 text-lg font-medium">
          Send your CV with the subject{" "}
          <span className="font-semibold">"{job.title}"</span> to{" "}
          <span className="underline">contact.rectoreng@gmail.com</span>
        </div>
      </div>
    </div>
  );
}
