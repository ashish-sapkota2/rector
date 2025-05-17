"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import {
  FaRegLightbulb,
  FaDesktop,
  FaMobileAlt,
  FaBullhorn,
  FaClipboardCheck,
  FaCogs,
} from "react-icons/fa"; // Import icons from react-icons
import AOS from "aos";
import "aos/dist/aos.css";
import Image from "next/image";

export default function Page() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    AOS.init({ duration: 1000 });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const services = [
    {
      title: "Product Design",
      icon: <FaRegLightbulb size={50} />, // Lightbulb icon for Product Design
      desc: "We shape your ideas into market-ready, innovative products by blending aesthetics with functionality. Through strategic thinking, prototyping, and user feedback, we ensure every design solves real problems and delivers real value.",
      link: "/services#product-design", // Example link
    },
    {
      title: "UX Design",
      icon: <FaDesktop size={50} />, // Desktop icon for UX Design
      desc: "With a user-centric approach, we craft intuitive and engaging digital experiences for maximum impact. Our process includes user research, wireframing, and usability testing to ensure every interaction feels natural and satisfying.",
      link: "/services#ux-design", // Example link
    },
    {
      title: "Web Development",
      icon: <FaCogs size={50} />, // Gear icon for Web Development
      desc: "Our expert developers build robust, scalable websites and web applications with precision and efficiency. Using the latest technologies, we create secure, high-performing digital solutions tailored to your business goals.",
      link: "/services#web-development", // Example link
    },
    {
      title: "Digital Marketing",
      icon: <FaBullhorn size={50} />, // Bullhorn icon for Digital Marketing
      desc: "We drive growth with data-driven strategies, making your brand visible and impactful in the digital space. From SEO to paid media and content marketing, we build campaigns that attract, convert, and retain your ideal audience.",
      link: "/services#digital-marketing", // Example link
    },
    {
      title: "App Development",
      icon: <FaMobileAlt size={50} />, // Mobile icon for App Development
      desc: "We create user-friendly, feature-rich mobile and web applications that ensure seamless functionality. Our apps are designed for performance, scalability, and a smooth user experience across all platforms and devices.",
      link: "/services#app-development", // Example link
    },
    {
      title: "Quality Assurance",
      icon: <FaClipboardCheck size={50} />, // Clipboard icon for Quality Assurance
      desc: "Our dedicated QA team ensures high-quality products with rigorous testing for smooth functionality across platforms. We identify and resolve issues early, guaranteeing reliability, performance, and a flawless user experience.",
      link: "/services#quality-assurance", // Example link
    },
  ];
  const testimonials = [
    {
      name: "Anjali Sharma",
      role: "Client - E-commerce Project",
      comment:
        "Their team transformed our online store with a beautiful design and smooth checkout experience. From the initial consultation to the final deployment, their communication and professionalism stood out. Sales have increased by 40% since the redesign. Highly recommend!",
      date: "March 2025",
    },
    {
      name: "Rahul Verma",
      role: "Startup Founder",
      comment:
        "The team provided excellent UX/UI and developed our MVP in record time. Communication was clear and timely, and they even helped us refine our product strategy. Our investors were impressed with the functionality and design of the prototype. It was a game-changer for our early-stage launch.",
      date: "February 2025",
    },
    {
      name: "Sneha Joshi",
      role: "Digital Marketing Partner",
      comment:
        "Loved collaborating with them! Their marketing insights helped double our engagement. They created content strategies, managed paid ads, and delivered detailed analytics reports. Their proactive attitude and creativity made them an essential extension of our team.",
      date: "January 2025",
    },
  ];
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 5000); // change every 5 seconds
    return () => clearInterval(interval);
  }, []);
  return (
    <div className="relative w-full min-h-screen bg-gradient-to-r from-[#2b007b] to-[#0065a8] pt-[60px] text-white overflow-hidden">
      {/* Hero Section */}
      <div
        className={`max-w-7xl mx-auto grid md:grid-cols-2 items-center px-6 py-16 gap-10 transition-all duration-500 ease-in-out ${
          isScrolled ? "opacity-0" : "opacity-100"
        }`}
        data-aos="fade-up"
      >
        {/* Left Text Content */}
        <div className="space-y-6">
          <h1 className="text-4xl md:text-5xl font-bold leading-tight">
            We Design{" "}
            <span className="underline underline-offset-8 decoration-white">
              Smart Solutions
            </span>{" "}
            <br />
            For a{" "}
            <span className="underline underline-offset-8 decoration-white">
              Digital-First World
            </span>
            .
          </h1>
          <p className="text-lg">
            From concept to code, we help you transform ideas into powerful
            digital products that drive real growth and lasting impact.
          </p>

          <div className="flex items-center gap-6 mt-6 flex-wrap">
            <Link
              href="/contactus"
              className="text-white font-semibold px-6 py-3 border border-blue-600 rounded-full hover:bg-blue-600 hover:text-white transition-all duration-300"
            >
              Let's Talk →
            </Link>
          </div>
        </div>

        {/* Circular Team Image */}
        <div className="relative flex justify-center py-10">
          <div className="w-80 h-80 sm:w-96 sm:h-96 overflow-hidden rounded-full border-4 border-white shadow-lg">
            <Image
              src="/team.jpg"
              alt="Team"
              width={400}
              height={400}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
      {/* Why Choose Us Section */}
      <div className="bg-gray-200 py-16 px-6" data-aos="fade-up">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12">
          {/* Text Section */}
          <div className="lg:w-1/2">
            <h2
              className="text-3xl md:text-4xl font-semibold mb-6 text-center lg:text-left"
              style={{ color: "#0065a8" }}
            >
              Why Choose Us?
            </h2>
            <div className="text-black space-y-6 text-justify text-base md:text-lg lg:text-xl">
              <p>
                At the heart of everything we do is a bold, passionate team of
                innovators who believe in building things the right way—right
                from scratch. We don’t just develop applications; we engineer
                robust, scalable solutions designed to grow with your business
                and adapt to an ever-evolving digital landscape.
              </p>
              <p>
                Our foundation is built on deep technical expertise—ranging from
                crafting high-performance enterprise systems to designing
                advanced, secure databases that can handle complex business
                logic with ease. We blend creativity with precision, ensuring
                that our solutions aren’t just functional, but also future-proof
                and efficient.
              </p>
              <p>
                What truly sets us apart is our commitment to craftsmanship and
                collaboration. We're not just ticking off requirements—we
                immerse ourselves in your goals and vision. We believe quality
                isn't a checkbox—it's a culture. When you choose us, you're
                partnering with a team that’s invested in your success, driven
                by innovation, integrity, and long-term relationships. Let’s
                build something remarkable—together.
              </p>
            </div>
          </div>

          {/* Image Section */}
          <div className="lg:w-1/2">
            <img
              src="/group.jpg" // Replace with your actual image path
              alt="Why Choose Us"
              className="w-full rounded-2xl shadow-lg"
            />
          </div>
        </div>
      </div>

      {/* Testimonials Carousel Section */}
      <div className="bg-white py-20 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-lg text-black italic mb-8 transition-all duration-500 min-h-[100px]">
            "{testimonials[current].comment}"
          </p>
          <h3 className="text-lg font-semibold text-[#0065a8]">
            {testimonials[current].name}
          </h3>
          <p className="text-sm text-gray-500">{testimonials[current].role}</p>

          {/* Navigation Dots */}
          <div className="flex justify-center gap-2 mt-6">
            {testimonials.map((_, idx) => (
              <span
                key={idx}
                onClick={() => setCurrent(idx)}
                className={`w-3 h-3 rounded-full cursor-pointer transition-all duration-300 ${
                  current === idx ? "bg-[#0065a8] w-6" : "bg-gray-300"
                }`}
              ></span>
            ))}
          </div>
        </div>
      </div>
      {/* Services Section */}
      <div className="bg-gray-200 py-16 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <h2
            className="text-3xl md:text-4xl font-semibold mb-12"
            data-aos="fade-up"
            style={{ color: "#0065a8" }}
          >
            Our Services
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white h-auto p-6 rounded-lg shadow-lg transition-all duration-300 transform hover:scale-105 hover:translate-y-1 hover:bg-[#0056b3] hover:text-white group flex flex-col items-center justify-between"
                data-aos={index % 2 === 0 ? "fade-right" : "fade-left"}
              >
                {/* Icon at top center */}
                <div className="mb-4 text-[#0065a8] text-4xl group-hover:text-white">
                  {service.icon}
                </div>

                {/* Title */}
                <h3 className="text-lg font-medium mb-2 group-hover:text-white">
                  {service.title}
                </h3>

                {/* Short Description */}
                <p className="text-xl text-black group-hover:text-white px-2 text-center">
                  {service.desc.length > 80
                    ? service.desc.slice(0, 80) + "..."
                    : service.desc}
                </p>

                {/* Learn More link */}
                <Link
                  href={service.link}
                  className="mt-4 text-blue-600 group-hover:text-white font-medium transition-all"
                >
                  Learn More →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* Portfolio Section */}
      <div className="bg-white py-16 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <h2
            className="text-3xl md:text-4xl font-semibold mb-12"
            data-aos="fade-up"
            style={{ color: "#0065a8" }}
          >
            Our Portfolio
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                image: "/c2.jpg",
                title: "E-Commerce Platform",
                desc: "A robust multi-vendor marketplace built for scalability and ease of use.",
              },
              {
                image: "/c2.jpg",
                title: "Travel App",
                desc: "An intuitive mobile app for seamless travel bookings and itinerary planning.",
              },
              {
                image: "/c2.jpg",
                title: "Corporate Website",
                desc: "A sleek and responsive website tailored to a financial firm’s brand.",
              },
            ].map((project, i) => (
              <div
                key={i}
                className="rounded-lg shadow-md overflow-hidden transition hover:shadow-xl"
                data-aos={i % 2 === 0 ? "fade-right" : "fade-left"}
              >
                <Image
                  src={project.image}
                  alt={project.title}
                  width={400}
                  height={250}
                  className="w-full h-56 object-cover"
                />
                <div className="p-4">
                  <h3 className="text-xl font-semibold mb-2 text-[#0065a8]">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 text-sm">{project.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* Stats Section */}
      <div className="bg-gray-100 py-16 px-6" data-aos="fade-up">
        <div className="max-w-7xl mx-auto text-center">
          <h2
            className="text-3xl md:text-4xl font-semibold mb-12"
            style={{ color: "#0065a8" }}
          >
            Our Achievements
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Tasks Box */}
            <div
              className="bg-white p-8 rounded-lg shadow-lg transform hover:scale-105 transition duration-300"
              data-aos="fade-up"
            >
              <h3 className="text-3xl font-semibold text-indigo-600">500+</h3>
              <p className="text-lg text-gray-700">Tasks Completed</p>
            </div>

            {/* Projects Box */}
            <div
              className="bg-white p-8 rounded-lg shadow-lg transform hover:scale-105 transition duration-300"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <h3 className="text-3xl font-semibold text-indigo-600">100+</h3>
              <p className="text-lg text-gray-700">Projects Delivered</p>
            </div>

            {/* Clients Box */}
            <div
              className="bg-white p-8 rounded-lg shadow-lg transform hover:scale-105 transition duration-300"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <h3 className="text-3xl font-semibold text-indigo-600">200+</h3>
              <p className="text-lg text-gray-700">Happy Clients</p>
            </div>

            {/* Partners Box */}
            <div
              className="bg-white p-8 rounded-lg shadow-lg transform hover:scale-105 transition duration-300"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              <h3 className="text-3xl font-semibold text-indigo-600">50+</h3>
              <p className="text-lg text-gray-700">Business Partners</p>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="bg-gray-100 py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <h2
            className="text-3xl md:text-4xl font-semibold text-center mb-12"
            data-aos="fade-up"
            style={{ color: "#0065a8" }}
          >
            Frequently Asked Questions
          </h2>

          {[
            {
              q: "What industries do you serve?",
              a: "We cater to a wide range of industries including healthcare, education, e-commerce, finance, and real estate.",
            },
            {
              q: "Can you work with existing websites or apps?",
              a: "Absolutely! We can upgrade, redesign, or integrate new features into your current systems.",
            },
            {
              q: "How do you ensure the quality of your projects?",
              a: "We follow a structured QA process including automated and manual testing, regular code reviews, and client feedback loops.",
            },
            {
              q: "What technologies do you use?",
              a: "Our tech stack includes React, Next.js, Angular, Node.js, Python, Flutter, and more, depending on project requirements.",
            },
            {
              q: "How do you handle communication and project management?",
              a: "We use tools like Slack, Trello, and Jira to keep communication transparent and projects on track. Clients receive regular updates.",
            },
            {
              q: "Do you provide custom design or use templates?",
              a: "We offer both. Our designers can create fully custom designs or adapt templates to match your brand identity.",
            },
            {
              q: "What is your pricing model?",
              a: "We offer flexible pricing models including fixed-price, hourly, and milestone-based billing depending on the project's scope and duration.",
            },
            {
              q: "Can you help with branding and content as well?",
              a: "Yes, we offer brand strategy, logo design, content writing, and other creative services to support your digital presence.",
            },
          ].map((faq, index) => (
            <div
              key={index}
              className="bg-white shadow-md mb-4 rounded-lg overflow-hidden"
              data-aos="fade-up"
            >
              <details className="group">
                <summary className="cursor-pointer px-6 py-4 font-semibold text-lg text-[#0065a8] group-hover:bg-blue-50">
                  {faq.q}
                </summary>
                <div className="px-6 pb-4 text-gray-700">{faq.a}</div>
              </details>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
