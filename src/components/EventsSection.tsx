import { forwardRef } from "react";

interface Event {
  title: string;
  date: string;
  location: string;
  image: string;
  website: string;
  tickets: string;
}

const eventItems: Event[] = [
  {
    title: "Live Stand-Up Night",
    date: "June 25, 2025",
    location: "Downtown Comedy Club",
    image: "/images/event_photos/event3.png",
    website: "https://comedywebsite.com/event3",
    tickets: "https://tickets.com/event3"
  },
  {
    title: "Comedy Workshop",
    date: "July 10, 2025",
    location: "City Arts Center",
    image: "/images/event_photos/event4.png",
    website: "https://comedywebsite.com/event4",
    tickets: "https://tickets.com/event4"
  },
  {
    title: "Open Mic Evening",
    date: "August 5, 2025",
    location: "The Laugh Lounge",
    image: "/images/event_photos/event5.png",
    website: "https://comedywebsite.com/event5",
    tickets: "https://tickets.com/event5"
  }
];

const EventItem: React.FC<{ event: Event }> = ({ event }) => {
  return (
    <div className="bg-black/40 p-6 rounded-xl shadow-lg flex flex-col">
      <img src={event.image} alt={event.title} className="w-full h-48 object-cover rounded-lg shadow-md mb-4" />
      <div className="flex flex-col items-center text-white">
        <h3 className="text-2xl md:text-3xl font-bold font-[PlayfairDisplay] mb-2">{event.title}</h3>
        <p className="text-lg md:text-xl">Date: {event.date}</p>
        <p className="text-lg md:text-xl mb-3">Location: {event.location}</p>
        <div className="flex space-x-4">
          <a href={event.website} target="_blank" rel="noopener noreferrer" className="px-4 py-2 bg-white text-black font-bold rounded hover:bg-gray-200 transition duration-200">Website</a>
          <a href={event.tickets} target="_blank" rel="noopener noreferrer" className="px-4 py-2 bg-white text-black font-bold rounded hover:bg-gray-200 transition duration-200">Tickets</a>
        </div>
      </div>
    </div>
  );
};

const EventsSection = forwardRef<HTMLElement>((_, ref) => {
  return (
    <section ref={ref} id="events" className="min-h-screen relative flex flex-col items-center justify-center bg-black bg-[url('/images/backgrounds/eventsbg.svg')] bg-cover bg-center py-12">
      <div className="absolute inset-0 bg-black opacity-60"></div>
      <div className="relative container mx-auto p-8 text-center bg-black/50 rounded-xl shadow-2xl max-w-full">
        <h2 className="text-4xl md:text-5xl font-bold font-[PlayfairDisplay] mb-8 text-white">Upcoming Events</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {eventItems.map((event, index) => (
            <EventItem key={index} event={event} />
          ))}
        </div>
      </div>
    </section>
  );
});
EventsSection.displayName = "EventsSection";
export default EventsSection;
