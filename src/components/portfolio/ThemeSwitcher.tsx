import { useEffect, useState, useRef } from "react";
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
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const saved = localStorage.getItem("portfolio_theme") as ThemeKey;
    if (saved && THEMES.some((t) => t.id === saved)) {
      setTheme(saved);
    }
  }, []);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setIsOpen(false);
      }
    };
    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
      document.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen]);

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
    <div ref={containerRef} className="relative inline-flex items-center">
      <button
        onClick={() => setIsOpen((prev) => !prev)}
        title="Change accent theme"
        aria-label="Change theme accent color"
        className={`relative flex h-8 w-8 sm:h-9 sm:w-9 items-center justify-center rounded-xl border border-border/80 bg-card/60 text-foreground transition-all duration-300 hover:scale-105 hover:bg-accent hover:border-border active:scale-95 ${
          isOpen ? "bg-accent border-foreground/30 ring-2 ring-white/10" : ""
        }`}
      >
        <Palette size={16} className="text-foreground/90" />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 8, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 8, scale: 0.95 }}
            transition={{ duration: 0.18, ease: [0.16, 1, 0.3, 1] }}
            className="absolute right-0 top-full mt-2.5 z-50 flex flex-col gap-2 rounded-2xl border border-border bg-card/95 p-3 shadow-2xl backdrop-blur-xl ring-1 ring-white/10 min-w-[200px]"
          >
            <div className="flex items-center justify-between px-1">
              <span className="eyebrow text-[10px] text-muted-foreground uppercase tracking-wider">
                Accent Theme
              </span>
              <span className="text-[10px] text-muted-foreground/80 font-medium capitalize">
                {currentTheme}
              </span>
            </div>
            <div className="flex items-center justify-between gap-2 pt-1">
              {THEMES.map((t) => (
                <button
                  key={t.id}
                  title={t.label}
                  onClick={() => {
                    setTheme(t.id);
                    setIsOpen(false);
                  }}
                  className={`group relative flex h-7 w-7 items-center justify-center rounded-full transition-transform hover:scale-115 active:scale-95`}
                  style={{
                    backgroundColor: t.color,
                    boxShadow: currentTheme === t.id ? `0 0 12px ${t.ringColor}` : undefined,
                  }}
                >
                  {currentTheme === t.id && (
                    <Check
                      size={13}
                      className={t.id === "monochrome" ? "text-black" : "text-white"}
                      strokeWidth={3}
                    />
                  )}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
