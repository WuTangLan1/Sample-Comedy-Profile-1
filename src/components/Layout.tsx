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
    let maxRatio = 0;
    let currentId: string | null = null;
    
    entries.forEach((entry) => {
      // Track whichever section has the highest visibility
      if (entry.intersectionRatio > maxRatio) {
        maxRatio = entry.intersectionRatio;
        currentId = entry.target.id;
      }
    });
    
    // Only set activeSection if a section is at least 20% visible
    if (currentId && maxRatio >= 0.2) {
      setActiveSection(currentId);
    }
  }, {
    threshold: [0, 0.2, 0.4, 0.6, 0.8, 1],
    rootMargin: '-25% 0px -25% 0px',
  });

  [aboutRef, clipsRef, eventsRef].forEach((sectionRef) => {
    if (sectionRef.current) observer.observe(sectionRef.current);
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