// src/components/Layout.tsx
import { ReactNode, useRef, useState, useEffect } from "react";
import Header from "./Header";

interface LayoutProps {
  children: (refs: { 
    aboutRef: React.RefObject<HTMLElement | null>;
    clipsRef: React.RefObject<HTMLElement | null>;
    eventsRef: React.RefObject<HTMLElement | null>;
  }) => ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  const aboutRef = useRef<HTMLElement | null>(null);
  const clipsRef = useRef<HTMLElement | null>(null);
  const eventsRef = useRef<HTMLElement | null>(null);
  const [activeSection, setActiveSection] = useState<string | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        // Calculate visible percentage of the section
        const visibleRatio = entry.intersectionRatio;
        const sectionTop = entry.boundingClientRect.top;
        const sectionHeight = entry.boundingClientRect.height;
        
        // Active when at least 40% of section is visible
        if (visibleRatio >= 0.4 || 
            (sectionTop <= window.innerHeight * 0.4 && 
             sectionTop >= -sectionHeight * 0.4)) {
          setActiveSection(entry.target.id);
        }
      });
    }, { 
      threshold: [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1],
      rootMargin: '-25% 0px -25% 0px'
    });
  
  

    const refs = [
      { ref: aboutRef, id: 'about' },
      { ref: clipsRef, id: 'clips' },
      { ref: eventsRef, id: 'events' }
    ];

    refs.forEach(({ ref, id }) => {
      if (ref.current) {
        ref.current.id = id;
        observer.observe(ref.current);
      }
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="scroll-smooth">
      <Header 
        aboutRef={aboutRef} 
        clipsRef={clipsRef} 
        eventsRef={eventsRef} 
        activeSection={activeSection} 
      />
      <main className="pt-20">
        {children({ aboutRef, clipsRef, eventsRef })}
      </main>
    </div>
  );
};

export default Layout;