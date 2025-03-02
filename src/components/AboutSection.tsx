// src/components/AboutSection.tsx
import { forwardRef } from "react";
import { motion } from "framer-motion";
const AboutSection = forwardRef<HTMLElement>((_, ref) => {
  return (
    <section ref={ref} id="about" className="min-h-screen relative flex items-center justify-center bg-gray-100 bg-opacity-30 backdrop-filter backdrop-blur-md bg-[url('/images/backgrounds/aboutbg.svg')] bg-cover bg-center">
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} viewport={{ once: true }} className="relative container mx-auto p-8 text-center bg-white/20 rounded-xl shadow-lg">
        <h2 className="text-5xl font-bold font-[PlayfairDisplay] mb-4 text-white">About Me</h2>
        <p className="text-xl font-medium text-white">
          I am an emerging comedian passionate about bringing laughter wherever I go. From intimate gigs to large events, I strive to create moments that connect and inspire joy.
        </p>
      </motion.div>
    </section>
  );
});
AboutSection.displayName = "AboutSection";
export default AboutSection;
