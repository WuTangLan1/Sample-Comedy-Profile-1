import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useState } from "react";

const AboutMe = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [date, setDate] = useState("");
  const [showName, setShowName] = useState("");
  const [message, setMessage] = useState("");
  const isFormValid = name.trim() !== "" && email.trim() !== "" && date.trim() !== "" && showName.trim() !== "" && message.trim() !== "";
  const handleSubmit = (e) => {
    e.preventDefault();
    setModalOpen(false);
    setName("");
    setEmail("");
    setDate("");
    setShowName("");
    setMessage("");
  };
  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.33, 1, 0.68, 1] }}
        className="relative w-full max-w-4xl mx-auto px-4 mb-16 z-10"
      >
        <div className="bg-black/30 rounded-xl shadow-2xl backdrop-blur-lg p-8 flex flex-col md:flex-row items-center gap-8">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex-1 text-center md:text-left"
          >
            <h2 className="text-5xl font-bold font-[PlayfairDisplay] mb-6 text-white">
              About Me
            </h2>
            <p className="text-xl font-medium text-white leading-relaxed">
              Ever since I was a child, I have been captivated by the magic of performance and the transformative power of laughter. My journey began with a deep-rooted passion for storytelling, and over the years, I have dedicated myself to honing my craft, connecting with audiences on a profound and personal level.
            </p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex justify-center mt-6 space-x-4"
            >
              <button
                onClick={() =>
                  document.getElementById("clips")?.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                  })
                }
                className="btn"
              >
                See my Work
              </button>
              <button
                onClick={() =>
                  document.getElementById("events")?.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                  })
                }
                className="btn"
              >
                See me Live
              </button>
              <button
                onClick={() => setModalOpen(true)}
                className="btn"
              >
                Get in Touch
              </button>
            </motion.div>
          </motion.div>
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6, ease: [0.33, 1, 0.68, 1] }}
            className="flex-shrink-0"
          >
            <Image
              src="/images/profile_photos/profile5.png"
              alt="Profile"
              width={288}
              height={288}
              className="rounded-full border-4 border-white shadow-xl"
            />
          </motion.div>
        </div>
      </motion.div>
      <AnimatePresence>
        {modalOpen && (
          <motion.div
            initial={{ opacity: 0, y: -50, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -50, scale: 0.8 }}
            transition={{ duration: 0.5, type: "spring", stiffness: 300, damping: 25 }}
            className="fixed inset-0 z-50 flex items-start justify-center bg-black bg-opacity-50 pt-12"
          >
            <motion.div
              className="relative bg-gray-900 text-white rounded-lg shadow-xl w-11/12 max-w-lg p-8"
              transition={{ duration: 0.5 }}
            >
              <button type="button" onClick={() => setModalOpen(false)} className="absolute top-4 right-4 text-white text-xl font-bold">
                ×
              </button>
              <h3 className="text-2xl font-bold mb-4 text-center">Book a Comedian</h3>
              <form onSubmit={handleSubmit} className="space-y-4">
                <input
                  type="text"
                  placeholder="Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-700 bg-gray-800 text-white rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <input
                  type="email"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-700 bg-gray-800 text-white rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <input
                  type="date"
                  placeholder="Event Date"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-700 bg-gray-800 text-white rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <input
                  type="text"
                  placeholder="Show Name"
                  value={showName}
                  onChange={(e) => setShowName(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-700 bg-gray-800 text-white rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <textarea
                  placeholder="Message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-700 bg-gray-800 text-white rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <button
                  type="submit"
                  disabled={!isFormValid}
                  className={`btn w-full ${!isFormValid ? "opacity-50 cursor-not-allowed" : ""}`}
                >
                  Submit
                </button>
              </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default AboutMe;
