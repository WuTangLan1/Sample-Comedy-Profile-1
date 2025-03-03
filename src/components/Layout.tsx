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
      let mostVisibleEntry: IntersectionObserverEntry | null = null;
      
      entries.forEach(entry => {
        if (entry.isIntersecting && (!mostVisibleEntry || entry.intersectionRatio > mostVisibleEntry.intersectionRatio)) {
          mostVisibleEntry = entry;
        }
      });
  
      if (mostVisibleEntry?.isIntersecting) {
        setActiveSection(mostVisibleEntry.target.id);
      }
    }, { 
      threshold: [0.25, 0.5, 0.75],
      rootMargin: '-25% 0px -55% 0px'
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