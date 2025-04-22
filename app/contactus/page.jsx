"use client";

import { useRef, useEffect, useState } from "react";
import emailjs from "emailjs-com";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function ContactPage() {
  const form = useRef();
  const [currentTime, setCurrentTime] = useState("");

  // Set the current time when the component is mounted
  useEffect(() => {
    const now = new Date().toLocaleString();
    setCurrentTime(now);
  }, []);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_csswy4r", // Replace with your actual Service ID
        "template_ip93rx6", // Replace with your actual Template ID
        form.current,
        "b7GGs-4Zb-664qqHz" // Replace with your actual Public Key
      )
      .then(
        (result) => {
          console.log("✅ Success:", result.text);
          toast.success("Message sent successfully!");
          form.current.reset();
        },
        (error) => {
          console.error("❌ Error:", error.text);
          toast.error("Failed to send message.");
        }
      );
  };

  return (
    <div className="container mx-auto px-6 py-12">
      <div className="flex flex-col md:flex-row-reverse items-center md:items-start md:justify-between mb-12">
        {/* Contact Form Section */}
        <div className="flex flex-col md:w-1/2 p-4  rounded-lg ">
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">
            Get in Touch
          </h3>

          <form ref={form} onSubmit={sendEmail} className="space-y-4">
            <div>
              <label className="block text-gray-700">Name</label>
              <input
                type="text"
                name="name"
                className="w-full p-2 border rounded-lg"
                placeholder="Your Name"
                required
              />
            </div>
            <div>
              <label className="block text-gray-700">Email</label>
              <input
                type="email"
                name="email"
                className="w-full p-2 border rounded-lg"
                placeholder="Your Email"
                required
              />
            </div>
            <div>
              <label className="block text-gray-700">Company Name</label>
              <input
                type="text"
                name="company"
                className="w-full p-2 border rounded-lg"
                placeholder="Your Company Name"
              />
            </div>
            <div>
              <label className="block text-gray-700">Message</label>
              <textarea
                name="message"
                className="w-full p-2 border rounded-lg"
                rows="4"
                placeholder="Your Message"
                required
              ></textarea>
            </div>

            {/* Hidden field for time */}
            <input type="hidden" name="time" value={currentTime} />

            <button
              type="submit"
              className="bg-blue-600 text-white px-6 py-3 rounded-full shadow-lg transform hover:scale-105 hover:bg-white hover:text-blue-600 hover:shadow-xl focus:outline-none transition-all duration-300 ease-in-out cursor-pointer"
            >
              Send Message
            </button>
          </form>
        </div>

        {/* Contact Details Section */}
        <div className="md:w-1/2 p-4 rounded-lg ">
          <h3 className="text-2xl font-semibold text-gray-800 mb-3">
            Our Office
          </h3>
          <p className="text-gray-600">
            Chyasal Ground
            <br />
            Shankhamul, Kathmandu
          </p>
          <p className="text-gray-600 mt-2">
            <strong>Email:</strong> contact.rectoreng@gmail.com
          </p>
          <p className="text-gray-600 mt-2">
            <strong>Phone:</strong> +977-9804750584
          </p>
          <div className="mt-4">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d883.3136971073252!2d85.33420164864785!3d27.67851903416822!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb1955facad343%3A0xcf9c6b90355326b1!2sThela%20Ghar!5e0!3m2!1sen!2snp!4v1745127395508!5m2!1sen!2snp"
              width="400"
              height="300"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>

      {/* Toast Notification Container */}
      <ToastContainer />
    </div>
  );
}
