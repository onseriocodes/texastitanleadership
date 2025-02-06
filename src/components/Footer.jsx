import React from "react";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <footer className="bg-nav text-yellow-500 py-8">
        <div className="container mx-auto px-4">
          {/* <!-- Footer Content --> */}
          <div className="flex flex-col sm:flex-row justify-between items-center">
            {/* <!-- Logo or Brand Name --> */}
            <div className="mb-4 sm:mb-0">
              <h3 className="text-xl font-thin text-lime-100">TXTL</h3>
            </div>
            {/* <!-- Navigation Links --> */}
            <div className="flex space-x-6">
              <NavLink to="/careers" className="hover:text-lime-100">
                Careers
              </NavLink>
              <NavLink
                to="http://calendly.com/texastitans"
                className="hover:text-lime-100"
              >
                Contact
              </NavLink>
              <NavLink to="/terms" className="hover:text-lime-100">
                Terms & Conditions
              </NavLink>
            </div>
          </div>
          {/* <!-- Bottom Section --> */}
          <div className="mt-6 text-center text-sm text-yellow-500">
            &copy; 2025 Onserio Codes. All rights reserved.
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
