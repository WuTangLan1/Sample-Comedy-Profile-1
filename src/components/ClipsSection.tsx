// src/components/ClipsSection.tsx
import { forwardRef } from "react";
import { motion } from "framer-motion";
const ClipsSection = forwardRef<HTMLElement>((_, ref) => {
  return (
    <section ref={ref} id="clips" className="min-h-screen flex items-center justify-center bg-white bg-opacity-30 backdrop-filter backdrop-blur-md">
      <motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.7 }} viewport={{ once: true }} className="container mx-auto p-8 text-center bg-black/20 rounded-xl shadow-lg">
        <h2 className="text-5xl font-bold font-[PlayfairDisplay] mb-4 text-white">Some Clips</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white/30 p-6 rounded-xl shadow-md">
            <h3 className="text-2xl font-semibold font-[PlayfairDisplay] mb-2">Clip 1</h3>
            <p className="text-base">A hilarious moment on stage that left the audience in stitches.</p>
          </div>
          <div className="bg-white/30 p-6 rounded-xl shadow-md">
            <h3 className="text-2xl font-semibold font-[PlayfairDisplay] mb-2">Clip 2</h3>
            <p className="text-base">Behind the scenes fun with a sneak peek into my creative process.</p>
          </div>
          <div className="bg-white/30 p-6 rounded-xl shadow-md">
            <h3 className="text-2xl font-semibold font-[PlayfairDisplay] mb-2">Clip 3</h3>
            <p className="text-base">A quick skit showcasing my signature style and humor.</p>
          </div>
        </div>
      </motion.div>
    </section>
  );
});
ClipsSection.displayName = "ClipsSection";
export default ClipsSection;
