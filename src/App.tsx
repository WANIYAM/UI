import React from "react";
import { useLenis } from "./hooks/useLenis";
import { GlobalBackground } from "./components/common/GlobalBackground";
import { Navigation } from "./components/navigation/Navigation";
import { HeroSection } from "./components/sections/HeroSection";
import { HorizontalScrollSection } from "./components/sections/HorizontalScrollSection";
import { AboutSection } from "./components/sections/AboutSection";
import { SpeakersSection } from "./components/sections/SpeakersSection";
import { VideoIntermissionSection } from "./components/sections/VideoIntermissionSection";
import { AgendaSection } from "./components/sections/AgendaSection";
import { StackingSponsorsSection } from "./components/sections/StackingSponsorsSection";
import { TestimonialsDeckSection } from "./components/sections/TestimonialsDeckSection";
import { TicketSection } from "./components/sections/TicketSection";
import { RecordingsSection } from "./components/sections/RecordingsSection";
import { FAQSection } from "./components/sections/FAQSection";
import { MarqueeCTASection } from "./components/sections/MarqueeCTASection";
import { Footer } from "./components/sections/Footer";

export const App: React.FC = () => {
  useLenis();

  return (
    <div style={{ position: "relative" }}>
      {/* 1. Global Viewport Background Morph */}
      <GlobalBackground />

      {/* 2. Fixed UI Navigation */}
      <Navigation />

      {/* 3. Page Content Sections */}
      <div style={{ position: "relative", zIndex: 1 }}>
        <div id="hero"><HeroSection /></div>
        <div id="gallery"><HorizontalScrollSection /></div>
        <div id="about"><AboutSection /></div>
        <div id="speakers"><SpeakersSection /></div>
        <VideoIntermissionSection />
        <div id="agenda"><AgendaSection /></div>
        <div id="sponsors"><StackingSponsorsSection /></div>
        <div id="testimonials"><TestimonialsDeckSection /></div>
        <div id="tickets"><TicketSection /></div>
        <div id="recordings"><RecordingsSection /></div>
        <div id="faq"><FAQSection /></div>
        <MarqueeCTASection />
        <div id="footer"><Footer /></div>
      </div>
    </div>
  );
};

export default App;