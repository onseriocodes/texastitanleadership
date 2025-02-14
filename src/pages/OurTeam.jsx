import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";

import MabintyNonso from "../assets/MabintyNonso.jpg";
import IreneMichael from "../assets/IreneMichael.jpg";
import LilianyPeter from "../assets/LilianyPeter.jpg";
import SamuelAsiedu from "../assets/SamuelAsiedu.jpg";
import AntoineFoy from "../assets/AntoineFoy.jpg";
import FeliciaIge from "../assets/FeliciaIge.jpg";
import Suzanne from "../assets/Suzanne.jpg";
import AbeiyuwaPhyllips from "../assets/AbeiyuwaPhyllips.jpg";
import plan from "../assets/plan.svg";
import plan2 from "../assets/plan2.svg";

const market =
  "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

// OUR TEAM
const OurTeam = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to the top of the page
  }, [pathname]);
  return (
    <>
      <section className="myHero py-16 px-8 pt-25">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Left Side: Text Content */}
          <div>
            <h1 className="text-5xl font-bold text-gray-800 mb-6">
              A Titan introduction
            </h1>
            <p className="text-xl text-gray-700 mb-6">
              Join our team with a large combination years of experience in
              finance, insurance, and customer care; delivering personalized
              solutions to thousands of client needs.
            </p>
            {/* <p className="text-lg text-gray-600">
              Join thousands who trust us to provide peace of mind through
              flexible options and personalized coverage. Our mission is to help
              you prepare for tomorrow while living confidently today.
            </p> */}
          </div>

          {/* Right Side: Placeholder Image */}
          <div className="flex justify-center md:justify-end">
            <div className="w-80 h-80 rounded-xl overflow-hidden">
              {/* Replace the empty div below with an <img> tag or background image */}
              <img
                src={plan}
                alt="Insurance team"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        <div className="bg-white py-24 sm:py-32">
          <div className="mx-auto grid max-w-7xl gap-20 px-6 lg:px-8 xl:grid-cols-3">
            <div className="max-w-xl">
              <h2 className="text-3xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-4xl">
                Meet our leadership
              </h2>
              <p className="mt-6 text-lg/8 text-gray-600">
                We’re a dynamic group of individuals who are passionate about
                what we do and dedicated to delivering the best results for our
                clients.
              </p>
            </div>
            <ul
              role="list"
              className="grid gap-x-8 gap-y-12 sm:grid-cols-2 sm:gap-y-16 xl:col-span-2"
            >
              <li>
                <div className="flex items-center gap-x-6">
                  <img
                    className="w-80 h-80 size-60 rounded-full"
                    src={MabintyNonso}
                    alt=""
                  />
                  <div>
                    <h3 className="text-base/7 font-semibold tracking-tight text-gray-900">
                      Mabinty Fornah-Ubosi and Nonso Ubosi
                    </h3>
                    <p className="text-sm/6 font-semibold text-sky-600">
                      Marketing Dirctors
                    </p>
                  </div>
                </div>
              </li>

              <li>
                <div className="flex items-center gap-x-6">
                  <img
                    className="w-80 h-80 size-60 rounded-full"
                    src={LilianyPeter}
                    alt=""
                  />
                  <div>
                    <h3 className="text-base/7 font-semibold tracking-tight text-gray-900">
                      Lilliany and Peter Ly
                    </h3>
                    <p className="text-sm/6 font-semibold text-sky-600">
                      Executive Vice Chairman
                    </p>
                  </div>
                </div>
              </li>

              <li>
                <div className="flex items-center gap-x-6">
                  <img
                    className="w-80 h-80 size-60 rounded-full"
                    src={AbeiyuwaPhyllips}
                    alt=""
                  />
                  <div>
                    <h3 className="text-base/7 font-semibold tracking-tight text-gray-900">
                      Abeiyuwa Phyllips
                    </h3>
                    <p className="text-sm/6 font-semibold text-sky-600">
                      Director
                    </p>
                  </div>
                </div>
              </li>

              <li>
                <div className="flex items-center gap-x-6">
                  <img
                    className="w-80 h-80 size-60 rounded-full"
                    src={FeliciaIge}
                    alt=""
                  />
                  <div>
                    <h3 className="text-base/7 font-semibold tracking-tight text-gray-900">
                      Felicia Ige
                    </h3>
                    <p className="text-sm/6 font-semibold text-sky-600">
                      Director
                    </p>
                  </div>
                </div>
              </li>

              <li>
                <div className="flex items-center gap-x-6">
                  <img
                    className="w-80 h-80 size-60 rounded-full"
                    src={IreneMichael}
                    alt=""
                  />
                  <div>
                    <h3 className="text-base/7 font-semibold tracking-tight text-gray-900">
                      Irene and Michael Miranda
                    </h3>
                    <p className="text-sm/6 font-semibold text-sky-600">
                      Executive Marketing Directors
                    </p>
                  </div>
                </div>
              </li>

              <li>
                <div className="flex items-center gap-x-6">
                  <img
                    className="w-80 h-80 size-60 rounded-full"
                    src={SamuelAsiedu}
                    alt=""
                  />
                  <div>
                    <h3 className="text-base/7 font-semibold tracking-tight text-gray-900">
                      Samuel Asiedu Jr.
                    </h3>
                    <p className="text-sm/6 font-semibold text-sky-600">
                      Associate
                    </p>
                  </div>
                </div>
              </li>

              <li>
                <div className="flex items-center gap-x-6">
                  <img
                    className="w-80 h-80 size-60 rounded-full"
                    src={AntoineFoy}
                    alt=""
                  />
                  <div>
                    <h3 className="text-base/7 font-semibold tracking-tight text-gray-900">
                      Antoine Foy
                    </h3>
                    <p className="text-sm/6 font-semibold text-sky-600">
                      Associate
                    </p>
                  </div>
                </div>
              </li>

              <li>
                <div className="flex items-center gap-x-6">
                  <img
                    className="w-80 h-80 size-60 rounded-full"
                    src={Suzanne}
                    alt=""
                  />
                  <div>
                    <h3 className="text-base/7 font-semibold tracking-tight text-gray-900">
                      Suzanne Bouyam
                    </h3>
                    <p className="text-sm/6 font-semibold text-sky-600">
                      Associate
                    </p>
                  </div>
                </div>
              </li>

              {/* <!-- More people... --> */}
            </ul>
          </div>
        </div>
      </section>
    </>
  );
};

export default OurTeam;
