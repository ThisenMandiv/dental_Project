import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import logo from "../assets/logo.png";

const servicesDropdown = [
  {
    label: "General Dentistry",
    href: "/general-dentistry",
    subItems: [
      {
        label: "Dental Examination",
        href: "/general-dentistry/dental-examinations",
      },
      {
        label: "Fillings and Restorations",
        href: "/general-dentistry/fillings",
      },
      { label: "Dentures", href: "/general-dentistry/removable-dentures" },
      {
        label: "Dental Crowns and Bridges",
        href: "/general-dentistry/crowns-and-bridges",
      },
      { label: "Dental Hygienist", href: "/general-dentistry#hygienist" },
      { label: "Root Canal Treatment", href: "/general-dentistry/root-canal" },
      { label: "Dental Extraction", href: "/general-dentistry/extraction" },
    ],
  },
  {
    label: "Cosmetic Dentistry",
    href: "/cosmetic-dentistry",
    subItems: [
      { label: "Veneers", href: "/cosmetic-dentistry#veneers" },
      {
        label: "Composite Bonding",
        href: "/cosmetic-dentistry#composite-bonding",
      },
      { label: "Dental Implants", href: "/cosmetic-dentistry#dental-implants" },
      { label: "Tooth Whitening", href: "/cosmetic-dentistry#tooth-whitening" },
    ],
  },
  { label: "Facial Aesthetics", href: "/facial-aesthetics" },
  { label: "Denplan Care", href: "/denplan-care" },
  { label: "Denplan Essentials", href: "/denplan-essentials" },
  {
    label: "Specialist Treatment",
    href: "/specialist-treatment",
    subItems: [
      { label: "Sedation Dentist", href: "/sedation-dentist#sedation-dentist" },
    ],
  },
  { label: "NHS", href: "/nhs" },
  { label: "Emergency Dental Treatment", href: "/emergency-dental-treatment" },
];

const aboutDropdown = [
  { label: "Meet The Team", href: "/team" },
  { label: "Testimonials", href: "/testimonials" },
  {
    label: "Events",
    href: "/events",
    subItems: [
      { label: "Sugar Free September", href: "/events#sugar-free-september" },
      { label: "Stoptober", href: "/events#stoptober" },
    ],
  },
];

