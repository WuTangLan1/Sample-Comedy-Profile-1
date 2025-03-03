// src/components/AboutMe/AboutMe.tsx
import { motion } from "framer-motion";
const AboutMe = () => {
  return (
    <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease: [0.33, 1, 0.68, 1] }} className="relative w-full max-w-4xl mx-auto px-4 mb-16 z-10">
      <div className="bg-black/30 rounded-xl shadow-2xl backdrop-blur-lg p-8 flex flex-col md:flex-row items-center gap-8">
        <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.6, delay: 0.2 }} className="flex-1 text-center md:text-left">
          <h2 className="text-5xl font-bold font-[PlayfairDisplay] mb-6 text-white">About Me</h2>
          <p className="text-xl font-medium text-white leading-relaxed">
            Ever since I was a child, I have been captivated by the magic of performance and the transformative power of laughter. My journey began with a deep-rooted passion for storytelling, and over the years, I have dedicated myself to honing my craft, connecting with audiences on a profound and personal level.
          </p>
        </motion.div>
        <motion.div initial={{ scale: 0.8, opacity: 0 }} whileInView={{ scale: 1, opacity: 1 }} transition={{ duration: 0.6, ease: [0.33, 1, 0.68, 1] }} className="flex-shrink-0">
          <img src="/images/profile_photos/profile5.png" alt="Profile" className="w-72 h-72 object-cover rounded-full border-4 border-white shadow-xl" />
        </motion.div>
      </div>
    </motion.div>
  );
};
export default AboutMe;
