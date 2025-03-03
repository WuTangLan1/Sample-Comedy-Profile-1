// src/components/Layout.tsx
import { ReactNode, useRef } from "react";
import Header from "./Header";
interface LayoutProps {
  children: (refs: { aboutRef: React.RefObject<HTMLElement | null>; clipsRef: React.RefObject<HTMLElement | null>; eventsRef: React.RefObject<HTMLElement | null>; }) => ReactNode;
}
const Layout = ({ children }: LayoutProps) => {
  const aboutRef = useRef<HTMLElement | null>(null);
  const clipsRef = useRef<HTMLElement | null>(null);
  const eventsRef = useRef<HTMLElement | null>(null);
  return (
    <div className="scroll-smooth">
      <Header aboutRef={aboutRef} clipsRef={clipsRef} eventsRef={eventsRef} />
      <main className="pt-20">
        {children({ aboutRef, clipsRef, eventsRef })}
      </main>
    </div>
  );
};
export default Layout;
