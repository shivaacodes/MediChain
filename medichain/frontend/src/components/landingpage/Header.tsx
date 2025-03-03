"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, useSpring } from "framer-motion";
import {
  Menubar,
  MenubarMenu,
  MenubarSeparator,
} from "@/components/ui/menubar";
import { Home, Briefcase, MapPin, BrainCircuit } from "lucide-react";

const navLinks = [
  { name: "Home", path: "/", icon: Home },
  { name: "Services", path: "/services", icon: Briefcase },
  { name: "Locations", path: "/locations", icon: MapPin },
  { name: "MediAI", path: "/ai", icon: BrainCircuit },
];

const Header = () => {
  const pathname = usePathname();
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const iconSize = useSpring(16, { stiffness: 150, damping: 10 });

  return (
    <header className="py-4 px-8">
      <div className="container mx-auto flex items-center justify-between">
        <Link href="/" passHref>
          <div className="text-2xl font-extrabold text-teal-600 flex items-center">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="mr-2"
            >
              <path
                d="M12 2L2 7L12 12L22 7L12 2Z"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M2 17L12 22L22 17"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M2 12L12 17L22 12"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            MediChain
          </div>
        </Link>

        <Menubar className="border-none bg-teal-300 px-2 py-3 rounded-xl shadow-lg flex gap-3">
          {navLinks.map((link, index) => (
            <React.Fragment key={link.path}>
              <MenubarMenu>
                <Link href={link.path} passHref>
                  <motion.div
                    onMouseEnter={() => {
                      setHoveredIndex(index);
                      iconSize.set(20);
                    }}
                    onMouseLeave={() => {
                      setHoveredIndex(null);
                      iconSize.set(20);
                    }}
                    className={`relative flex items-center px-8 py-2 text-md font-bold rounded-xl transition-colors duration-300 ${
                      pathname === link.path
                        ? "text-black hover:text-black hover:bg-teal-400"
                        : "text-black hover:text-black hover:bg-teal-400"
                    }`}
                    whileHover={{
                      scale: 1.05,
                      transition: { type: "spring", stiffness: 150 },
                    }}
                  >
                    <motion.div
                      initial={{ x: 0, opacity: 0.8 }}
                      animate={{
                        x:
                          hoveredIndex !== null
                            ? index < hoveredIndex
                              ? -8
                              : index > hoveredIndex
                              ? 8
                              : 0
                            : 0,
                        opacity: 1,
                      }}
                      transition={{
                        type: "spring",
                        stiffness: 120,
                        damping: 14,
                      }}
                      className="mr-3"
                    >
                      <link.icon size={iconSize.get()} />
                    </motion.div>
                    {link.name}
                  </motion.div>
                </Link>
              </MenubarMenu>
              {index < navLinks.length - 1 && (
                <MenubarSeparator className="mx-2 h-5 w-0.5 bg-gray-500/50" />
              )}
            </React.Fragment>
          ))}
        </Menubar>
        <div className="w-32"></div>
      </div>
    </header>
  );
};

export default Header;
