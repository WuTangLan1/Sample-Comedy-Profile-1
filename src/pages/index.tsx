// src\pages\index.tsx

import { useRef } from "react";
import { motion } from "framer-motion";

const Home = () => {
  const aboutRef = useRef<HTMLElement | null>(null);
  const clipsRef = useRef<HTMLElement | null>(null);
  const eventsRef = useRef<HTMLElement | null>(null);

  // Function to scroll smoothly to a section
  const scrollToSection = (ref: React.RefObject<HTMLElement | null>) => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="scroll-smooth">
      {/* Header with Navigation */}
      <header className="fixed top-0 w-full bg-white shadow z-50">
        <nav className="container mx-auto flex justify-between items-center py-4 px-6">
          <div className="text-2xl font-bold">ComedySite</div>
          <ul className="flex space-x-6">
            <li>
              <button
                onClick={() => scrollToSection(aboutRef)}
                className="hover:text-blue-500 transition duration-300 focus:outline-none"
              >
                About Me
              </button>
            </li>
            <li>
              <button
                onClick={() => scrollToSection(clipsRef)}
                className="hover:text-blue-500 transition duration-300 focus:outline-none"
              >
                Some Clips
              </button>
            </li>
            <li>
              <button
                onClick={() => scrollToSection(eventsRef)}
                className="hover:text-blue-500 transition duration-300 focus:outline-none"
              >
                Upcoming Events
              </button>
            </li>
          </ul>
        </nav>
      </header>

      {/* Main Content */}
      <main className="pt-20">
        {/* About Me Section */}
        <section
          ref={aboutRef}
          id="about"
          className="min-h-screen flex items-center justify-center bg-gray-100"
        >
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="container mx-auto p-8 text-center"
          >
            <h2 className="text-4xl font-bold mb-4">About Me</h2>
            <p className="text-lg">
              I am an emerging comedian passionate about bringing laughter
              wherever I go. From intimate gigs to large events, I strive to
              create moments that connect and inspire joy.
            </p>
          </motion.div>
        </section>

        {/* Some Clips Section */}
        <section
          ref={clipsRef}
          id="clips"
          className="min-h-screen flex items-center justify-center bg-white"
        >
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="container mx-auto p-8 text-center"
          >
            <h2 className="text-4xl font-bold mb-4">Some Clips</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-gray-200 p-4 rounded shadow">
                <h3 className="font-semibold">Clip 1</h3>
                <p>A hilarious moment on stage that left the audience in stitches.</p>
              </div>
              <div className="bg-gray-200 p-4 rounded shadow">
                <h3 className="font-semibold">Clip 2</h3>
                <p>Behind the scenes fun with a sneak peek into my creative process.</p>
              </div>
              <div className="bg-gray-200 p-4 rounded shadow">
                <h3 className="font-semibold">Clip 3</h3>
                <p>A quick skit showcasing my signature style and humor.</p>
              </div>
            </div>
          </motion.div>
        </section>

        {/* Upcoming Events Section */}
        <section
          ref={eventsRef}
          id="events"
          className="min-h-screen flex items-center justify-center bg-gray-100"
        >
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="container mx-auto p-8 text-center"
          >
            <h2 className="text-4xl font-bold mb-4">Upcoming Events</h2>
            <ul className="space-y-4">
              <li className="bg-white p-4 shadow rounded">
                <h3 className="text-2xl font-semibold">Live Stand-Up Night</h3>
                <p>Date: June 25, 2025</p>
                <p>Location: Downtown Comedy Club</p>
              </li>
              <li className="bg-white p-4 shadow rounded">
                <h3 className="text-2xl font-semibold">Comedy Workshop</h3>
                <p>Date: July 10, 2025</p>
                <p>Location: City Arts Center</p>
              </li>
              <li className="bg-white p-4 shadow rounded">
                <h3 className="text-2xl font-semibold">Open Mic Evening</h3>
                <p>Date: August 5, 2025</p>
                <p>Location: The Laugh Lounge</p>
              </li>
            </ul>
          </motion.div>
        </section>
      </main>
    </div>
  );
};

export default Home;
