import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Palette, Check } from "lucide-react";

export type ThemeKey = "monochrome" | "violet" | "emerald" | "cyan" | "amber";

const THEMES: { id: ThemeKey; label: string; color: string; ringColor: string }[] = [
  { id: "monochrome", label: "Monochrome", color: "#ffffff", ringColor: "rgba(255,255,255,0.4)" },
  { id: "violet", label: "Cyber Violet", color: "#8b5cf6", ringColor: "rgba(139,92,246,0.5)" },
  { id: "emerald", label: "Emerald Mint", color: "#10b981", ringColor: "rgba(16,185,129,0.5)" },
  { id: "cyan", label: "Ocean Cyan", color: "#06b6d4", ringColor: "rgba(6,182,212,0.5)" },
  { id: "amber", label: "Sunset Amber", color: "#f59e0b", ringColor: "rgba(245,158,11,0.5)" },
];

export function ThemeSwitcher() {
  const [currentTheme, setCurrentTheme] = useState<ThemeKey>("monochrome");
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem("portfolio_theme") as ThemeKey;
    if (saved && THEMES.some((t) => t.id === saved)) {
      setTheme(saved);
    }
  }, []);

  const setTheme = (theme: ThemeKey) => {
    setCurrentTheme(theme);
    localStorage.setItem("portfolio_theme", theme);
    if (theme === "monochrome") {
      document.documentElement.removeAttribute("data-theme");
    } else {
      document.documentElement.setAttribute("data-theme", theme);
    }
  };

  return (
    <div className="fixed bottom-6 left-6 z-40">
      <div className="relative">
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: 10, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 10, scale: 0.95 }}
              transition={{ duration: 0.2 }}
              className="absolute bottom-14 left-0 mb-2 flex flex-col gap-2 rounded-2xl border border-border bg-card/90 p-3 shadow-2xl backdrop-blur-xl ring-1 ring-white/10"
            >
              <span className="eyebrow px-2 text-[10px] text-muted-foreground">
                Accent Theme
              </span>
              <div className="flex items-center gap-2">
                {THEMES.map((t) => (
                  <button
                    key={t.id}
                    title={t.label}
                    onClick={() => {
                      setTheme(t.id);
                      setIsOpen(false);
                    }}
                    className={`group relative flex h-8 w-8 items-center justify-center rounded-full transition-transform hover:scale-110 active:scale-95`}
                    style={{
                      backgroundColor: t.color,
                      boxShadow: currentTheme === t.id ? `0 0 14px ${t.ringColor}` : undefined,
                    }}
                  >
                    {currentTheme === t.id && (
                      <Check
                        size={14}
                        className={t.id === "monochrome" ? "text-black" : "text-white"}
                      />
                    )}
                  </button>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        <button
          onClick={() => setIsOpen((prev) => !prev)}
          title="Change theme accent"
          aria-label="Change theme accent color"
          className="flex h-11 w-11 items-center justify-center rounded-full border border-border bg-card/85 text-foreground shadow-xl backdrop-blur-md transition-all duration-300 hover:scale-105 hover:bg-accent active:scale-95"
        >
          <Palette size={18} />
        </button>
      </div>
    </div>
  );
}
