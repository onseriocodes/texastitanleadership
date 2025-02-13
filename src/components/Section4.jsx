import React from "react";
import greenMan from "../assets/greenMan.svg";
import woman from "../assets/woman.jpg";

const Section4 = () => {
  return (
    <>
      <section className="bg-gray-100 py-16 px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Left Side: SVG Illustration */}
          <div className="flex justify-center md:justify-start">
            <img className="mx-auto h-74" src={greenMan} alt="" />
          </div>

          {/* Right Side: Content */}
          <div>
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              Helping to chose the right protection
            </h2>
            <p className="text-lg text-gray-600 mb-4">
              Insurance is more than a policy—it’s peace of mind. Our life and
              health insurance plans are designed to give you and your loved
              ones the security you deserve. With flexible options, you can plan
              for tomorrow without compromising on today.
            </p>
            <p className="text-lg text-gray-600">
              Whether you're safeguarding your family's future or managing
              health expenses, we’re here to help you every step of the way.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Section4;
