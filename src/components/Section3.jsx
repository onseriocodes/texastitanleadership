import React from "react";
import { NavLink } from "react-router-dom";

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
                Life insurance not only provides a death benefit for your loved
                ones but can also offer living benefits, such as access to funds
                in the case of critical, chronic, or terminal illnesses.
              </p>
              <NavLink
                to="/ourservices#lb"
                className="bg-indigo-500 hover:bg-indigo-600 text-white font-semibold py-2 px-4 rounded"
              >
                Learn More
              </NavLink>
            </div>

            <div className="bg-white text-gray-800 rounded-2xl shadow-lg p-6 transition-transform transform hover:scale-105">
              <h3 className="text-2xl font-semibold mb-2">IUL</h3>
              <p className="text-sm mb-4">
                An IUL policy combines life insurance protection with living
                benefits, allowing you to access accumulated cash value for
                retirement, emergencies, or medical needs while enjoying
                tax-deferred growth.
              </p>
              <NavLink
                to="/ourservices#iul"
                className="bg-indigo-500 hover:bg-indigo-600 text-white font-semibold py-2 px-4 rounded"
              >
                Learn More
              </NavLink>{" "}
            </div>

            <div className="bg-white text-gray-800 rounded-2xl shadow-lg p-6 transition-transform transform hover:scale-105">
              <h3 className="text-2xl font-semibold mb-2">
                Million Dollar Baby Accounts
              </h3>
              <p className="text-sm mb-4">
                A Million Dollar Baby account, structured using a life insurance
                policy, offers living benefits that provide access to cash value
                over time, helping fund education, a first home, or major life
                events with tax advantages.
              </p>
              <NavLink
                to="/ourservices#mdb"
                className="bg-indigo-500 hover:bg-indigo-600 text-white font-semibold py-2 px-4 rounded"
              >
                Learn More
              </NavLink>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Section3;
