// src/components/AboutSection.tsx


import { forwardRef } from "react";
import { motion } from "framer-motion";
const imageVariants = {
  hidden: { scale: 0.6 },
  visible: { scale: 1, transition: { duration: 0.8, ease: "easeInOut" } }
};
const AboutSection = forwardRef<HTMLElement>((_, ref) => {
  return (
    <section ref={ref} id="about" className="min-h-screen relative flex flex-col items-center justify-center bg-gray-100 bg-opacity-30 backdrop-filter backdrop-blur-md bg-[url('/images/backgrounds/aboutbg.svg')] bg-cover bg-center">
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} viewport={{ once: true }} className="relative container mx-auto p-8 bg-white/20 rounded-xl shadow-lg flex flex-col md:flex-row items-center">
        <div className="w-full md:w-1/2 p-4 flex justify-center">
          <motion.img src="/images/profile_photos/profile5.png" alt="Profile" className="w-64 h-64 object-cover rounded-full border-4 border-white shadow-xl" variants={imageVariants} initial="hidden" whileInView="visible" viewport={{ once: true }} />
        </div>
        <div className="w-full md:w-1/2 p-4 text-center md:text-left">
          <h2 className="text-5xl font-bold font-[PlayfairDisplay] mb-4 text-white">About Me</h2>
          <p className="text-xl font-medium text-white">
            I am an emerging comedian passionate about bringing laughter wherever I go. From intimate gigs to large events, I strive to create moments that connect and inspire joy.
          </p>
        </div>
      </motion.div>
      <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.2 }} viewport={{ once: true }} className="relative container mx-auto p-8 mt-12 bg-black/30 rounded-xl shadow-2xl flex flex-col md:flex-row items-center">
        <div className="w-full md:w-1/2 p-4">
          <motion.img src="/images/event_photos/event1.png" alt="Event 1" className="w-full h-auto rounded-lg shadow-lg" variants={imageVariants} initial="hidden" whileInView="visible" viewport={{ once: true }} />
        </div>
        <div className="w-full md:w-1/2 p-4 text-white">
          <h3 className="text-4xl font-bold font-[PlayfairDisplay] mb-4">My Journey to Comedy</h3>
          <p className="text-xl">
            From humble beginnings and personal challenges to discovering the power of humor, my journey has been filled with moments of growth and inspiration that shaped my comedic voice.
          </p>
        </div>
      </motion.div>
      <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.4 }} viewport={{ once: true }} className="relative container mx-auto p-8 mt-12 bg-black/30 rounded-xl shadow-2xl flex flex-col md:flex-row-reverse items-center">
        <div className="w-full md:w-1/2 p-4">
          <motion.img src="/images/event_photos/event2.png" alt="Event 2" className="w-full h-auto rounded-lg shadow-lg" variants={imageVariants} initial="hidden" whileInView="visible" viewport={{ once: true }} />
        </div>
        <div className="w-full md:w-1/2 p-4 text-white">
          <h3 className="text-4xl font-bold font-[PlayfairDisplay] mb-4">What Comedy is Like</h3>
          <p className="text-xl">
            Comedy is a celebration of life’s absurdities. It is unpredictable, deeply personal, and an art that transforms everyday moments into memorable experiences.
          </p>
        </div>
      </motion.div>
      <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.6 }} viewport={{ once: true }} className="relative container mx-auto p-8 mt-12 bg-black/30 rounded-xl shadow-2xl flex flex-col md:flex-row items-center">
        <div className="w-full md:w-1/2 p-4">
          <motion.img src="/images/profile_photos/profile1.png" alt="Profile" className="w-full h-auto rounded-lg shadow-lg" variants={imageVariants} initial="hidden" whileInView="visible" viewport={{ once: true }} />
        </div>
        <div className="w-full md:w-1/2 p-4 text-white">
          <h3 className="text-4xl font-bold font-[PlayfairDisplay] mb-4">Why I Am a Comedian</h3>
          <p className="text-xl">
            My passion for comedy stems from a desire to heal, inspire, and unite. Every laugh is a victory, and every performance is a step toward a brighter, more joyful world.
          </p>
        </div>
      </motion.div>
    </section>
  );
});
AboutSection.displayName = "AboutSection";
export default AboutSection;
