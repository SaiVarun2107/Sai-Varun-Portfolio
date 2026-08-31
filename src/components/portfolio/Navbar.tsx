import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { NAV_ITEMS } from "./data";

export function Navbar() {
  const [active, setActive] = useState("#home");
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    const ids = NAV_ITEMS.map((n) => n.href.slice(1));

    const onScroll = () => {
      const offset = 140; // below the floating navbar
      let current = ids[0];

      for (const id of ids) {
        const el = document.getElementById(id);
        if (!el) continue;
        if (el.getBoundingClientRect().top - offset <= 0) current = id;
      }

      // at the very bottom, always highlight the last section
      if (window.innerHeight + window.scrollY >= document.body.scrollHeight - 2) {
        current = ids[ids.length - 1];
      }

      setActive(`#${current}`);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return (
    <motion.header
      initial={{ opacity: 0, y: -16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="fixed inset-x-0 top-4 z-50"
    >
      <nav className="mx-auto w-[min(1180px,calc(100%-1.25rem))] rounded-2xl border border-border bg-card/85 backdrop-blur-md shadow-lg sm:w-[min(1180px,calc(100%-2rem))]">
        {/* Desktop Navbar Layout: Brand on Left, Links on Right */}
        <div className="hidden md:flex items-center justify-between px-6 py-2.5">
          <a
            href="#home"
            className="flex items-center gap-2 text-sm font-semibold tracking-wide text-foreground transition-opacity hover:opacity-80"
          >
            <span className="eyebrow text-xs tracking-wider">Sai Varun</span>
            <span className="relative flex h-2 w-2">
              <span
                className="absolute inline-flex h-full w-full animate-ping rounded-full opacity-75"
                style={{ backgroundColor: "var(--theme-badge-dot)" }}
              />
              <span
                className="relative inline-flex h-2 w-2 rounded-full"
                style={{ backgroundColor: "var(--theme-badge-dot)" }}
              />
            </span>
          </a>

          <div className="flex items-center gap-1">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className={`rounded-xl px-3.5 py-1.5 text-center text-sm font-medium transition-all duration-300 ${
                  active === item.href
                    ? "bg-accent text-accent-foreground font-semibold shadow-sm ring-1 ring-white/10"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>

        {/* Mobile Navbar Layout: Brand on Left, Hamburger on Right */}
        <div className="flex items-center justify-between px-4 py-3 sm:px-5 md:hidden">
          <a href="#home" className="flex items-center gap-2 eyebrow text-xs font-semibold text-foreground/90 tracking-wider">
            Sai Varun
            <span
              className="h-1.5 w-1.5 rounded-full"
              style={{ backgroundColor: "var(--theme-badge-dot)" }}
            />
          </a>
          <button
            aria-label="Toggle menu"
            onClick={() => setOpen((v) => !v)}
            className="flex h-9 w-9 items-center justify-center rounded-lg text-foreground transition-colors hover:bg-accent active:bg-accent/80"
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="overflow-hidden md:hidden"
            >
              <div className="flex flex-col gap-1 border-t border-border/50 px-3 pt-2 pb-3">
                {NAV_ITEMS.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className={`flex min-h-[44px] items-center rounded-xl px-4 py-2.5 text-sm font-medium transition-colors ${
                      active === item.href
                        ? "bg-accent text-accent-foreground font-semibold"
                        : "text-muted-foreground hover:text-foreground active:bg-accent/50"
                    }`}
                  >
                    {item.label}
                  </a>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </motion.header>
  );
}
