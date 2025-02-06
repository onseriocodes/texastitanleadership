import React from "react";
import { NavLink } from "react-router-dom";

const market =
  "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

const myPic =
  "https://images.unsplash.com/photo-1592495989226-03f88104f8cc?q=80&w=3612&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

const Hero = () => {
  return (
    <>
      <div
        className="flex items-center justify-center bg-cover bg-yellow-700 bg-center"
        style={{ backgroundImage: `url(${myPic})` }}
      >
        <div className="container mx-auto px-4 py-20 text-center lg:text-left lg:flex lg:items-center">
          <div className="max-w-2xl mx-auto lg:mx-0 lg:w-1/2">
            <h1 className="text-4xl font-extrabold text-stone-950 sm:text-5xl lg:text-6xl">
              {/* Empower Your Vision{" "} */}
              Secure Your Future{" "}
              <span className="text-sky-600">
                {/* On the Shoulders of Titans */} Build Your Legacy
              </span>
            </h1>
            <p className="mt-6 text-lg text-gray-600">
              Financial solutions for retirement, life insurance, and
              wealth-building—tailored for you
            </p>
            <div className="mt-8 flex justify-center lg:justify-start space-x-4">
              {/* <a
                href="#get-started"
                className="px-6 py-3 bg-sky-600 text-white rounded-lg text-lg font-medium shadow hover:bg-blue-700"
              >
                Get Started
              </a> */}
              <NavLink
                to="contactus"
                className="px-6 py-3 bg-sky-600 text-white rounded-lg text-lg font-medium shadow hover:bg-blue-700"
              >
                Get Started
              </NavLink>
              {/* <a
                href="#learn-more"
                className="px-6 py-3 border  rounded-lg   font-medium shadow hover:border-gray-500"
              >
                Learn More
              </a> */}
              <NavLink
                to="/aboutus"
                className="text-2xl text-lg text-gray-700 border-yellow-500 px-6 py-3 border  rounded-lg   font-medium shadow hover:border-orange-400"
              >
                Learn More
              </NavLink>
            </div>
          </div>
          {/* <div className="mt-10 lg:mt-0 lg:ml-16 lg:w-1/2">
            <img
              src="https://via.placeholder.com/600x400"
              alt="Hero Image"
              className="rounded-lg shadow-lg"
            />
          </div> */}
        </div>
      </div>
    </>
  );
};

export default Hero;
