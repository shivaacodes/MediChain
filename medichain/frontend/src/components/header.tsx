"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronRight } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
    { name: "Locations", path: "/locations" },
    { name: "MediAI", path: "/ai" },
    { name: "Contact", path: "/contact" },
  ];

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 px-6 py-3 transition-all duration-300 ${
        scrolled ? "bg-white/10 backdrop-blur-md shadow-lg" : "bg-transparent"
      }`}
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="relative z-10">
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center"
          >
            <span className="text-xl font-bold bg-gradient-to-r from-cyan-500 to-blue-600 bg-clip-text text-transparent">
              Medi
            </span>
            <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              Chain
            </span>
            <motion.div
              className="absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-cyan-500 to-indigo-600"
              initial={{ width: 0 }}
              whileHover={{ width: "100%" }}
              transition={{ duration: 0.3 }}
            />
          </motion.div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center">
          <ul className="flex space-x-1">
            {navLinks.map((link) => (
              <motion.li key={link.path} whileHover={{ y: -2 }}>
                <Link
                  href={link.path}
                  className={`relative px-3 py-2 text-sm font-medium rounded-full transition-colors ${
                    pathname === link.path
                      ? "text-cyan-500"
                      : "text-gray-600 hover:text-cyan-500"
                  }`}
                >
                  <span className="relative z-10">{link.name}</span>
                  {pathname === link.path && (
                    <motion.div
                      layoutId="navHighlight"
                      className="absolute inset-0 bg-cyan-50/40 rounded-full"
                      initial={false}
                      transition={{
                        type: "spring",
                        bounce: 0.2,
                        duration: 0.6,
                      }}
                    />
                  )}
                </Link>
              </motion.li>
            ))}
          </ul>
        </nav>

        {/* Authentication Buttons */}
        <div className="hidden md:flex items-center space-x-3">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-4 py-1.5 text-xs font-medium text-gray-700 rounded-full hover:bg-gray-100 transition-colors"
          >
            Sign In
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-4 py-1.5 text-xs font-medium text-white rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 hover:shadow-md transition-all"
          >
            Sign Up
          </motion.button>
        </div>

        {/* Mobile Menu Button */}
        <motion.button
          className="md:hidden relative z-10 w-10 h-10 flex items-center justify-center rounded-full bg-white/20 backdrop-blur-md shadow-sm text-gray-700"
          whileTap={{ scale: 0.9 }}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        >
          {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </motion.button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            className="fixed inset-0 z-40 bg-gradient-to-br from-white/90 to-cyan-50/90 backdrop-blur-md flex flex-col pt-20"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.2 }}
          >
            <div className="flex flex-col px-8 space-y-4">
              {navLinks.map((link, index) => (
                <motion.div
                  key={link.path}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Link
                    href={link.path}
                    className="flex items-center py-3 text-lg font-medium text-gray-700 hover:text-cyan-500 transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {pathname === link.path ? (
                      <span className="text-cyan-500">{link.name}</span>
                    ) : (
                      <span>{link.name}</span>
                    )}
                    <ChevronRight className="ml-2 h-4 w-4" />
                  </Link>
                  <div className="h-px bg-gray-100" />
                </motion.div>
              ))}

              <div className="pt-6 flex space-x-4">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex-1 py-3 text-center font-medium text-gray-700 rounded-lg border border-gray-200"
                >
                  Sign In
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex-1 py-3 text-center font-medium text-white rounded-lg bg-gradient-to-r from-cyan-500 to-blue-600"
                >
                  Sign Up
                </motion.button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Header;
