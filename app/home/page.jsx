"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import AOS from "aos";
import "aos/dist/aos.css";

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

  return (
    <div className="relative w-full min-h-screen pt-[60px]">
      {/* Full-Screen Image */}
      <div className="absolute top-0 left-0 w-full h-full -z-10">
        <Image
          src="/group.jpg"
          alt="Company Background"
          fill
          className="opacity-30"
        />
      </div>

      {/* Overlay Text with Scroll Effect */}
      <div
        className={`flex flex-col justify-center items-center h-screen text-center px-6 transition-all duration-500 ease-in-out ${
          isScrolled ? "opacity-0" : "opacity-100"
        }`}
        data-aos="fade-up"
      >
        <h1 className="text-black text-5xl md:text-6xl lg:text-7xl font-extrabold">
          Innovate, Build, Succeed
        </h1>
        <p className="text-lg md:text-xl lg:text-2xl mt-4 max-w-3xl">
          Empowering businesses with cutting-edge technology solutions.
        </p>

        {/* Contact Us Button */}
        <Link
          href="/contactus"
          className="bg-blue-600 text-white font-bold text-lg px-6 py-3 rounded-full shadow-lg transition-all duration-300 hover:bg-white hover:text-blue-600 mt-3 hover:shadow-lg"
          data-aos="zoom-in"
        >
          Contact Us →
        </Link>
      </div>

      {/* Why Choose Us Section */}
      <div className="bg-white py-16 px-6" data-aos="fade-up">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-semibold mb-6">
            Why Choose Us?
          </h2>
          <div className="text-base text-black md:text-xl lg:text-xl w-full mx-auto space-y-6">
            <p
              className="text-base text-black md:text-lg lg:text-xl w-full mx-auto"
              style={{ textAlign: "justify" }}
              data-aos="fade-up"
            >
              At the heart of everything we do is a bold, passionate team of
              innovators who believe in building things the right way—right from
              scratch. We don’t just develop applications; we engineer robust,
              scalable solutions designed to grow with your business and adapt
              to an ever-evolving digital landscape. Our foundation is built on
              deep technical expertise—ranging from crafting high-performance
              enterprise systems to designing advanced, secure databases that
              can handle complex business logic with ease. We blend creativity
              with precision, ensuring that our solutions aren’t just
              functional, but also future-proof and efficient. What truly sets
              us apart is our commitment to craftsmanship and collaboration.
              We're not here to just tick off requirements—we immerse ourselves
              in your goals, challenges, and vision. Whether it's a startup
              looking to launch an MVP or an enterprise in need of a digital
              transformation, we approach each project with the same level of
              care and dedication. We believe that quality isn't a checkbox—it's
              a culture. Our process involves continuous iteration, testing, and
              improvement to ensure every product we build exceeds expectations
              in terms of performance, usability, and security. When you choose
              us, you're not just hiring a service provider—you’re partnering
              with a team that’s invested in your success, a team that thrives
              on innovation, integrity, and long-term relationships.
            </p>
            <p data-aos="fade-up">Let’s build something remarkable—together.</p>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <div className="bg-gray-200 py-16 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-semibold mb-12" data-aos="fade-up">
            Our Services
          </h2>

          {/* Services Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[{
                title: "Product Design",
                desc: "We shape your ideas into market-ready, innovative products by blending aesthetics with functionality. Through strategic thinking, prototyping, and user feedback, we ensure every design solves real problems and delivers real value.",
              },
              {
                title: "UX Design",
                desc: "With a user-centric approach, we craft intuitive and engaging digital experiences for maximum impact. Our process includes user research, wireframing, and usability testing to ensure every interaction feels natural and satisfying.",
              },
              {
                title: "Web Development",
                desc: "Our expert developers build robust, scalable websites and web applications with precision and efficiency. Using the latest technologies, we create secure, high-performing digital solutions tailored to your business goals.",
              },
              {
                title: "Digital Marketing",
                desc: "We drive growth with data-driven strategies, making your brand visible and impactful in the digital space. From SEO to paid media and content marketing, we build campaigns that attract, convert, and retain your ideal audience.",
              },
              {
                title: "App Development",
                desc: "We create user-friendly, feature-rich mobile and web applications that ensure seamless functionality. Our apps are designed for performance, scalability, and a smooth user experience across all platforms and devices.",
              },
              {
                title: "Quality Assurance",
                desc: "Our dedicated QA team ensures high-quality products with rigorous testing for smooth functionality across platforms. We identify and resolve issues early, guaranteeing reliability, performance, and a flawless user experience.",
              }
            ].map((service, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-lg transition-all duration-300 transform hover:scale-105 hover:translate-y-1 hover:bg-[#0056b3] hover:text-white group"
                data-aos={index % 2 === 0 ? "fade-right" : "fade-left"}
              >
                <h3 className="text-2xl font-semibold text-black mb-4 transition-all duration-300 group-hover:text-white">
                  {service.title}
                </h3>
                <p
                  className="text-lg text-gray-700 transition-all duration-300 group-hover:text-white"
                  style={{ textAlign: "justify" }}
                >
                  {service.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
