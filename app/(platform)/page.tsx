import React from "react";
import { HeroSection } from "./_components/hero-section";
import { UnderHero } from "./_components/under-hero";

function Homepage() {
  return (
    <div className="w-full">
      <HeroSection />
      <UnderHero />
    </div>
  );
}

export default Homepage;
