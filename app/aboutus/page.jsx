"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
// Importing React Icons
import { FaLinkedin, FaEnvelope } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Page() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const teamMembers = [
    {
      name: "Ashish Sapkota",
      role: "Lead Developer",
      image: "/ashish.jpg",
      social: {
        linkedin: "https://www.linkedin.com/in/ashish-sapkota/",
        email: "aryanashish223@gmail.com",
      },
    },
    {
      name: "Om Pandey",
      role: "UX Designer",
      image: "/om.jpg",
      social: {
        linkedin: "https://np.linkedin.com/in/oppandey",
        email: "opanday10.op@gmail.com",
      },
    },
    {
      name: "Bimal Thapa",
      role: "UI/UX Designer",
      image: "/bimal.jpg",
      social: {
        linkedin: "https://www.linkedin.com/in/bimal-thapa-893517322/",
        email: "bimal@example.com",
      },
    },
    {
      name: "Rabin Gurung",
      role: "Project Manager",
      image: "/oppa.jpg",
      social: {
        linkedin: "https://www.linkedin.com/in/rabin-gurung-574b2a220/",
        email: "rovingrg659@gmail.com",
      },
    },
    {
      name: "Swati Verma",
      role: "Developer",
      image: "/swati.jpeg",
      social: {
        linkedin: "https://www.linkedin.com/in/swati-verma-682052229/",
        email: "swt.swati.sv@gmail.com ",
      },
    },
    {
      name: "Rajan Chaudhary",
      role: "Developer",
      image: "/rajan.jpg",
      social: {
        linkedin: "https://www.linkedin.com/in/rajan-chaudhary-ab54b71b5/",
        email: "chaudharyrajan24@gmail.com",
      },
    },
  ];

  return (
    <div className="relative w-full min-h-screen pt-[60px]">
      {/* About Us Section */}
      <h2 className="text-center text-3xl font-bold text-blue-600 mb-8">
        About Us
      </h2>

      <div className="bg-white py-16 px-6 flex items-center" data-aos="fade-up">
        {/* Text Section */}
        <div className="flex-1 text-center md:text-left">
          <p
            className="text-lg text-gray-700 max-w-3xl mx-auto mb-4 pr-8 "
            style={{ textAlign: "justify" }}
            data-aos="fade-up"
          >
            We are a team of dedicated professionals passionate about building
            scalable, secure, and high-performance solutions. Our expertise
            spans software development, UX design, and enterprise application
            engineering.
          </p>
          <p
            className="text-lg text-gray-700 max-w-3xl mx-auto mb-4 pr-8"
            style={{ textAlign: "justify" }}
            data-aos="fade-up"
          >
            With a commitment to innovation, we ensure our clients receive
            tailored technology solutions that drive business success. Our
            approach combines technical excellence with customer-centric
            service.
          </p>
          <p
            className="text-lg text-gray-700 max-w-3xl mx-auto mb-4 pr-8"
            style={{ textAlign: "justify" }}
          >
            As a new and ambitious company, we take pride in proving ourselves
            by delivering outstanding results. Our goal is to be your trusted
            partner in digital transformation and software engineering.
          </p>
        </div>

        {/* Image Section */}
        <div className="flex-1 hidden md:block" data-aos="fade-left">
          <Image
            src="/c1.jpg"
            alt="About Us Image"
            width={600}
            height={400}
            className="w-full h-auto object-cover rounded-lg shadow-lg"
          />
        </div>
      </div>

      {/* Team Section */}
      <div className="bg-gray-100 py-16 px-6" data-aos="fade-up">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-semibold mb-12">
            Meet Our Team
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 hover:translate-y-2 group"
                data-aos={index % 2 === 0 ? "fade-left" : "fade-right"}
              >
                <div
                  className="w-36 h-36 mx-auto mb-4 rounded-full overflow-hidden"
                  data-aos="zoom-in"
                  data-aos-delay="200"
                >
                  <Image
                    src={member.image}
                    alt={member.name}
                    width={150}
                    height={150}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3"
                  />
                </div>
                <h3 className="text-2xl font-semibold text-black mb-2">
                  {member.name}
                </h3>
                <p className="text-lg text-gray-700">{member.role}</p>

                {/* Social Icons */}
                <div className="flex justify-center gap-4 mt-4">
                  <Link href={member.social.linkedin}>
                    <FaLinkedin
                      size={30}
                      className="text-blue-700 hover:text-blue-900"
                    />
                  </Link>
                  <Link href={`mailto:${member.social.email}`}>
                    <FaEnvelope
                      size={30}
                      className="text-gray-600 hover:text-gray-400"
                    />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
