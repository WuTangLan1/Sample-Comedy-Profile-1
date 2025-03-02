// src/components/EventsSection.tsx
import { forwardRef } from "react";
import { motion } from "framer-motion";
const EventsSection = forwardRef<HTMLElement>((_, ref) => {
  return (
    <section ref={ref} id="events" className="min-h-screen flex items-center justify-center bg-gray-100 bg-opacity-30 backdrop-filter backdrop-blur-md">
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
  );
});
EventsSection.displayName = "EventsSection";
export default EventsSection;
