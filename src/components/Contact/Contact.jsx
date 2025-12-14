import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Contact = () => {
  const form = useRef();
  const [loading, setLoading] = useState(false);

  // Replace these by setting Vite env vars in your .env file:
  // VITE_EMAILJS_SERVICE_ID, VITE_EMAILJS_TEMPLATE_ID, VITE_EMAILJS_PUBLIC_KEY
  const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID || "your_service_id";
  const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || "your_template_id";
  const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || "your_public_key";

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .sendForm(SERVICE_ID, TEMPLATE_ID, form.current, PUBLIC_KEY)
      .then(
        (result) => {
          setLoading(false);
          toast.success("Message sent — I will get back to you soon.");
          e.target.reset();
        },
        (error) => {
          setLoading(false);
          toast.error("Failed to send message. Please try again later.");
          console.error("EmailJS Error:", error);
        }
      );
  };

  return (
    <section
      id="contact"
      className="flex flex-col items-center justify-center py-24 px-[12vw] md:px-[7vw] lg:px-[20vw]"
    >
      <div className="text-center mb-10">
        <h2 className="text-4xl font-bold text-white">CONTACT</h2>
        <div className="w-32 h-1 bg-purple-500 mx-auto mt-4"></div>
        <p className="text-gray-400 mt-4 text-lg font-semibold">
          Want to reach out? Send me a message and I'll reply to your email.
        </p>
      </div>

      <div className="w-full flex justify-center">
        <div className="w-full max-w-md bg-[#0d081f] p-6 rounded-lg shadow-lg border border-gray-700">
          <form ref={form} onSubmit={sendEmail} className="space-y-4">
            <label className="block text-sm text-gray-300">Your Name</label>
            <input
              type="text"
              name="user_name"
              required
              className="w-full p-3 rounded bg-[#080516] text-white border border-gray-700"
            />

            <label className="block text-sm text-gray-300">Your Email</label>
            <input
              type="email"
              name="user_email"
              required
              className="w-full p-3 rounded bg-[#080516] text-white border border-gray-700"
            />

            <label className="block text-sm text-gray-300">Message</label>
            <textarea
              name="message"
              rows="6"
              required
              className="w-full p-3 rounded bg-[#080516] text-white border border-gray-700"
            />

            <button
              type="submit"
              disabled={loading}
              className="w-full text-white py-3 px-4 rounded-full mt-2 text-lg font-bold transition duration-300 transform hover:scale-105"
              style={{
                background: "linear-gradient(90deg, #8245ec, #a855f7)",
                boxShadow: "0 0 2px #8245ec, 0 0 2px #8245ec, 0 0 40px #8245ec",
              }}
            >
              {loading ? "Sending..." : "Send Message"}
            </button>
          </form>
        </div>
      </div>

      <ToastContainer position="top-right" autoClose={4000} />
    </section>
  );
};

export default Contact;
