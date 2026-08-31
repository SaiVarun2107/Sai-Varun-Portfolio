import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUp } from "lucide-react";

export function ScrollToTop() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        const progress = Math.min(100, Math.max(0, (window.scrollY / totalHeight) * 100));
        setScrollProgress(progress);
      }
      setVisible(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const radius = 18;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (scrollProgress / 100) * circumference;

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8, y: 12 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: 12 }}
          transition={{ duration: 0.25 }}
          className="fixed bottom-6 right-6 z-40"
        >
          <button
            onClick={scrollToTop}
            aria-label="Back to top"
            className="group relative flex h-12 w-12 items-center justify-center rounded-full border border-border bg-card/90 shadow-2xl backdrop-blur-md transition-all duration-300 hover:scale-110 active:scale-95"
          >
            {/* SVG Circular Progress Ring */}
            <svg className="absolute inset-0 h-full w-full -rotate-90" viewBox="0 0 44 44">
              <circle
                cx="22"
                cy="22"
                r={radius}
                className="stroke-foreground/10 fill-none stroke-[2.5]"
              />
              <circle
                cx="22"
                cy="22"
                r={radius}
                style={{
                  stroke: "var(--theme-accent, currentColor)",
                  strokeDasharray: circumference,
                  strokeDashoffset: strokeDashoffset,
                  transition: "stroke-dashoffset 0.1s ease-out, stroke 0.5s ease",
                }}
                className="fill-none stroke-[2.5] stroke-linecap-round"
              />
            </svg>

            <ArrowUp
              size={18}
              className="relative text-foreground transition-transform duration-300 group-hover:-translate-y-0.5"
            />
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
