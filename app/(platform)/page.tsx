import React from "react";
import { HeroSection } from "./_components/hero-section";
import { UnderHero } from "./_components/under-hero";
import { DisplayCards } from "./_components/display-cards";
import { DisplayHorns } from "./_components/display-horns";

function Homepage() {
  return (
    <div className="w-full">
      <HeroSection />
      <UnderHero />
      <DisplayCards />
      <DisplayHorns />
    </div>
  );
}

export default Homepage;
