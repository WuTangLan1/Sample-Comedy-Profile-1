// src/pages/index.tsx
import AboutSection from "../components/AboutSection";
import ClipsSection from "../components/ClipsSection";
import EventsSection from "../components/EventsSection";
import Layout from "../components/Layout";
const Home = () => {
  return (
    <Layout>
      {({ aboutRef, clipsRef, eventsRef }) => (
        <>
          <AboutSection ref={aboutRef} />
          <ClipsSection ref={clipsRef} />
          <EventsSection ref={eventsRef} />
        </>
      )}
    </Layout>
  );
};
export default Home;
