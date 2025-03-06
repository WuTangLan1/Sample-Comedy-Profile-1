// src/components/Layout.tsx
import { ReactNode, useRef } from "react";
import Footer from "./Footer"; 

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


  return (
    <div className="scroll-smooth flex flex-col min-h-screen">
    <main className="flex-grow">
      {children({ aboutRef, clipsRef, eventsRef })}
    </main>
    <Footer />
  </div>
  );
};

export default Layout;