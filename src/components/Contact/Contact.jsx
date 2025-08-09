import React from "react";
import { FaPhoneAlt, FaEnvelope, FaLinkedin, FaGithub } from "react-icons/fa";

const Contact = () => {
  return (
    <section
      id="contact"
      className="flex flex-col items-center justify-center py-24 px-[12vw] md:px-[7vw] lg:px-[20vw]"
    >
      {/* Section Title */}
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-white">CONTACT</h2>
        <div className="w-32 h-1 bg-purple-500 mx-auto mt-4"></div>
        <p className="text-gray-400 mt-4 text-lg font-semibold">
          Let’s connect! Here are my contact details.
        </p>
      </div>

      {/* Contact Info Card */}
      <div className="mt-8 w-full max-w-md bg-[#0d081f] p-6 rounded-lg shadow-lg border border-gray-700 space-y-4">
        <div className="flex items-center text-white space-x-3">
          <FaPhoneAlt className="text-purple-400" />
          <span className="text-lg">8019202270</span>
        </div>
        <div className="flex items-center text-white space-x-3">
          <FaEnvelope className="text-purple-400" />
          <span className="text-lg">meghana.k23@iiits.in</span>
        </div>
        <div className="flex items-center text-white space-x-3">
          <FaLinkedin className="text-purple-400" />
          <a
            href="https://www.linkedin.com/in/kuruva-meghana"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-yellow-400 transition"
          >
            Kuruva Meghana
          </a>
        </div>
        <div className="flex items-center text-white space-x-3">
          <FaGithub className="text-purple-400" />
          <a
            href="https://github.com/Meghana-kuruva"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-yellow-400 transition"
          >
            Meghana-kuruva
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
