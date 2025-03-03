// src/pages/index.tsx
import { useRef } from "react";
import { UserIcon, VideoCameraIcon, CalendarIcon } from "@heroicons/react/outline";
import AboutSection from "../components/AboutSection";
import ClipsSection from "../components/ClipsSection";
import EventsSection from "../components/EventsSection";
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
          <div className="flex items-center space-x-4">
            <img src="/images/profile_photos/profile5.png" alt="Profile" className="w-12 h-12 rounded-full border-2 border-white" />
            <div className="text-3xl font-bold font-[PlayfairDisplay] text-white">ComedySite</div>
          </div>
          <ul className="flex space-x-6">
            <li>
              <button onClick={() => scrollToSection(aboutRef)} className="flex items-center space-x-2 text-lg font-medium text-white transition duration-300 focus:outline-none">
                <UserIcon className="h-6 w-6" />
                <span className="hidden sm:inline">About Me</span>
              </button>
            </li>
            <li>
              <button onClick={() => scrollToSection(clipsRef)} className="flex items-center space-x-2 text-lg font-medium text-white transition duration-300 focus:outline-none">
                <VideoCameraIcon className="h-6 w-6" />
                <span className="hidden sm:inline">Some Clips</span>
              </button>
            </li>
            <li>
              <button onClick={() => scrollToSection(eventsRef)} className="flex items-center space-x-2 text-lg font-medium text-white transition duration-300 focus:outline-none">
                <CalendarIcon className="h-6 w-6" />
                <span className="hidden sm:inline">Upcoming Events</span>
              </button>
            </li>
          </ul>
        </nav>
      </header>
      <main className="pt-24">
        <AboutSection ref={aboutRef} />
        <ClipsSection ref={clipsRef} />
        <EventsSection ref={eventsRef} />
      </main>
    </div>
  );
};
export default Home;
