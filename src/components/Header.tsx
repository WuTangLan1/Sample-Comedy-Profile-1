// src/components/Header.tsx
import { UserIcon, VideoCameraIcon, CalendarIcon } from "@heroicons/react/24/outline";

const Header = ({ aboutRef, clipsRef, eventsRef, activeSection }: { 
  aboutRef: React.RefObject<HTMLElement | null>;
  clipsRef: React.RefObject<HTMLElement | null>;
  eventsRef: React.RefObject<HTMLElement | null>;
  activeSection: string | null;
}) => {
  const scrollToSection = (ref: React.RefObject<HTMLElement | null>) => {
    ref.current?.scrollIntoView({ behavior: "smooth", block: 'start' });
  };

  const createLinkClass = (sectionId: string) => 
    `relative group flex items-center space-x-2 text-lg font-medium text-white transition-colors duration-300 focus:outline-none ${
      activeSection === sectionId ? 'text-red-400' : 'hover:text-red-300'
    }`;

  return (
    <header className="fixed top-0 w-full backdrop-filter backdrop-blur-lg bg-black/30 shadow-lg z-50">
      <nav className="container mx-auto flex justify-between items-center py-4 px-6">
        <div className="flex items-center space-x-4">
          <img src="/images/profile_photos/profile5.png" alt="Profile" className="w-12 h-12 rounded-full border-2 border-white" />
          <div className="text-xl sm:text-3xl font-bold font-[PlayfairDisplay] text-white">Citizen Kane</div>
        </div>
        <ul className="flex space-x-6">
          <li>
            <button 
              onClick={() => scrollToSection(aboutRef)}
              className={createLinkClass('about')}
            >
              <UserIcon className="h-6 w-6" />
              <span className="hidden sm:inline">About Me</span>
              <div className={`absolute -bottom-1 left-0 h-1 bg-red-500 transition-all duration-300 ${
                activeSection === 'about' ? '!w-full' : 'w-0 group-hover:w-full'
              }`}></div>
            </button>
          </li>
          <li>
            <button
              onClick={() => scrollToSection(clipsRef)}
              className={createLinkClass('clips')}
            >
              <VideoCameraIcon className="h-6 w-6" />
              <span className="hidden sm:inline">Some Clips</span>
              <div className={`absolute -bottom-1 left-0 h-1 bg-red-500 transition-all duration-300 ${
                activeSection === 'clips' ? '!w-full' : 'w-0 group-hover:w-full'
              }`}></div>
            </button>
          </li>
          <li>
            <button
              onClick={() => scrollToSection(eventsRef)}
              className={createLinkClass('events')}
            >
              <CalendarIcon className="h-6 w-6" />
              <span className="hidden sm:inline">Upcoming Events</span>
              <div className={`absolute -bottom-1 left-0 h-1 bg-red-500 transition-all duration-300 ${
                activeSection === 'events' ? '!w-full' : 'w-0 group-hover:w-full'
              }`}></div>
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
};
export default Header;