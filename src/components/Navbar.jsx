// import React, { useState, useEffect } from "react";
// import { NavLink } from "react-router-dom";
// import { AiOutlineHome, AiOutlineLogin } from "react-icons/ai";
// import { Link } from "react-scroll";

// const Navbar = () => {
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

//   const toggleMobileMenu = () => {
//     setIsMobileMenuOpen(!isMobileMenuOpen);
//   };

//   // scroll state
//   const [visible, setVisible] = useState(true);
//   const [menuOpen, setMenuOpen] = useState(false);
//   let lastScrollY = 0;

//   useEffect(() => {
//     const handleScroll = () => {
//       if (window.scrollY > lastScrollY) {
//         setVisible(false); // Hide navbar on scroll down
//       } else {
//         setVisible(true); // Show navbar on scroll up
//       }
//       lastScrollY = window.scrollY;
//     };
//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   const toggleMenu = () => setMenuOpen(!menuOpen);

//   return (
//     <nav
//       className={`sticky top-0 z-50 font-thin  bg-nav text-yellow-500 transition-transform duration-300 ${
//         visible ? "translate-y-0" : "-translate-y-full"
//       }`}
//     >
//       <div className="container mx-auto px-4 py-6 flex justify-between items-center">
//         {/* Brand/Logo */}
//         <NavLink to="/" className="nav-font text-2xl font-bold text-lime-100">
//           Texas Titan Leadership
//         </NavLink>
//         {/* Nav Links (Desktop) */}

//         <div className="hidden md:flex space-x-6 text-xl">
//           <NavLink
//             to="/"
//             className="relative flex items-center space-x-2 text-yellow-500 font-medium hover:text-lime-100"
//           >
//             <AiOutlineHome size={24} />
//           </NavLink>

//           <NavLink
//             to="/ourservices"
//             className="hover:text-lime-100   text-yellow-500 rounded-md focus:outline-none"
//           >
//             Our Services
//           </NavLink>

//           <NavLink to="/aboutus" className="hover:text-lime-100">
//             About Us
//           </NavLink>
//           <NavLink to="/ourteam" className="hover:text-lime-100">
//             Our Team
//           </NavLink>
//           <NavLink to="/events" className="hover:text-lime-100">
//             Events
//           </NavLink>
//           <NavLink to="/ourfaqs" className="hover:text-lime-100">
//             FAQS
//           </NavLink>
//           {/* <NavLink to="/login" className="hover:text-lime-100">
//             <AiOutlineLogin size={24} />
//           </NavLink> */}
//         </div>
//         {/* Mobile Menu Button */}
//         <button
//           onClick={toggleMobileMenu}
//           className="block md:hidden text-gray-300 hover:text-white"
//         >
//           <svg
//             className="w-6 h-6"
//             xmlns="http://www.w3.org/2000/svg"
//             fill="none"
//             viewBox="0 0 24 24"
//             stroke="currentColor"
//           >
//             <path
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               strokeWidth="2"
//               d="M4 6h16M4 12h16M4 18h16"
//             />
//           </svg>
//         </button>
//       </div>
//       {/* Mobile Menu */}
//       {isMobileMenuOpen && (
//         <div className="md:hidden bg-gray-800 text-gray-300">
//           <a href="#home" className="block px-4 py-2 hover:bg-gray-700">
//             Home
//           </a>
//           <a href="#features" className="block px-4 py-2 hover:bg-gray-700">
//             Features
//           </a>
//           <a href="#pricing" className="block px-4 py-2 hover:bg-gray-700">
//             Pricing
//           </a>
//           <a href="#contact" className="block px-4 py-2 hover:bg-gray-700">
//             Contact
//           </a>
//         </div>
//       )}
//     </nav>
//   );
// };

// export default Navbar;
import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { AiOutlineHome } from "react-icons/ai";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [visible, setVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(window.scrollY);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > 50 && currentScrollY > lastScrollY) {
        setVisible(false); // Hide on scroll down
      } else {
        setVisible(true); // Show on scroll up
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <nav
      className={`fixed top-0 w-full z-50 font-thin bg-nav text-yellow-500 transition-transform duration-300 ${
        visible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="container mx-auto px-4 py-6 flex justify-between items-center">
        <NavLink to="/" className="nav-font text-2xl font-bold text-lime-100">
          Texas Titan Leadership
        </NavLink>
        <div className="hidden md:flex space-x-6 text-xl">
          <NavLink
            to="/"
            className="flex items-center space-x-2 hover:text-lime-100"
          >
            <AiOutlineHome size={24} />
          </NavLink>
          <NavLink to="/ourservices" className="hover:text-lime-100">
            Our Services
          </NavLink>
          <NavLink to="/aboutus" className="hover:text-lime-100">
            About Us
          </NavLink>
          <NavLink to="/ourteam" className="hover:text-lime-100">
            Our Team
          </NavLink>
          <NavLink to="/events" className="hover:text-lime-100">
            Events
          </NavLink>
          <NavLink to="/ourfaqs" className="hover:text-lime-100">
            FAQS
          </NavLink>
        </div>
        <button
          onClick={toggleMobileMenu}
          className="block md:hidden text-gray-300 hover:text-white"
        >
          ☰
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
