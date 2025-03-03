// src/components/ClipsSection.tsx

import { forwardRef } from "react";
const ClipsSection = forwardRef<HTMLElement>((_, ref) => {
  return (
    <section ref={ref} id="clips" className="min-h-screen relative flex flex-col items-center justify-center bg-white bg-opacity-30 backdrop-filter backdrop-blur-md bg-[url('/images/backgrounds/clipsbg.svg')] bg-cover bg-center">
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative container mx-auto p-8 bg-black/20 rounded-xl shadow-lg mt-10 w-full max-w-6xl">
        <div className="flex flex-col items-start text-left">
          <h2 className="text-5xl font-bold font-[PlayfairDisplay] mb-4 text-white">Event 1: Comedic Extravaganza</h2>
          <p className="text-white text-lg mb-4">An unforgettable night filled with laughter and unexpected twists.</p>
          <div className="flex justify-center w-full">
            <video preload="auto" controls className="w-full max-w-lg rounded-xl shadow-md" poster="/images/posters/event1.jpg">
              <source src="/videos/promovid1.mp4" type="video/mp4" />
            </video>
          </div>
          <p className="text-white text-base mt-4">The set for this performance was meticulously designed to capture the vibrant energy of the evening, complementing the clip above with dynamic lighting and creative backdrops that enhanced every punchline.</p>
        </div>
      </div>
      <div className="relative container mx-auto p-8 bg-black/20 rounded-xl shadow-lg mt-10 w-full max-w-6xl">
        <div className="flex flex-col items-end text-right">
          <h2 className="text-5xl font-bold font-[PlayfairDisplay] mb-4 text-white">Event 2: Live Improv Night</h2>
          <p className="text-white text-lg mb-4">Experience raw energy and spontaneous humor in this live improv showcase.</p>
          <div className="flex justify-center w-full">
            <video preload="auto" controls className="w-full max-w-lg rounded-xl shadow-md" poster="/images/posters/event2.jpg">
              <source src="/videos/promovid2.mp4" type="video/mp4" />
            </video>
          </div>
          <p className="text-white text-base mt-4">The set for this performance was crafted with an emphasis on spontaneity, featuring innovative design elements that echoed the improvisational spirit and elevated the humor showcased in the clip above.</p>
        </div>
      </div>
    </section>
  );
});
ClipsSection.displayName = "ClipsSection";
export default ClipsSection;

