import React from "react";
import Preloader from "@/components/prestige/Preloader";
import CursorDot from "@/components/prestige/CursorDot";
import Navigation from "@/components/prestige/Navigation";
import Hero from "@/components/prestige/Hero";
import BlueprintOfCare from "@/components/prestige/BlueprintOfCare";
import AdvisorWeek from "@/components/prestige/AdvisorWeek";
import Philosophy from "@/components/prestige/Philosophy";
import OnboardingPortal from "@/components/prestige/OnboardingPortal";
import Footer from "@/components/prestige/Footer";

const HERO_IMAGE = "https://media.base44.com/images/public/6aba7b7e7783ccf861248a9c/f94b19398_generated_8554b353.jpg";
const HERO_VIDEO = "https://media.base44.com/videos/public/6aba7b7e7783ccf861248a9c/3f560b685_Estate_Aerial_Loop.mp4";
const SERVICE_IMAGES = [
  "https://media.base44.com/images/public/6aba7b7e7783ccf861248a9c/38b3ffeb8_generated_e564aaf4.jpg",
  "https://media.base44.com/images/public/6aba7b7e7783ccf861248a9c/47e92d5a2_generated_1ceacb93.jpg",
  "https://media.base44.com/images/public/6aba7b7e7783ccf861248a9c/77914f256_generated_36af4459.jpg",
];
const ABOUT_IMAGE = "https://media.base44.com/images/public/6aba7b7e7783ccf861248a9c/c8ae18cab_generated_183b6956.jpg";

export default function Home() {
  return (
    <div className="relative bg-background">
      <Preloader />
      <CursorDot />
      <Navigation />
      <main>
        <Hero heroImage={HERO_IMAGE} heroVideo={HERO_VIDEO} />
        <BlueprintOfCare images={SERVICE_IMAGES} />
        <AdvisorWeek />
        <Philosophy aboutImage={ABOUT_IMAGE} />
        <OnboardingPortal />
      </main>
      <Footer />
    </div>
  );
}