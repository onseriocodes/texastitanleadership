import React from "react";
import coin from "../assets/coin.png";
import cash from "../assets/cash.png";
import hand from "../assets/hand.png";
import Mabinty from "../assets/MabintyNonso.jpg";

const Section1 = () => {
  return (
    <>
      <section className="relative isolate overflow-hidden bg-white px-6 py-24 sm:py-32 lg:px-8">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(45rem_50rem_at_top,var(--color-indigo-100),white)] opacity-20"></div>
        <div className="absolute inset-y-0 right-1/2 -z-10 mr-16 w-[200%] origin-bottom-left skew-x-[-30deg] bg-white ring-1 shadow-xl shadow-indigo-600/10 ring-indigo-50 sm:mr-28 lg:mr-0 xl:mr-16 xl:origin-center"></div>
        <div className="mx-auto max-w-2xl lg:max-w-4xl">
          {/* <img
            className="mx-auto h-24"
            src="https://tailwindui.com/plus/img/logos/workcation-logo-indigo-600.svg"
            alt=""
          /> */}

          <img className="mx-auto h-34" src={coin} alt="" />
          <figure className="mt-10">
            <blockquote className="text-center text-xl/8 font-semibold text-gray-900 sm:text-2xl/9">
              <p>
                "Empowering individuals and families to achieve financial
                security, build generational wealth, and create a lasting
                legacy. Through expert guidance, innovative financial solutions,
                and leadership development, we provide peace of mind, ensuring
                that retirement, college savings, and financial independence are
                within reach. At Texas Titan Leadership Development, we equip
                both clients and agents with the tools to succeed, fostering a
                future of financial freedom and opportunity."
              </p>
            </blockquote>
            <figcaption className="mt-10">
              {/* <img
                className="mx-auto w-30 h-30 size-60 rounded-full"
                src={Mabinty}
                alt=""
              /> */}
              <div className="mt-4 flex items-center justify-center space-x-3 text-base">
                <div className="font-semibold text-gray-900">
                  Mabinty & Nonso
                </div>
                <svg
                  viewBox="0 0 2 2"
                  width="3"
                  height="3"
                  aria-hidden="true"
                  className="fill-gray-900"
                >
                  <circle cx="1" cy="1" r="1" />
                </svg>
                <div className="text-gray-600">
                  Marketing Directors of Texas Giants Financial
                </div>
              </div>
            </figcaption>
          </figure>
        </div>
      </section>
    </>
  );
};

export default Section1;
