// src/components/AboutMe/AboutMe.tsx
import { motion } from "framer-motion";
import Image from "next/image";

const AboutMe = () => {
  return (
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
            Ever since I was a child, I have been captivated by the magic of
            performance and the transformative power of laughter. My journey
            began with a deep-rooted passion for storytelling, and over the
            years, I have dedicated myself to honing my craft, connecting with
            audiences on a profound and personal level.
          </p>
          {/* Two centered buttons with impressive 3D hover effects */}
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
                  block: "start",
                })
              }
              className="px-6 py-2 bg-red-500 text-white rounded transition transform hover:-translate-y-1 hover:scale-105 hover:shadow-2xl active:scale-95"
            >
              See my Work
            </button>
            <button
              onClick={() =>
                document.getElementById("events")?.scrollIntoView({
                  behavior: "smooth",
                  block: "start",
                })
              }
              className="px-6 py-2 bg-red-500 text-white rounded transition transform hover:-translate-y-1 hover:scale-105 hover:shadow-2xl active:scale-95"
            >
              See me Live
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
  );
};

export default AboutMe;
