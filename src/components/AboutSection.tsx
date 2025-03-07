// src/components/AboutSection.tsx
import { forwardRef, useRef, useEffect } from "react";
import { motion, useInView, useAnimation } from "framer-motion";
import AboutMe from "./AboutMe/AboutMe";
interface AnimatedImageProps {
  src: string;
  alt: string;
  className?: string;
}
const imageVariants = {
  hidden: {
    scale: 0.85,
    opacity: 0,
    filter: "blur(12px)"
  },
  visible: {
    scale: 1,
    opacity: 1,
    filter: "blur(0px)",
    transition: {
      type: "spring",
      stiffness: 80,
      damping: 20,
      mass: 0.5,
      duration: 0.8
    }
  }
};
const AnimatedImage: React.FC<AnimatedImageProps> = ({ src, alt, className }) => {
  const ref = useRef(null);
  const inView = useInView(ref, {
    margin: "0px 0px -50px 0px",
    amount: 0.6,
    once: false
  });
  const controls = useAnimation();
  useEffect(() => {
    controls.start(inView ? "visible" : "hidden");
  }, [inView, controls]);
  return (
    <motion.img
      ref={ref}
      src={src}
      alt={alt}
      className={`${className} [will-change:transform,opacity,filter]`}
      initial="hidden"
      animate={controls}
      variants={imageVariants}
      exit="hidden"
    />
  );
};
const AboutSection = forwardRef<HTMLElement>((_, ref) => {
  return (
    <section ref={ref} className="min-h-screen pt-32 relative flex flex-col items-center bg-gray-100 bg-opacity-30 backdrop-filter backdrop-blur-md bg-[url('/images/backgrounds/aboutbg.svg')] bg-cover bg-center">
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <AboutMe />
      <motion.div initial={{ opacity: 0.5, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.2 }} className="relative container mx-auto p-8 mt-12 bg-black/30 rounded-xl shadow-2xl flex flex-col md:flex-row items-center">
        <div className="w-full md:w-1/2 p-4">
          <AnimatedImage src="/images/event_photos/event1.png" alt="Event 1" className="w-full h-auto rounded-lg shadow-lg" />
        </div>
        <div className="w-full md:w-1/2 p-4 sm:p-12 text-white relative">
          <div className="absolute inset-0 bg-[url('/images/text-backgrounds/bg1.webp')] bg-cover bg-center bg-no-repeat opacity-50"></div>
          <div className="relative z-10 pl-0 pr-0 pt-8 pb-8 sm:pl-8 sm:pr-8 sm:pt-2 sm:pb-2">
            <h3 className="text-4xl font-bold font-[PlayfairDisplay] mb-4">My Journey to Comedy</h3>
            <p className="text-xl p-4 rounded-md shadow-md">
              Growing up in a small town, I discovered humor in the simplest moments. The road to comedy has been a mosaic of challenges, personal triumphs, and countless open mic nights that pushed me beyond my comfort zone. Every stage I have graced has contributed to my growth, shaping my unique voice and fueling my commitment to authenticity.
            </p>
          </div>
        </div>
      </motion.div>
      <motion.div initial={{ opacity: 0.5, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.4 }} className="relative container mx-auto p-8 mt-12 bg-black/30 rounded-xl shadow-2xl flex flex-col md:flex-row-reverse items-center">
        <div className="w-full md:w-1/2 p-4">
          <AnimatedImage src="/images/event_photos/event2.png" alt="Event 2" className="w-full h-auto rounded-lg shadow-lg" />
        </div>
        <div className="w-full md:w-1/2 p-4 sm:p-12 text-white relative">
          <div className="absolute inset-0 bg-[url('/images/text-backgrounds/bg2.webp')] bg-cover bg-center bg-no-repeat opacity-50"></div>
          <div className="relative z-10 pl-0 pr-0 pt-8 pb-8 sm:pl-8 sm:pr-8 sm:pt-2 sm:pb-2">
            <h3 className="text-4xl font-bold font-[PlayfairDisplay] mb-4">What Comedy is Like</h3>
            <p className="text-xl">
              Comedy is more than just a series of jokes—it&apos;s a way of life that transforms pain into art and struggles into shared moments of joy. It&apos;s a raw, honest conversation where every laugh builds a bridge of connection, turning everyday challenges into sources of inspiration and resilience.
            </p>
          </div>
        </div>
      </motion.div>
      <motion.div initial={{ opacity: 0.5, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.6 }} className="relative container mx-auto p-8 mt-12 bg-black/30 rounded-xl shadow-2xl flex flex-col md:flex-row items-center">
        <div className="w-full md:w-1/2 p-4">
          <AnimatedImage src="/images/profile_photos/profile1.png" alt="Profile" className="w-full h-auto rounded-lg shadow-lg" />
        </div>
        <div className="w-full md:w-1/2 p-4 sm:p-12 text-white relative">
          <div className="absolute inset-0 bg-[url('/images/text-backgrounds/bg3.webp')] bg-cover bg-center bg-no-repeat opacity-50"></div>
          <div className="relative z-10 pl-0 pr-0 pt-8 pb-8 sm:pl-8 sm:pr-8 sm:pt-2 sm:pb-2">
            <h3 className="text-4xl font-bold font-[PlayfairDisplay] mb-4">Why I Am a Comedian</h3>
            <p className="text-xl">
              My choice to embrace comedy stems from a deep, personal belief in the healing power of laughter. Every performance is an opportunity to break down barriers, foster genuine connections, and bring light into dark places. I pour my heart into every act, determined to create a community where vulnerability is celebrated and every laugh echoes a shared human experience.
            </p>
          </div>
        </div>
      </motion.div>
    </section>
  );
});
AboutSection.displayName = "AboutSection";
export default AboutSection;
