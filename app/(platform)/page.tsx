import React from "react";
import { HeroSection } from "./_components/hero-section";
import { UnderHero } from "./_components/under-hero";
import { DisplayCards } from "./_components/display-cards";
import { DisplayHorns } from "./_components/display-horns";
import { DisplayLearnMore } from "./_components/display-learn-more";
import { Footer } from "./_components/footer";
import { DisplayCaption } from "./_components/display-caption";

function Homepage() {
  return (
    <div className="w-full relative">
      <HeroSection />
      <DisplayCaption />
      <UnderHero />
      <DisplayCards />
      <DisplayHorns />
      <DisplayLearnMore />
      <Footer />
    </div>
  );
}

export default Homepage;
