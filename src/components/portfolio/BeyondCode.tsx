import { motion } from "framer-motion";
import { ADDITIONAL_SKILLS, LANGUAGES } from "./data";
import { Reveal, Section, SectionHeading } from "./primitives";


export function BeyondCode() {
  return (
    <Section id="beyond">
      <div className="text-center">
        <SectionHeading>Additional Skills</SectionHeading>
        <Reveal>
          <p className="mx-auto mt-6 max-w-xl text-sm text-muted-foreground sm:text-base">
            I'm a canvas of many skills — but I choose to paint with code.
          </p>
        </Reveal>
      </div>

      {/* Skill bubbles with equal spacing, uniform large min-width and prominent hover growth */}
      <div className="mx-auto mt-14 flex flex-wrap items-center justify-center gap-6 sm:gap-8 lg:gap-10 max-w-4xl px-4 py-8">
        {ADDITIONAL_SKILLS.map((skill, i) => {
          let label = skill.note
            ? `${skill.name} (${skill.note})`
            : skill.name.toLowerCase() === "football"
              ? "Football"
              : `I ${skill.name.toLowerCase()}`;

          if (skill.name.toLowerCase() === "animate") {
            label = "I animate";
          }

          return (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              animate={{ y: [0, -10, 0, 8, 0] }}
              transition={{
                opacity: { duration: 0.4 },
                scale: { duration: 0.4 },
                y: {
                  duration: 5 + (i % 3),
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: i * 0.2,
                },
              }}
            >
              <motion.div
                whileHover={{ scale: 1.3, y: -6 }}
                whileTap={{ scale: 1.15 }}
                transition={{ type: "spring", stiffness: 350, damping: 22 }}
                className="cursor-pointer whitespace-nowrap rounded-full border border-border/80 bg-card/90 px-10 py-5 text-center flex items-center justify-center min-w-[200px] sm:min-w-[240px] text-lg sm:text-xl font-medium text-foreground/90 shadow-lg backdrop-blur-md transition-colors duration-300 hover:border-foreground hover:bg-foreground/[0.12] hover:text-foreground hover:shadow-[0_0_30px_rgba(255,255,255,0.15)] ring-1 ring-white/5 hover:ring-white/20"
              >
                {label}
              </motion.div>
            </motion.div>
          );
        })}
      </div>

      {/* Language proficiency */}
      <div className="mt-24 text-center">
        <SectionHeading>Language Proficiency</SectionHeading>
        <div className="mx-auto mt-14 max-w-lg">
          {LANGUAGES.map((lang, i) => (
            <Reveal key={lang.name} delay={i * 0.06}>
              <div className="flex items-center justify-center gap-8 py-4 sm:gap-16">
                <span className="w-28 text-right text-base font-medium text-foreground sm:w-32 sm:text-lg">
                  {lang.name}
                </span>
                <span className="flex items-center gap-2">
                  {[1, 2, 3, 4, 5].map((n) => (
                    <span
                      key={n}
                      aria-hidden
                      className={`h-1.5 w-6 rounded-full sm:w-8 ${
                        n <= lang.level ? "bg-foreground" : "bg-foreground/20"
                      }`}
                    />
                  ))}
                </span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </Section>
  );
}
