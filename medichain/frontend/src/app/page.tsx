"use client";

import React from "react";
import Header from "@/components/landingpage/Header";
import HeroSection from "@/components/landingpage/HeroSection";
import StatsOverview from "@/components/landingpage/StatsOverview";
import Faq from "@/components/landingpage/Faq";
import MarqueeSection from "@/components/landingpage/MarqueeSection";

const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-teal-200 to-white animated-gradient">
      <div className="p-6">
        <Header />
      </div>

      <div className="pt-6 px-6">
        <HeroSection />
      </div>

      <div className="pt-6 px-6">
        <StatsOverview />
      </div>
      <div className="pt-10 px-6">
        <MarqueeSection />
      </div>

      <div className="py-12 px-6">
        <Faq />
      </div>
    </div>
  );
};

export default Home;
