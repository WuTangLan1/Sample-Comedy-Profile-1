// src/components/Header.tsx

// src/components/Header.tsx
import { useState } from "react";
import { motion, animate } from "framer-motion";
import { UserIcon, VideoCameraIcon, CalendarIcon } from "@heroicons/react/24/outline";
const Header = ({ aboutRef, clipsRef, eventsRef }: { aboutRef: React.RefObject<HTMLElement | null>; clipsRef: React.RefObject<HTMLElement | null>; eventsRef: React.RefObject<HTMLElement | null>; }) => {
  const [activeNav, setActiveNav] = useState("");
  const scrollToSection = (ref: React.RefObject<HTMLElement | null>, nav: string) => {
    if (ref.current) {
      const targetY = ref.current.getBoundingClientRect().top + window.scrollY;
      animate(window.scrollY, targetY, {
        duration: 0.8,
        ease: [0.43, 0.13, 0.23, 0.96],
        onUpdate: (value) => window.scrollTo(0, value)
      });
      setActiveNav(nav);
    }
  };
  return (
    <header className="fixed top-0 w-full backdrop-filter backdrop-blur-lg bg-black/30 shadow-lg z-50">
      <nav className="container mx-auto flex justify-between items-center py-4 px-6">
        <div className="flex items-center space-x-4">
          <img src="/images/profile_photos/profile5.png" alt="Profile" className="w-12 h-12 rounded-full border-2 border-white" />
          <div className="text-2xl sm:text-3xl font-bold font-[Poppins] text-white">Comedian Name</div>
        </div>
        <ul className="flex space-x-6">
          <li>
            <div className="relative">
              <motion.button onClick={() => scrollToSection(aboutRef, "about")} whileHover={{ scale: 1.05 }} className="flex items-center space-x-2 text-lg font-medium text-white transition duration-300 focus:outline-none">
                <UserIcon className="h-6 w-6" />
                <span className="hidden sm:inline">About Me</span>
              </motion.button>
              {activeNav === "about" && <motion.div layout className="absolute bottom-0 left-0 h-1 bg-yellow-400 w-full" />}
            </div>
          </li>
          <li>
            <div className="relative">
              <motion.button onClick={() => scrollToSection(clipsRef, "clips")} whileHover={{ scale: 1.05 }} className="flex items-center space-x-2 text-lg font-medium text-white transition duration-300 focus:outline-none">
                <VideoCameraIcon className="h-6 w-6" />
                <span className="hidden sm:inline">Some Clips</span>
              </motion.button>
              {activeNav === "clips" && <motion.div layout className="absolute bottom-0 left-0 h-1 bg-yellow-400 w-full" />}
            </div>
          </li>
          <li>
            <div className="relative">
              <motion.button onClick={() => scrollToSection(eventsRef, "events")} whileHover={{ scale: 1.05 }} className="flex items-center space-x-2 text-lg font-medium text-white transition duration-300 focus:outline-none">
                <CalendarIcon className="h-6 w-6" />
                <span className="hidden sm:inline">Upcoming Events</span>
              </motion.button>
              {activeNav === "events" && <motion.div layout className="absolute bottom-0 left-0 h-1 bg-yellow-400 w-full" />}
            </div>
          </li>
        </ul>
      </nav>
    </header>
  );
};
export default Header;
