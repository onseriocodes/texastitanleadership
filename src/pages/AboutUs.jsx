import React from "react";

const AboutUs = () => {
  return (
    <>
      <section className="bg-gray-50 py-16 px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Left Side: Text Content */}
          <div>
            <h1 className="text-5xl font-bold text-gray-800 mb-6">About Us</h1>
            <p className="text-xl text-gray-700 mb-6">
              At Texas Titan Leadership Development, we empower individuals and
              families to achieve financial security, build generational wealth,
              and create a lasting legacy. We specialize in retirement planning,
              life insurance, college savings, and asset protection, ensuring
              financial peace of mind. Beyond financial services, we provide
              mentorship and leadership development, equipping driven
              individuals with the tools to build uncapped income streams and
              establish a business they can pass down for generations. Whether
              you're seeking financial protection or an opportunity to grow,
              Texas Titans is here to help you build, grow, and multiply your
              wealth.
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

export default AboutUs;
