"use client";

import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Services from "@/components/Services";
import Work from "@/components/Work";
import { useEffect, useState } from "react";

const Page = () => {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(false);

  // Initialize dark mode only on the client
  useEffect(() => {
    if (typeof window !== "undefined" && typeof localStorage !== "undefined") {
      const userPrefersDark =
        localStorage.theme === "dark" ||
        (!("theme" in localStorage) &&
          window.matchMedia("(prefers-color-scheme: dark)").matches);
      setIsDarkMode(userPrefersDark);
    }
  }, []);

  // Apply dark mode classes when the mode changes
  useEffect(() => {
    if (typeof window !== "undefined" && typeof document !== "undefined") {
      if (isDarkMode) {
        document.documentElement.classList.add("dark");
        localStorage.theme = "dark";
      } else {
        document.documentElement.classList.remove("dark");
        localStorage.theme = "";
      }
    }
  }, [isDarkMode]);

  return (
    <div>
      <Navbar isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
      <Hero />
      <About isDarkMode={isDarkMode} />
      <Services />
      <Work isDarkMode={isDarkMode} />
      <Contact />
      <Footer isDarkMode={isDarkMode} />
    </div>
  );
};

export default Page;
