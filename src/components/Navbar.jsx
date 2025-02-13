// NAVBAR 1
import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { AiOutlineHome, AiOutlineLogin } from "react-icons/ai";
import { Link } from "react-scroll";

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

// NAVBAR 3 (mobile updates)
// const Navbar = () => {
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
//   const [visible, setVisible] = useState(true);
//   const [lastScrollY, setLastScrollY] = useState(window.scrollY);

//   const toggleMobileMenu = () => {
//     setIsMobileMenuOpen((prev) => !prev);
//   };

//   useEffect(() => {
//     const handleScroll = () => {
//       const currentScrollY = window.scrollY;

//       if (currentScrollY > 50 && currentScrollY > lastScrollY) {
//         setVisible(false); // Hide on scroll down
//       } else {
//         setVisible(true); // Show on scroll up
//       }

//       setLastScrollY(currentScrollY);
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, [lastScrollY]);

//   return (
//     <nav
//       className={`fixed top-0 w-full z-50 font-thin bg-nav text-yellow-500 transition-transform duration-300 ${
//         visible ? "translate-y-0" : "-translate-y-full"
//       }`}
//     >
//       <div className="container mx-auto px-4 py-6 flex justify-between items-center">
//         {/* Logo */}
//         <NavLink to="/" className="nav-font text-2xl font-bold text-lime-100">
//           Texas Titan Leadership
//         </NavLink>

//         {/* Desktop Nav */}
//         <div className="hidden md:flex space-x-6 text-xl">
//           <NavLink
//             to="/"
//             className="flex items-center space-x-2 hover:text-lime-100"
//           >
//             <AiOutlineHome size={24} />
//           </NavLink>
//           <NavLink to="/ourservices" className="hover:text-lime-100">
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
//         </div>

//         {/* Mobile Menu Button */}
//         <button
//           onClick={toggleMobileMenu}
//           className="block md:hidden text-gray-300 hover:text-white text-2xl"
//         >
//           ☰
//         </button>
//       </div>

//       {/* Mobile Menu */}
//       <div
//         className={`absolute top-full left-0 w-full bg-nav shadow-md transition-transform duration-300 ${
//           isMobileMenuOpen
//             ? "translate-y-0 opacity-100"
//             : "-translate-y-full opacity-0"
//         } md:hidden`}
//       >
//         <div className="flex flex-col items-center space-y-4 py-4 text-lg">
//           <NavLink
//             to="/"
//             onClick={toggleMobileMenu}
//             className="hover:text-lime-100"
//           >
//             <AiOutlineHome size={24} />
//           </NavLink>
//           <NavLink
//             to="/ourservices"
//             onClick={toggleMobileMenu}
//             className="hover:text-lime-100"
//           >
//             Our Services
//           </NavLink>
//           <NavLink
//             to="/aboutus"
//             onClick={toggleMobileMenu}
//             className="hover:text-lime-100"
//           >
//             About Us
//           </NavLink>
//           <NavLink
//             to="/ourteam"
//             onClick={toggleMobileMenu}
//             className="hover:text-lime-100"
//           >
//             Our Team
//           </NavLink>
//           <NavLink
//             to="/events"
//             onClick={toggleMobileMenu}
//             className="hover:text-lime-100"
//           >
//             Events
//           </NavLink>
//           <NavLink
//             to="/ourfaqs"
//             onClick={toggleMobileMenu}
//             className="hover:text-lime-100"
//           >
//             FAQS
//           </NavLink>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;

// ----TEST------
// const Navbar = () => {
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

//   const toggleMobileMenu = () => {
//     setIsMobileMenuOpen((prev) => !prev);
//   };

//   return (
//     <nav className="sticky top-0 z-50 bg-nav text-yellow-500 shadow-md">
//       <div className="container mx-auto px-4 py-6 flex justify-between items-center">
//         {/* Brand/Logo */}
//         <NavLink to="/" className="nav-font text-2xl font-bold text-lime-100">
//           Texas Titan Leadership
//         </NavLink>

//         {/* Desktop Navigation (unchanged) */}
//         <div className="hidden md:flex space-x-6 text-xl">
//           <NavLink
//             to="/"
//             className="flex items-center space-x-2 hover:text-lime-100"
//           >
//             <AiOutlineHome size={24} />
//           </NavLink>
//           <NavLink to="/ourservices" className="hover:text-lime-100">
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
//         </div>

//         {/* Mobile Menu Button */}
//         <button
//           onClick={toggleMobileMenu}
//           className="block md:hidden text-gray-300 hover:text-white text-2xl"
//         >
//           {isMobileMenuOpen ? "✖" : "☰"}
//         </button>
//       </div>

//       {/* Mobile Navigation Menu (Fixed White Space Issue) */}
//       <div
//         className={`absolute top-full left-0 w-full bg-nav shadow-md md:hidden transition-transform duration-300 ${
//           isMobileMenuOpen ? "opacity-100 translate-y-0" : "opacity-0 hidden"
//         }`}
//       >
//         <div className="flex flex-col items-center space-y-4 py-4 text-lg">
//           <NavLink
//             to="/"
//             onClick={toggleMobileMenu}
//             className="hover:text-lime-100"
//           >
//             <AiOutlineHome size={24} />
//           </NavLink>
//           <NavLink
//             to="/ourservices"
//             onClick={toggleMobileMenu}
//             className="hover:text-lime-100"
//           >
//             Our Services
//           </NavLink>
//           <NavLink
//             to="/aboutus"
//             onClick={toggleMobileMenu}
//             className="hover:text-lime-100"
//           >
//             About Us
//           </NavLink>
//           <NavLink
//             to="/ourteam"
//             onClick={toggleMobileMenu}
//             className="hover:text-lime-100"
//           >
//             Our Team
//           </NavLink>
//           <NavLink
//             to="/events"
//             onClick={toggleMobileMenu}
//             className="hover:text-lime-100"
//           >
//             Events
//           </NavLink>
//           <NavLink
//             to="/ourfaqs"
//             onClick={toggleMobileMenu}
//             className="hover:text-lime-100"
//           >
//             FAQS
//           </NavLink>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;

// TEST 2!!!!!!!!

const Navbar = () => {
  const [visible, setVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(window.scrollY);

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
      <div className="container mx-auto px-4 py-2 flex flex-col md:flex-row justify-center md:justify-between items-center">
        {/* Centered Logo */}
        <NavLink
          to="/"
          className="nav-font text-lg md:text-2xl font-bold text-lime-100 mb-1 md:mb-0"
        >
          Texas Titan Leadership
        </NavLink>

        {/* Navigation Links - Adjusted Spacing */}
        <div className="flex flex-wrap justify-center gap-3 md:flex-row md:space-x-6 text-xs md:text-lg">
          {/* Home Icon - Only Show on Desktop */}
          <NavLink
            to="/"
            className="hidden md:flex items-center space-x-1 hover:text-lime-100"
          >
            <AiOutlineHome size={18} />
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
      </div>
    </nav>
  );
};

export default Navbar;
