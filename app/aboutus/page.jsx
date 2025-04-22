"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
// Importing React Icons
import { FaInstagram, FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";

export default function Page() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const teamMembers = [
    { 
      name: "Ashish Sapkota", 
      role: "Lead Developer", 
      image: "/swati.jpeg",
      social: {
        instagram: "#",
        linkedin: "#",
        github: "#",
        email: "ashish@example.com"
      }
    },
    { 
      name: "Om Pandey", 
      role: "UX Designer", 
      image: "/swati.jpeg",
      social: {
        instagram: "#",
        linkedin: "#",
        github: "#",
        email: "om@example.com"
      }
    },
    { 
      name: "Bimal Thapa", 
      role: "Backend Engineer", 
      image: "/swati.jpeg",
      social: {
        instagram: "#",
        linkedin: "#",
        github: "#",
        email: "bimal@example.com"
      }
    },
    { 
      name: "Rabin Gurung", 
      role: "Project Manager", 
      image: "/swati.jpeg",
      social: {
        instagram: "#",
        linkedin: "#",
        github: "#",
        email: "rabin@example.com"
      }
    },
    { 
      name: "Swati Verma", 
      role: "Developer", 
      image: "/swati.jpeg",
      social: {
        instagram: "#",
        linkedin: "#",
        github: "#",
        email: "swati@example.com"
      }
    },
    { 
      name: "Rajan Chaudhary", 
      role: "Developer", 
      image: "/rajan.jpg",
      social: {
        instagram: "#",
        linkedin: "#",
        github: "#",
        email: "rajan@example.com"
      }
    },
  ];

  return (
    <div className="relative w-full min-h-screen pt-[60px]">
      {/* About Us Section */}
      <div className="bg-white py-16 px-6 flex items-center">
        {/* Text Section */}
        <div className="flex-1 text-center md:text-left">
          <h2 className="text-4xl font-semibold mb-6">About Us</h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto mb-4">
            We are a team of dedicated professionals passionate about building scalable, secure, and high-performance solutions. Our expertise spans software development, UX design, and enterprise application engineering.
          </p>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto mb-4">
            With a commitment to innovation, we ensure our clients receive tailored technology solutions that drive business success. Our approach combines technical excellence with customer-centric service.
          </p>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto mb-4">
            As a new and ambitious company, we take pride in proving ourselves by delivering outstanding results. Our goal is to be your trusted partner in digital transformation and software engineering.
          </p>
        </div>

        {/* Image Section */}
        <div className="flex-1 hidden md:block">
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
      <div className="bg-gray-100 py-16 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-semibold mb-12">Meet Our Team</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 hover:translate-y-2">
                <Image
                  src={member.image}
                  alt={member.name}
                  width={150}
                  height={150}
                  className="mx-auto rounded-full mb-4"
                />
                <h3 className="text-2xl font-semibold text-black mb-2">{member.name}</h3>
                <p className="text-lg text-gray-700">{member.role}</p>

                {/* Social Icons */}
                <div className="flex justify-center gap-4 mt-4">
                  <Link href={member.social.instagram}>
                    <FaInstagram size={30} className="text-blue-500 hover:text-blue-700" />
                  </Link>
                  <Link href={member.social.linkedin}>
                    <FaLinkedin size={30} className="text-blue-700 hover:text-blue-900" />
                  </Link>
                  <Link href={member.social.github}>
                    <FaGithub size={30} className="text-gray-800 hover:text-gray-600" />
                  </Link>
                  <Link href={`mailto:${member.social.email}`}>
                    <FaEnvelope size={30} className="text-gray-600 hover:text-gray-400" />
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
