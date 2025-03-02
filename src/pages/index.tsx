// src/pages/index.tsx
import { useRef } from "react";
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
        <AboutSection ref={aboutRef} />
        <ClipsSection ref={clipsRef} />
        <EventsSection ref={eventsRef} />
      </main>
    </div>
  );
};
export default Home;
