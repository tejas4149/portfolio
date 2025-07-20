import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import "react-toastify/dist/ReactToastify.css";

const Contact = () => {
  const form = useRef();
  const [isSending, setIsSending] = useState(false);

  const sendEmail = async (e) => {
    e.preventDefault();
    setIsSending(true);

    try {
      await emailjs.sendForm(
        "service_3dpjvzb", // Service ID
        "template_tkt3zui", // Template ID
        form.current, // Form reference
        "eqF0_lvtCiO1uldB2" // Public Key
      );
      form.current.reset();
      toast.success("Message sent successfully ✅", {
        position: "top-right",
        autoClose: 3000,
        theme: "dark",
      });
    } catch (error) {
      console.error("Email send error:", error);
      toast.error("Failed to send message ❌", {
        position: "top-right",
        autoClose: 3000,
        theme: "dark",
      });
    } finally {
      setIsSending(false);
    }
  };

  return (
    <section
      id="contact"
      className="py-10 px-[10vw] md:px-[7vw] lg:px-[15vw] bg-gradient-to-br from-[#0f0c29] via-[#302b63] to-[#24243e] text-white"
    >
      <ToastContainer />

      <div className="text-center mb-2">
        <h2 className="text-4xl font-bold">📬 Contact Me</h2>
        <div className="w-24 h-1 bg-purple-500 mx-auto mt-3 rounded-full" />
        <p className="text-gray-300 mt-4 text-lg max-w-2xl mx-auto">
          I'm open to work and collaboration. Feel free to get in touch!
        </p>
      </div>

      <div className="bg-[#1b1b2f] border border-[#2a2a40] rounded-2xl p-8 shadow-md max-w-3xl mx-auto">
        <form ref={form} onSubmit={sendEmail} className="flex flex-col gap-5">
          <input
            type="text"
            name="user_name"
            placeholder="Your Name"
            required
            className="w-full p-3 rounded-md bg-[#1b152e] text-white border border-gray-600 focus:outline-none focus:border-purple-500"
          />
          <input
            type="email"
            name="user_email"
            placeholder="Your Email"
            required
            className="w-full p-3 rounded-md bg-[#1b152e] text-white border border-gray-600 focus:outline-none focus:border-purple-500"
          />
          <input
            type="text"
            name="subject"
            placeholder="Subject"
            required
            className="w-full p-3 rounded-md bg-[#1b152e] text-white border border-gray-600 focus:outline-none focus:border-purple-500"
          />
          <textarea
            name="message"
            placeholder="Your Message"
            rows="5"
            required
            className="w-full p-3 rounded-md bg-[#1b152e] text-white border border-gray-600 focus:outline-none focus:border-purple-500"
          />

          <button
            type="submit"
            disabled={isSending}
            className={`bg-purple-600 hover:bg-purple-700 py-3 text-white font-semibold rounded-md transition-all duration-300 ${
              isSending ? "opacity-50 cursor-not-allowed" : ""
            }`}
          >
            {isSending ? "Sending..." : "Send Message"}
          </button>
        </form>

        {/* Social Icons */}
        <div className="flex justify-center gap-6 mt-8">
          <a
            href="https://github.com/tejas4149"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white text-2xl transition"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/tejas-yadav-84bb77284/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white text-2xl transition"
          >
            <FaLinkedin />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
