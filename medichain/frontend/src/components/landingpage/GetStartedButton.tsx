import React from "react";
import { Button } from "../ui/button";

const GetStartedButton = () => {
  return (
    <Button
      className="relative px-8 py-6 text-xl font-bold text-white rounded-full 
                transition-all duration-300 bg-gradient-to-r from-teal-500 to-teal-600 
                hover:from-teal-600 hover:to-teal-700
                active:scale-95 overflow-hidden shadow-xl group"
    >
      <span className="relative z-10 flex items-center gap-2">
        Get Started
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="transition-transform duration-300 group-hover:translate-x-1"
        >
          <path d="M5 12h14"></path>
          <path d="m12 5 7 7-7 7"></path>
        </svg>
      </span>

      {/* Enhanced glowing effect */}
      <span className="absolute inset-0 bg-gradient-to-r from-teal-400 to-teal-300 opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500"></span>

      {/* Pulse effect on hover */}
      <span className="absolute -inset-1 rounded-full bg-gradient-to-r from-teal-400 to-teal-300 opacity-0 group-hover:opacity-30 blur-xl group-hover:animate-pulse transition-opacity duration-500"></span>
    </Button>
  );
};

export default GetStartedButton;
