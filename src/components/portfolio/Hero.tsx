import { motion } from "framer-motion";
import { Link2, ChevronDown, Linkedin } from "lucide-react";
import { WHATSAPP_CONNECT, CONTACT } from "./data";

export function Hero() {
  return (
    <section
      id="home"
      className="relative grid-bg flex min-h-screen scroll-mt-28 items-center overflow-hidden"
    >
      {/* Dynamic Theme Ambient Glow Aura */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-32 left-1/2 -translate-x-1/2 h-[450px] w-[750px] rounded-full blur-[110px] opacity-70 transition-all duration-700"
        style={{
          background: "radial-gradient(circle, var(--theme-ambient-glow), transparent 70%)",
        }}
      />

      <div className="section-shell relative z-10 grid items-center gap-14 pt-36 pb-24 md:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] md:pt-28">
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="group relative mx-auto aspect-[4/5] w-full max-w-[280px] overflow-hidden rounded-3xl border border-border bg-secondary shadow-xl sm:max-w-sm md:mx-0"
        >
          <img
            src="/profile.jpg"
            alt="Thokala Sai Varun"
            className="h-full w-full object-cover object-[center_35%] transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 bg-background/85 px-6 text-center opacity-0 backdrop-blur-md transition-opacity duration-500 group-hover:opacity-100 sm:px-8">
            <p className="text-base font-semibold text-foreground sm:text-lg">Glad you're here!</p>
            <p className="text-xs leading-relaxed text-muted-foreground sm:text-sm">
              Keep scrolling to learn more about who I am, what I do, and what I'm building.
            </p>
            <ChevronDown size={24} className="mt-2 animate-bounce text-foreground" />
          </div>
        </motion.div>

        <div>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            style={{
              backgroundColor: "var(--theme-badge-bg)",
              borderColor: "var(--theme-badge-border)",
              color: "var(--theme-badge-text)",
            }}
            className="mb-6 inline-flex items-center gap-2 rounded-full border px-3.5 py-1.5 text-xs font-medium backdrop-blur-sm transition-colors duration-500"
          >
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
            Available for AI &amp; Software Roles
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="text-4xl font-bold leading-[1.08] tracking-tight sm:text-6xl lg:text-7xl"
          >
            Hello.
            <br />
            I'm{" "}
            <span
              className="bg-clip-text text-transparent transition-all duration-700"
              style={{
                backgroundImage: "linear-gradient(135deg, var(--theme-heading-from), var(--theme-heading-to))",
              }}
            >
              Thokala Sai Varun
            </span>
            .
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.25 }}
            className="mt-6 max-w-xl space-y-4 text-base leading-relaxed text-muted-foreground sm:mt-8 sm:space-y-5 sm:text-lg"
          >
            <p>
              Computer Science &amp; Engineering student specializing in
              Artificial Intelligence &amp; Data Science.
            </p>
            <p>
              Curious, driven, and always learning — building practical software
              and exploring machine learning through real projects.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-8 flex flex-col items-stretch gap-3 sm:mt-10 sm:flex-row sm:flex-wrap sm:items-center sm:gap-4"
          >
            <a
              href={WHATSAPP_CONNECT}
              target="_blank"
              rel="noreferrer"
              className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-border bg-secondary px-6 py-3.5 text-sm font-medium text-foreground transition-all duration-300 hover:bg-accent hover:border-foreground/30 sm:w-auto sm:px-7"
            >
              <Link2 size={16} />
              Connect on WhatsApp
            </a>
            <a
              href={CONTACT.linkedin}
              target="_blank"
              rel="noreferrer"
              className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-border bg-card px-6 py-3.5 text-sm font-medium text-foreground transition-all duration-300 hover:bg-accent hover:border-foreground/30 sm:w-auto sm:px-7"
            >
              <Linkedin size={16} />
              LinkedIn Profile
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
