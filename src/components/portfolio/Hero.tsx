import { motion } from "framer-motion";
import { Link2, ChevronDown, Linkedin } from "lucide-react";
import { WHATSAPP_CONNECT, CONTACT } from "./data";

export function Hero() {
  return (
    <section
      id="home"
      className="relative grid-bg flex min-h-screen scroll-mt-28 items-center"
    >
      <div className="section-shell grid items-center gap-14 pt-36 pb-24 md:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] md:pt-28">
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="group relative aspect-[4/5] w-full max-w-sm overflow-hidden rounded-3xl border border-border bg-secondary shadow-xl"
        >
          <img
            src="/profile.jpg"
            alt="Thokala Sai Varun"
            className="h-full w-full object-cover object-[center_35%] transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 bg-background/85 px-8 text-center opacity-0 backdrop-blur-md transition-opacity duration-500 group-hover:opacity-100">
            <p className="text-lg font-semibold text-foreground">Glad you're here!</p>
            <p className="text-sm leading-relaxed text-muted-foreground">
              Keep scrolling to learn more about who I am, what I do, and what I'm building.
            </p>
            <ChevronDown size={24} className="mt-2 animate-bounce text-foreground" />
          </div>
        </motion.div>

        <div>
          <motion.h1
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="text-5xl font-bold leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl"
          >
            Hello.
            <br />
            I'm Thokala Sai Varun.
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.25 }}
            className="mt-8 max-w-xl space-y-5 text-base leading-relaxed text-muted-foreground sm:text-lg"
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
            className="mt-10 flex flex-wrap items-center gap-4"
          >
            <a
              href={WHATSAPP_CONNECT}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary px-7 py-3.5 text-sm font-medium text-foreground transition-all duration-300 hover:bg-accent hover:border-foreground/30"
            >
              <Link2 size={16} />
              Connect on WhatsApp
            </a>
            <a
              href={CONTACT.linkedin}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-7 py-3.5 text-sm font-medium text-foreground transition-all duration-300 hover:bg-accent hover:border-foreground/30"
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
