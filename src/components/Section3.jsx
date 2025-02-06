import React from "react";

const Section3 = () => {
  return (
    <>
      <section className="bg-sky-500 text-white p-6 rounded-lg py-16 px-8">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-4">Our popular accounts</h2>
          <p className="text-lg mb-8">
            Explore some of our most stand out policies
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white text-gray-800 rounded-2xl shadow-lg p-6 transition-transform transform hover:scale-105">
              <h3 className="text-2xl font-semibold mb-2">Living Benefits</h3>
              <p className="text-sm mb-4">
                Craft stunning visuals that captivate and leave lasting
                impressions. From digital art to graphic design, let your
                imagination run wild.
              </p>
              <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded">
                Learn More
              </button>
            </div>

            <div className="bg-white text-gray-800 rounded-2xl shadow-lg p-6 transition-transform transform hover:scale-105">
              <h3 className="text-2xl font-semibold mb-2">IUL</h3>
              <p className="text-sm mb-4">
                Build compelling narratives and strategies that drive engagement
                and growth across platforms. Reach your audience with purpose.
              </p>
              <button className="bg-indigo-500 hover:bg-indigo-600 text-white font-semibold py-2 px-4 rounded">
                Learn More
              </button>
            </div>

            <div className="bg-white text-gray-800 rounded-2xl shadow-lg p-6 transition-transform transform hover:scale-105">
              <h3 className="text-2xl font-semibold mb-2">
                Million Dollar Baby Accounts
              </h3>
              <p className="text-sm mb-4">
                Turn innovative ideas into reality. Solve complex problems
                creatively with cutting-edge technology and design thinking.
              </p>
              <button className="bg-purple-500 hover:bg-purple-600 text-white font-semibold py-2 px-4 rounded">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Section3;
