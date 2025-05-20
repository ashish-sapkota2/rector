"use client";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Image from "next/image";
import Link from "next/link";
import { FaLinkedin, FaEnvelope } from "react-icons/fa";

export default function AboutUsPage() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const aboutSections = [
    {
      title: "Who We Are",
      description:
        "We are a passionate team of professionals dedicated to building innovative digital solutions. From development to design, we work closely with our clients to deliver exceptional results that align with their goals.",
      image: "/group1.jpg",
    },
    {
      title: "What We Do",
      description:
        "We specialize in software development, UI/UX design, and digital transformation. Our approach blends creativity, technology, and business insights to create impactful solutions that drive success.",
      image: "/group2.jpg",
    },
    {
      title: "Our Mission",
      description:
        "Our mission is to empower businesses by delivering reliable, scalable, and high-performance software and services. We aim to be a trusted technology partner in your digital journey.",
      image: "/group3.jpg",
    },
  ];

  const teamMembers = [
    {
      name: "Ashish Sapkota",
      role: "Lead Developer",
      image: "/ashish.jpg",
      linkedin: "https://www.linkedin.com/in/ashish-sapkota/",
      email: "aryanashish223@gmail.com",
    },
    {
      name: "Om Pandey",
      role: "UX Designer",
      image: "/om.jpg",
      linkedin: "https://np.linkedin.com/in/oppandey",
      email: "opanday10.op@gmail.com",
    },
    {
      name: "Bimal Thapa",
      role: "UI/UX Designer",
      image: "/bimal.jpg",
      linkedin: "https://www.linkedin.com/in/bimal-thapa-893517322/",
      email: "bimal@example.com",
    },
    {
      name: "Rabin Gurung",
      role: "Project Manager",
      image: "/oppa.jpg",
      linkedin: "https://www.linkedin.com/in/rabin-gurung-574b2a220/",
      email: "rovingrg659@gmail.com",
    },
    {
      name: "Swati Verma",
      role: "Developer",
      image: "/swati.jpeg",
      linkedin: "https://www.linkedin.com/in/swati-verma-682052229/",
      email: "swt.swati.sv@gmail.com",
    },
    {
      name: "Rajan Chaudhary",
      role: "Developer",
      image: "/rajan.jpg",
      linkedin: "https://www.linkedin.com/in/rajan-chaudhary-ab54b71b5/",
      email: "chaudharyrajan24@gmail.com",
    },
  ];

  return (
    <div className="container mx-auto px-6 py-12">
      <h2 className="text-center text-3xl font-bold text-blue-600 mb-8" data-aos="fade-up">
        About Us
      </h2>

      {aboutSections.map((section, index) => (
        <div
          key={index}
          className={`flex flex-col md:flex-row ${index % 2 === 0 ? "md:flex-row-reverse" : ""} items-center mb-12 gap-10`}
        >
          <div className="md:w-1/2 p-4">
            <h3 className="text-2xl font-semibold text-blue-600 mb-3">{section.title}</h3>
            <p className="text-gray-600" style={{ textAlign: "justify" }}>
              {section.description}
            </p>
          </div>
          <div className="md:w-1/2" data-aos={index % 2 === 0 ? "fade-left" : "fade-right"}>
            <img
              src={section.image}
              alt={section.title}
              className="w-full h-100 object-cover rounded-lg shadow-md"
            />
          </div>
        </div>
      ))}

      {/* Team Section */}
      <h2 className="text-center text-3xl font-bold text-blue-600 mt-16 mb-12" data-aos="fade-up">
        Meet Our Team
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {teamMembers.map((member, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-md p-6 text-center"
            data-aos={index % 2 === 0 ? "fade-left" : "fade-right"}
          >
            <div className="w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden">
              <Image
                src={member.image}
                alt={member.name}
                width={150}
                height={150}
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="text-xl font-semibold text-black">{member.name}</h3>
            <p className="text-gray-600">{member.role}</p>
            <div className="flex justify-center gap-4 mt-3">
              <Link href={member.linkedin} target="_blank">
                <FaLinkedin size={24} className="text-blue-700 hover:text-blue-900" />
              </Link>
              <Link href={`mailto:${member.email}`}>
                <FaEnvelope size={24} className="text-gray-600 hover:text-gray-400" />
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
