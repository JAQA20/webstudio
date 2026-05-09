import { useState } from "react";
import { Hero } from "./components/Hero";
import { Services } from "./components/Services";
import { FeaturedProjects } from "./components/FeaturedProjects";
import { Philosophy } from "./components/Philosophy";
import { TechStack } from "./components/TechStack";
import { Process } from "./components/Process";
import { Pricing } from "./components/Pricing";
// import { Testimonials } from "./components/Testimonials";
import { FinalCTA } from "./components/FinalCTA";
import { Footer } from "./components/Footer";
import { FloatingWhatsApp } from "./components/FloatingWhatsApp";
import { Language, translations } from "./i18n";

export default function App() {
  const [language, setLanguage] = useState<Language>("en");
  const t = translations[language];

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white dark">
      <Hero language={language} setLanguage={setLanguage} t={t} />
      <Services t={t} />
      <FeaturedProjects t={t} />
      <Philosophy t={t} />
      <TechStack t={t} />
      <Pricing t={t} />
      <Process t={t} />
      {/* <Testimonials t={t} /> */}
      <FinalCTA t={t} />
      <Footer t={t} />
      <FloatingWhatsApp />
    </div>
  );
}
