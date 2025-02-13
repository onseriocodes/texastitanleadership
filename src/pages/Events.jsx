import React from "react";

// EVENTS
const Events = () => {
  return (
    <>
      <section className="bg-gray-50 py-16 px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Left Side: Text Content */}
          <div>
            <h1 className="text-5xl font-bold text-gray-800 mb-6">Events</h1>
            <p className="text-xl text-gray-700 mb-6">
              Protect your life, health, and future with our range of insurance
              policies tailored to your needs. From health coverage to life
              plans, we are dedicated to keeping you and your loved ones secure.
            </p>
            <p className="text-lg text-gray-600">
              Join thousands who trust us to provide peace of mind through
              flexible options and personalized coverage. Our mission is to help
              you prepare for tomorrow while living confidently today.
            </p>
          </div>

          {/* Right Side: Placeholder Image */}
          <div className="flex justify-center md:justify-end">
            <div className="w-80 h-80 bg-gray-300 rounded-xl overflow-hidden">
              {/* Replace the empty div below with an <img> tag or background image */}
              {/* <img src="path-to-your-image.jpg" alt="Insurance team" className="w-full h-full object-cover" /> */}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Events;
