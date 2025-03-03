"use client";

import React from "react";
import Link from "next/link";
import { Github, Twitter, Linkedin, Mail } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-gray-200 bg-white py-8">
      <div className="container mx-auto flex flex-col items-center space-y-6 px-6 text-gray-600">
        <div className="flex items-center space-x-2 text-gray-900">
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
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
          <span className="text-lg font-semibold">MediChain</span>
        </div>

        <nav className="flex space-x-6 text-sm font-medium">
          <Link href="/features" className="hover:text-teal-600 transition">
            Features
          </Link>
          <Link href="/pricing" className="hover:text-teal-600 transition">
            Pricing
          </Link>
          <Link href="/docs" className="hover:text-teal-600 transition">
            Docs
          </Link>
          <Link href="/about" className="hover:text-teal-600 transition">
            About
          </Link>
          <Link href="/contact" className="hover:text-teal-600 transition">
            Contact
          </Link>
        </nav>

        <div className="flex space-x-4">
          {[
            {
              href: "https://github.com/shivaacodes",
              icon: <Github size={18} />,
            },
            { href: "https://twitter.com", icon: <Twitter size={18} /> },
            { href: "https://linkedin.com", icon: <Linkedin size={18} /> },
            { href: "mailto:contact@medichain.com", icon: <Mail size={18} /> },
          ].map(({ href, icon }, idx) => (
            <a
              key={idx}
              href={href}
              className="text-gray-500 hover:text-teal-600 transition"
            >
              {icon}
            </a>
          ))}
        </div>

        <p className="text-xs text-gray-400">
          © {currentYear} MediChain. Built with ♥ by{" "}
          <span className="text-teal-600">Shiva</span> &{" "}
          <span className="text-teal-600">Omkar</span>.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
