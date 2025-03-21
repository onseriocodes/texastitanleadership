import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import ttlImage from "../assets/ttl.png";
import network from "../assets/network.jpg";
import board from "../assets/board.jpg";

const EventsPage = () => {
  // Addy
  const addy =
    "https://www.google.com/maps/@32.9465015,-96.839227,3a,75y,258.03h,90t/data=!3m7!1e1!3m5!1s0mf5OYZg3sNm4VMgOtZgjA!2e0!6shttps:%2F%2Fstreetviewpixels-pa.googleapis.com%2Fv1%2Fthumbnail%3Fcb_client%3Dmaps_sv.tactile%26w%3D900%26h%3D600%26pitch%3D0%26panoid%3D0mf5OYZg3sNm4VMgOtZgjA%26yaw%3D258.03!7i16384!8i8192?entry=ttu&g_ep=EgoyMDI1MDMxOS4xIKXMDSoJLDEwMjExNjQwSAFQAw%3D%3D";

  // UPCOMING EVENT
  const upcomingEvent = {
    title: "Community Pop Up Shop!",
    date: "2025-03-29T00:00:00",
    times: "1-6pm",
    location: "Addison, TX",
    description: "Join us for our networking & games night!",
    address: "14655 Midway Rd, Suite A Addison, TX 75001",
    image: board,
  };

  // PAST EVENTS
  const pastEvents = [
    {
      id: 1,
      title: "Night of Roses",
      date: "2025-02-17",
      location: "Addison, TX",
      link: "",
    },
    {
      id: 2,
      title: "Night of Elegence",
      date: "2024-11-23",
      location: "The Colony, TX",
      link: "",
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
      <div className="w-full h-[60vh] flex flex-col items-center justify-center text-white text-center p-8 relative bg-cover bg-center bg-blue-500">
        {/* Overlay for readability */}
        <div
          className="absolute inset-0 bg-black bg-opacity-50"
          style={{
            backgroundImage: `url(${upcomingEvent.image})`,
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
        ></div>

        <div className="relative z-10 bg-black rounded-xl p-4">
          <h1 className="text-4xl font-bold mb-2">{upcomingEvent.title}</h1>
          <p className="text-lg">
            {upcomingEvent.location} -{" "}
            {new Date(upcomingEvent.date).toDateString()}{" "}
            <span className="font-semibold ">{upcomingEvent.times}</span>
          </p>

          <NavLink to={addy}>
            <p className="mt-2 text-sm">{upcomingEvent.address}</p>
          </NavLink>

          <p className="mt-2 text-sm">{upcomingEvent.description}</p>
          {timeLeft ? (
            <div className="text-lime-100 mt-4 text-3xl font-semibold">
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
