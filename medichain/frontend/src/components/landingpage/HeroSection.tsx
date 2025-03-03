"use client";

import React from "react";
import { GithubButton } from "@/components/landingpage/GithubButton";
import GetStartedButton from "./GetStartedButton";

const HeroSection = () => {
  return (
    <section className="flex flex-col items-center justify-center px-6 text-center">
      <div className="w-full flex justify-end mb-4">
        <GithubButton />
      </div>

      <h1 className="text-[10rem] md:text-[7rem] sm:text-[5rem] font-extrabold text-gray-900 leading-tight">
        Link by Link, <br className="hidden md:block" /> We Secure Your Rx.
      </h1>
      <div className="mt-8 flex justify-center">
        <GetStartedButton />
      </div>
    </section>
  );
};

export default HeroSection;
