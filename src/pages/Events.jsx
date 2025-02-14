import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";

// EVENTS
const Events = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to the top of the page
  }, [pathname]);
  return (
    <>
      <section className="bg-gray-50 py-16 px-8 flex flex-col items-center justify-center min-h-screen text-center">
        <div className="max-w-3xl">
          <h1 className="text-5xl font-bold text-gray-800 mb-4">Events</h1>
          <p className="text-2xl text-gray-700 mb-6">
            Stay tuned! Exciting events are on the way.
          </p>
          <p className="text-lg text-gray-600 mb-8">
            We are working on bringing you valuable and insightful events. Check
            back soon for updates!
          </p>
          <div className="    rounded-xl flex items-center justify-center text-gray-500 text-xl">
            🚧 Coming Soon 🚧
          </div>
        </div>
      </section>
    </>
  );
};

export default Events;
