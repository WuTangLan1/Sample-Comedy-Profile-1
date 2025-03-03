// src/components/EventsSection.tsx
import { forwardRef } from "react";
const EventsSection = forwardRef<HTMLElement>((_, ref) => {
  return (
    <section ref={ref} id="events" className="min-h-screen relative flex items-center justify-center bg-black bg-[url('/images/backgrounds/eventsbg.svg')] bg-cover bg-center">
      <div className="absolute inset-0 bg-black opacity-60"></div>
      <div className="relative container mx-auto p-8 text-center bg-black/50 rounded-xl shadow-2xl max-w-full">
        <h2 className="text-5xl font-bold font-[PlayfairDisplay] mb-4 text-white">Upcoming Events</h2>
        <ul className="space-y-6">
          <li className="bg-black/40 p-6 rounded-xl shadow-md">
            <h3 className="text-3xl font-semibold font-[PlayfairDisplay] mb-2 text-white">Live Stand-Up Night</h3>
            <p className="text-xl text-white">Date: June 25, 2025</p>
            <p className="text-xl text-white">Location: Downtown Comedy Club</p>
          </li>
          <li className="bg-black/40 p-6 rounded-xl shadow-md">
            <h3 className="text-3xl font-semibold font-[PlayfairDisplay] mb-2 text-white">Comedy Workshop</h3>
            <p className="text-xl text-white">Date: July 10, 2025</p>
            <p className="text-xl text-white">Location: City Arts Center</p>
          </li>
          <li className="bg-black/40 p-6 rounded-xl shadow-md">
            <h3 className="text-3xl font-semibold font-[PlayfairDisplay] mb-2 text-white">Open Mic Evening</h3>
            <p className="text-xl text-white">Date: August 5, 2025</p>
            <p className="text-xl text-white">Location: The Laugh Lounge</p>
          </li>
        </ul>
      </div>
    </section>
  );
});
EventsSection.displayName = "EventsSection";
export default EventsSection;