const navLinks = [
  { label: "Home", href: "/" },
  {
    label: "About Us",
    href: "/about",
    dropdown: aboutDropdown,
  },
  {
    label: "Services",
    href: "/home",
    dropdown: servicesDropdown,
  },
  { label: "Fees", href: "/fees" },
  { label: "Special Offers", href: "/special-offers" },
  { label: "Contact Us", href: "/contact-us" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [activeSubDropdown, setActiveSubDropdown] = useState(null);
  const location = useLocation();
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setActiveDropdown(null);
        setActiveSubDropdown(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const closeMobileMenu = () => {
    setOpen(false);
    setActiveDropdown(null);
    setActiveSubDropdown(null);
  };

  return (
    <header className="fixed top-2 sm:top-4 md:top-6 left-1/2 -translate-x-1/2 z-50 w-[98%] sm:w-[96%] md:w-[95%] max-w-[1600px]">
   <div className="w-full h-[56px] sm:h-[58px] md:h-[60px] flex items-center justify-between px-3 sm:px-4 md:px-8 bg-white/90 border-1 border-blue-800 shadow-lg rounded-2xl sm:rounded-3xl md:rounded-[2rem]">
        {/* Logo */}
        <Link
          to="/"
          className="flex items-center gap-1 sm:gap-2 text-xl font-bold text-black z-50"
        >
          <img
            src={logo}
            alt="Logo"
            className="h-8 sm:h-9 md:h-10 w-auto object-contain"
          />
        </Link>

        {/* Desktop Navigation - UNCHANGED */}
        <nav
          ref={dropdownRef}
          className="hidden lg:flex items-center justify-center gap-6 xl:gap-14 text-black font-sans relative flex-grow"
        >
          {navLinks.map((link) => (
            <div key={link.label} className="relative group">
              {link.dropdown ? (
                <div
                  className="flex items-center gap-1 cursor-pointer group"
                  onMouseEnter={() => setActiveDropdown(link.label)}
                  onMouseLeave={() => {
                    setActiveDropdown(null);
                    setActiveSubDropdown(null);
                  }}
                >
                  <Link
                    to={link.href}
                    className={`font-bold hover:text-[#0b4ed4] transition ${
                      location.pathname === link.href ? "text-[#223B6E]" : ""
                    }`}
                  >
                    {link.label}
                  </Link>
                  <ChevronDown
                    size={16}
                    className="transition-transform group-hover:rotate-180"
                  />

                  {/* Dropdown */}
                  <AnimatePresence>
                    {activeDropdown === link.label && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        transition={{ duration: 0.2 }}
                        className="absolute top-full left-0 mt-2 w-64 bg-white/95 backdrop-blur-md rounded-2xl shadow-xl border border-gray-200 z-50"
                      >
                        <div className="py-2">
                          {link.dropdown.map((item) => (
                            <div
                              key={item.label}
                              className="relative group"
                              onMouseEnter={() =>
                                item.subItems &&
                                setActiveSubDropdown(item.label)
                              }
                              onMouseLeave={() =>
                                item.subItems && setActiveSubDropdown(null)
                              }
                            >
                              <Link
                                to={item.href}
                                className="flex items-center justify-between px-4 py-3 text-sm text-gray-700 hover:bg-blue-50  hover:text-[#0b4ed4]  transition-colors"
                                onClick={() => {
                                  setActiveDropdown(null);
                                  setActiveSubDropdown(null);
                                }}
                              >
                                {item.label}
                                {item.subItems && <ChevronRight size={14} />}
                              </Link>

                              {/* Submenu */}
                              <AnimatePresence>
                                {item.subItems &&
                                  activeSubDropdown === item.label && (
                                    <motion.div
                                      initial={{ opacity: 0, x: 10 }}
                                      animate={{ opacity: 1, x: 0 }}
                                      exit={{ opacity: 0, x: 10 }}
                                      transition={{ duration: 0.2 }}
                                      className="absolute left-full top-0 ml-1 w-56 bg-white/95 backdrop-blur-md rounded-2xl shadow-xl border border-gray-200 z-50"
                                    >
                                      <div className="py-2">
                                        {item.subItems.map((subItem) => (
                                          <Link
                                            to={subItem.href}
                                            key={subItem.label}
                                            className="block px-4 py-3 text-sm text-gray-700 hover:bg-blue-50  hover:text-[#0b4ed4] transition-colors cursor-pointer"
                                            onClick={() => {
                                              setActiveDropdown(null);
                                              setActiveSubDropdown(null);
                                            }}
                                          >
                                            {subItem.label}
                                          </Link>
                                        ))}
                                      </div>
                                    </motion.div>
                                  )}
                              </AnimatePresence>
                            </div>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ) : (
                <Link
                  to={link.href}
                  className={`font-bold  hover:text-[#0b4ed4] transition ${
                    location.pathname === link.href ? "text-[#0b4ed4]" : ""
                  }`}
                >
                  {link.label}
                </Link>
              )}
            </div>
          ))}
          <div>
            <a
              href="#book"
              className="ml-4 bg-[#223B6E] text-white px-5 py-2 rounded-full hover:bg-blue-900 transition font-bold "
            >
              Book Now
            </a>
          </div>
        </nav>

        {/* Mobile Toggle - Improved Responsiveness */}
        <button
          className="lg:hidden text-[#223B6E] z-50 p-1.5 sm:p-2"
          onClick={() => setOpen((prev) => !prev)}
          aria-label="Toggle menu"
        >
          {open ? (
            <X size={24} className="sm:w-7 sm:h-7" />
          ) : (
            <Menu size={24} className="sm:w-7 sm:h-7" />
          )}
        </button>
      </div>

      {/* Mobile Nav - Improved Responsiveness */}
      <AnimatePresence>
        {open && (
          <motion.nav
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="lg:hidden overflow-hidden bg-white/95 backdrop-blur-md rounded-2xl mt-2 shadow-xl max-h-[calc(100vh-100px)] overflow-y-auto"
          >
            <ul className="flex flex-col gap-0 px-3 sm:px-4 py-3 sm:py-4 text-gray-800">
              {navLinks.map((link) => (
                <li
                  key={link.label}
                  className="border-b border-gray-200 last:border-b-0"
                >
                  {link.dropdown ? (
                    <div className="py-2">
                      <div
                        className="flex items-center justify-between py-2 sm:py-2.5 font-semibold cursor-pointer  hover:text-[#0b4ed4] transition text-sm sm:text-base"
                        onClick={() =>
                          setActiveDropdown(
                            activeDropdown === link.label ? null : link.label
                          )
                        }
                      >
                        <Link to={link.href} onClick={closeMobileMenu}>
                          {link.label}
                        </Link>
                        <ChevronDown
                          size={16}
                          className={`transition-transform ${
                            activeDropdown === link.label ? "rotate-180" : ""
                          }`}
                        />
                      </div>

                      <AnimatePresence>
                        {activeDropdown === link.label && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            className="ml-3 sm:ml-4 border-l-2 border-gray-300 pl-3 sm:pl-4 overflow-hidden"
                          >
                            {link.dropdown.map((item) => (
                              <div key={item.label} className="py-1.5 sm:py-2">
                                <Link
                                  to={item.href}
                                  className="block py-1.5 text-gray-700  hover:text-[#0b4ed4] transition font-medium text-sm sm:text-base"
                                  onClick={closeMobileMenu}
                                >
                                  {item.label}
                                </Link>

                                {item.subItems && (
                                  <div className="ml-3 sm:ml-4 border-l border-gray-200 pl-3 sm:pl-4 mt-1">
                                    {item.subItems.map((subItem) => (
                                      <Link
                                        to={subItem.href}
                                        key={subItem.label}
                                        className="block py-1.5 text-gray-600  hover:text-[#0b4ed4] text-xs sm:text-sm cursor-pointer transition"
                                        onClick={closeMobileMenu}
                                      >
                                        {subItem.label}
                                      </Link>
                                    ))}
                                  </div>
                                )}
                              </div>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ) : (
                    <Link
                      to={link.href}
                      onClick={closeMobileMenu}
                      className={`block py-2.5 sm:py-3 font-semibold  hover:text-[#0b4ed4] transition text-sm sm:text-base ${
                        location.pathname === link.href
                          ? "text-[#223B6E] font-bold"
                          : ""
                      }`}
                    >
                      {link.label}
                    </Link>
                  )}
                </li>
              ))}
              <li className="pt-2 sm:pt-3">
                <a
                  href="#book"
                  onClick={closeMobileMenu}
                  className="mt-2 inline-block w-full text-center bg-[#223B6E] text-white px-4 sm:px-5 py-2.5 sm:py-3 rounded-full hover:bg-blue-900 transition font-bold text-sm sm:text-base"
                >
                  Book Now
                </a>
              </li>
            </ul>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
