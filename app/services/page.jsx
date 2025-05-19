"use client"
import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function ServicesPage() {
    useEffect(() => {
        AOS.init({ duration: 1000 });
    }, []);

    const services = [
        {
            title: "Product Design",
            description: "We provide end-to-end product design services, ensuring that every aspect of your product is designed to perfection. From user research to prototyping, our design team works closely with you to create a product that not only looks great but delivers an exceptional user experience. Our approach is iterative and user-centered, enabling us to design products that meet both business goals and user needs.",
            image: "/product design.jpg"
        },
        {
            title: "UX Design",
            description: "UX design focuses on improving the overall experience for users interacting with your digital products. Our team conducts user research, creates wireframes, and prototypes, ensuring that your website or application provides an intuitive, accessible, and delightful experience for users. By understanding user needs and behaviors, we design digital experiences that are both functional and enjoyable.",
            image: "/ux design.jpg"
        },
        {
            title: "Web Development",
            description: "Our web development services focus on building fast, responsive, and scalable websites. Whether you're looking for a simple website or a complex web application, we use the latest technologies to ensure seamless performance across all devices. We focus on clean code, responsive design, and security, ensuring that your website not only meets your needs but exceeds user expectations.",
            image: "/web design.jpg"
        },
        {
            title: "Digital Marketing",
            description: "We offer comprehensive digital marketing services that help you grow your online presence and reach your target audience effectively. Our services include SEO, paid media, social media marketing, content marketing, and email marketing. By leveraging data-driven strategies, we create campaigns that drive traffic, increase conversions, and enhance brand visibility, ensuring your business stands out in the competitive digital landscape.",
            image: "/digital marketing.jpg"
        },
        {
            title: "App Development",
            description: "Our app development team specializes in building native and cross-platform mobile applications. We design and develop apps for iOS and Android, ensuring they are user-friendly, fast, and secure. Whether you need an app for e-commerce, enterprise solutions, or entertainment, our team is skilled in creating applications that provide a seamless user experience and meet your business objectives.",
            image: "/app.jpg"
        },
        {
            title: "Quality Assurance",
            description: "Quality assurance is critical to ensuring your products and services meet the highest standards. We provide comprehensive QA testing, from manual testing to automated testing, ensuring your software is bug-free and performs as expected. Our team performs rigorous tests across different environments and devices to identify potential issues early in the development process, minimizing risks and delivering high-quality products.",
            image: "/qa.jpg"
        }
    ];

    return (
        <div className="container mx-auto px-6 py-12">
            <h2 className="text-center text-3xl font-bold text-blue-600 mb-8"data-aos="fade-up">Our Services</h2>
            {services.map((service, index) => (
                <div
                    key={index}
                    id={service.title.toLowerCase().replace(/\s+/g, "-")}
                    className={`flex flex-col md:flex-row ${index % 2 === 0 ? 'md:flex-row-reverse' : ''} items-center mb-12 gap-10`}
                >
                    <div className="md:w-1/2 p-4">
                        <h3 className="text-2xl font-semibold text-blue-600 mb-3">{service.title}</h3>
                        <p className="text-gray-600" style={{ textAlign: "justify" }}>{service.description}</p>
                    </div>
                    <div
                        className="md:w-1/2"
                        data-aos={index % 2 === 0 ? 'fade-left' : 'fade-right'}
                    >
                        <img
                            src={service.image}
                            alt={service.title}
                            className="w-full h-100 object-cover rounded-lg shadow-md"
                        />
                    </div>
                </div>
            ))}
        </div>
    );
}
