import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import ttl from "../assets/ttl.png";

const EventsPage = () => {
  // UPCOMING EVENT
  const upcomingEvent = {
    title: "Community Pop Up Shop!",
    date: "2025-03-29T00:00:00",
    location: "Addison, TX",
    description: "Join industry leaders in AI, Web3, and Cloud Computing.",
    image: ttl,
  };

  // PAST EVENTS
  const pastEvents = [
    {
      id: 1,
      title: "Night of Roses",
      date: "2025-02-17",
      location: "The Colony, TX",
      link: "/events/1",
    },
    {
      id: 2,
      title: "Night of Elegence",
      date: "2024-11-23",
      location: "The Colony, TX",
      link: "/events/2",
    },
  ];

  // COUNTDOWN TIMER
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  function calculateTimeLeft() {
    const eventDate = new Date(upcomingEvent.date).getTime();
    const now = new Date().getTime();
    const difference = eventDate - now;

    if (difference <= 0) return null; // Event started

    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((difference / (1000 * 60)) % 60);
    const seconds = Math.floor((difference / 1000) % 60);

    return { days, hours, minutes, seconds };
  }

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="w-full">
      {/* Upcoming Event Banner */}
      <div
        className="w-full h-[60vh] flex flex-col items-center justify-center text-white text-center p-8 relative bg-cover bg-center"
        style={{ backgroundImage: `url(${upcomingEvent.image})` }}
      >
        {/* Overlay for readability */}
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>

        <div className="relative z-10">
          <h1 className="text-4xl font-bold mb-2">{upcomingEvent.title}</h1>
          <p className="text-lg">
            {upcomingEvent.location} -{" "}
            {new Date(upcomingEvent.date).toDateString()}
          </p>
          <p className="mt-2 text-sm">{upcomingEvent.description}</p>

          {timeLeft ? (
            <div className="mt-4 text-3xl font-semibold">
              {timeLeft.days}d {timeLeft.hours}h {timeLeft.minutes}m{" "}
              {timeLeft.seconds}s
            </div>
          ) : (
            <div className="mt-4 text-xl font-semibold">Event is Live!</div>
          )}
        </div>
      </div>

      {/* Past Events List */}
      <section className="max-w-4xl mx-auto p-6">
        <h2 className="text-2xl text-center font-semibold mb-4">Past Events</h2>
        <div className="grid gap-4">
          {pastEvents.map((event) => (
            <NavLink to={event.link} key={event.id} className="block">
              <div className="border p-4 rounded-lg shadow-md bg-gray-100 hover:bg-gray-200 transition cursor-pointer">
                <h3 className="text-lg font-bold">{event.title}</h3>
                <p className="text-sm text-gray-600">
                  {event.date} - {event.location}
                </p>
              </div>
            </NavLink>
          ))}
        </div>
      </section>
    </div>
  );
};

export default EventsPage;
