"use client";

import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Services from "@/components/Services";
import Skills from "@/components/Skills";
import Work from "@/components/Work";
import useDarkMode from "@/hooks/usedarkMode";

const Page = () => {
  // Initialize with null to avoid hydration mismatch
  const { isDarkMode, setIsDarkMode } = useDarkMode();

  // Show nothing until client-side code runs
  if (isDarkMode === null) {
    return null;
  }

  return (
    <div>
      <Navbar isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
      <Hero />
      <About isDarkMode={isDarkMode} />
      <Skills />
      <Services />
      <Work isDarkMode={isDarkMode} />
      <Contact />
      <Footer isDarkMode={isDarkMode} />
    </div>
  );
};

export default Page;
