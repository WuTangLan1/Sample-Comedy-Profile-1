// src/pages/index.tsx
import { useRef } from "react";
import { motion } from "framer-motion";

const Home = () => {
  const aboutRef = useRef<HTMLElement | null>(null);
  const clipsRef = useRef<HTMLElement | null>(null);
  const eventsRef = useRef<HTMLElement | null>(null);
  const scrollToSection = (ref: React.RefObject<HTMLElement | null>) => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="scroll-smooth">
      <header className="fixed top-0 w-full backdrop-filter backdrop-blur-lg bg-black/30 shadow-lg z-50">
        <nav className="container mx-auto flex justify-between items-center py-4 px-6">
          <div className="text-3xl font-bold font-[PlayfairDisplay] text-white">ComedySite</div>
          <ul className="flex space-x-6">
            <li>
              <button onClick={() => scrollToSection(aboutRef)} className="text-lg font-medium text-white transition duration-300 focus:outline-none">
                About Me
              </button>
            </li>
            <li>
              <button onClick={() => scrollToSection(clipsRef)} className="text-lg font-medium text-white transition duration-300 focus:outline-none">
                Some Clips
              </button>
            </li>
            <li>
              <button onClick={() => scrollToSection(eventsRef)} className="text-lg font-medium text-white transition duration-300 focus:outline-none">
                Upcoming Events
              </button>
            </li>
          </ul>
        </nav>
      </header>
      <main className="pt-24">
        <section ref={aboutRef} id="about" className="min-h-screen flex items-center justify-center bg-gray-100 bg-opacity-30 backdrop-filter backdrop-blur-md">
          <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} viewport={{ once: true }} className="container mx-auto p-8 text-center bg-white/20 rounded-xl shadow-lg">
            <h2 className="text-5xl font-bold font-[PlayfairDisplay] mb-4">About Me</h2>
            <p className="text-xl font-medium">
              I am an emerging comedian passionate about bringing laughter wherever I go. From intimate gigs to large events, I strive to create moments that connect and inspire joy.
            </p>
          </motion.div>
        </section>
        <section ref={clipsRef} id="clips" className="min-h-screen flex items-center justify-center bg-white bg-opacity-30 backdrop-filter backdrop-blur-md">
          <motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.7 }} viewport={{ once: true }} className="container mx-auto p-8 text-center bg-black/20 rounded-xl shadow-lg">
            <h2 className="text-5xl font-bold font-[PlayfairDisplay] mb-4 text-white">Some Clips</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white/30 p-6 rounded-xl shadow-md">
                <h3 className="text-2xl font-semibold font-[PlayfairDisplay] mb-2">Clip 1</h3>
                <p className="text-base">A hilarious moment on stage that left the audience in stitches.</p>
              </div>
              <div className="bg-white/30 p-6 rounded-xl shadow-md">
                <h3 className="text-2xl font-semibold font-[PlayfairDisplay] mb-2">Clip 2</h3>
                <p className="text-base">Behind the scenes fun with a sneak peek into my creative process.</p>
              </div>
              <div className="bg-white/30 p-6 rounded-xl shadow-md">
                <h3 className="text-2xl font-semibold font-[PlayfairDisplay] mb-2">Clip 3</h3>
                <p className="text-base">A quick skit showcasing my signature style and humor.</p>
              </div>
            </div>
          </motion.div>
        </section>
        <section ref={eventsRef} id="events" className="min-h-screen flex items-center justify-center bg-gray-100 bg-opacity-30 backdrop-filter backdrop-blur-md">
          <motion.div initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.7 }} viewport={{ once: true }} className="container mx-auto p-8 text-center bg-white/20 rounded-xl shadow-lg">
            <h2 className="text-5xl font-bold font-[PlayfairDisplay] mb-4">Upcoming Events</h2>
            <ul className="space-y-6">
              <li className="bg-white/30 p-6 rounded-xl shadow-md">
                <h3 className="text-3xl font-semibold font-[PlayfairDisplay] mb-2">Live Stand-Up Night</h3>
                <p className="text-xl">Date: June 25, 2025</p>
                <p className="text-xl">Location: Downtown Comedy Club</p>
              </li>
              <li className="bg-white/30 p-6 rounded-xl shadow-md">
                <h3 className="text-3xl font-semibold font-[PlayfairDisplay] mb-2">Comedy Workshop</h3>
                <p className="text-xl">Date: July 10, 2025</p>
                <p className="text-xl">Location: City Arts Center</p>
              </li>
              <li className="bg-white/30 p-6 rounded-xl shadow-md">
                <h3 className="text-3xl font-semibold font-[PlayfairDisplay] mb-2">Open Mic Evening</h3>
                <p className="text-xl">Date: August 5, 2025</p>
                <p className="text-xl">Location: The Laugh Lounge</p>
              </li>
            </ul>
          </motion.div>
        </section>
      </main>
    </div>
  );
};

export default Home;
