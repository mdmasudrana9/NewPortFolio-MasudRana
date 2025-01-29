"use client";

import { useEffect, useState } from "react";

const useDarkMode = () => {
  const [isDarkMode, setIsDarkMode] = useState<boolean | null>(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const userPrefersDark = window.matchMedia(
        "(prefers-color-scheme: dark)"
      ).matches;
      const savedTheme = localStorage.getItem("theme");

      setIsDarkMode(savedTheme === "dark" || (!savedTheme && userPrefersDark));
    }
  }, []);

  useEffect(() => {
    if (isDarkMode === null) return;

    if (typeof document !== "undefined") {
      document.documentElement.classList.toggle("dark", isDarkMode);
      localStorage.setItem("theme", isDarkMode ? "dark" : "");
    }
  }, [isDarkMode]);

  return { isDarkMode, setIsDarkMode };
};

export default useDarkMode;
