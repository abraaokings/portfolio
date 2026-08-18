"use client";

import { useEffect, useState } from "react";
import { MoonIcon } from "@/components/ui/icons/MoonIcon";
import { SunIcon } from "@/components/ui/icons/SunIcon";

type Theme = "light" | "dark";

const storageKey = "portfolio-theme";

function getSystemTheme(): Theme {
  return window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
}

function applyTheme(theme: Theme) {
  document.documentElement.dataset.theme = theme;
}

export function ThemeToggle() {
  const [theme, setTheme] = useState<Theme>("light");

  useEffect(() => {
    const savedTheme = window.localStorage.getItem(storageKey) as Theme | null;
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");

    const syncTheme = () => {
      const nextTheme = savedTheme ?? getSystemTheme();
      setTheme(nextTheme);
      applyTheme(nextTheme);
    };

    const handleSystemChange = () => {
      if (!window.localStorage.getItem(storageKey)) {
        const nextTheme = mediaQuery.matches ? "dark" : "light";
        setTheme(nextTheme);
        applyTheme(nextTheme);
      }
    };

    syncTheme();
    mediaQuery.addEventListener("change", handleSystemChange);

    return () => mediaQuery.removeEventListener("change", handleSystemChange);
  }, []);

  const nextTheme = theme === "dark" ? "light" : "dark";
  const label = theme === "dark" ? "Ativar modo claro" : "Ativar modo escuro";

  return (
    <button
      type="button"
      aria-label={label}
      title={label}
      onClick={() => {
        setTheme(nextTheme);
        applyTheme(nextTheme);
        window.localStorage.setItem(storageKey, nextTheme);
      }}
      className="inline-flex size-7 items-center justify-center rounded-full border border-line bg-wash text-sm leading-none text-ink transition-colors hover:bg-line"
    >
      {theme === "dark" ? (
        <SunIcon className="size-[18px]" />
      ) : (
        <MoonIcon className="size-[18px]" />
      )}
    </button>
  );
}
