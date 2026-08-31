import { ABOUT_LINES } from "./data";
import { Reveal, Section } from "./primitives";

export function About() {
  return (
    <Section id="about">
      <Reveal>
        <h2
          className="eyebrow bg-clip-text text-4xl text-transparent transition-all duration-700 sm:text-5xl md:text-6xl"
          style={{
            backgroundImage: "linear-gradient(135deg, var(--theme-heading-from), var(--theme-heading-to))",
          }}
        >
          About me
        </h2>
      </Reveal>

      <Reveal delay={0.1}>
        <div className="mt-10 rounded-3xl border border-foreground/10 bg-foreground/[0.045] px-5 py-8 shadow-[0_0_80px_-40px_color-mix(in_oklab,var(--foreground)_45%,transparent)] backdrop-blur-sm sm:mt-14 sm:px-12 sm:py-14 md:px-16">
          <ul className="space-y-6 sm:space-y-8">
            {ABOUT_LINES.map((line, i) => (
              <Reveal key={line} delay={0.1 + i * 0.08}>
                <li className="group flex cursor-default gap-3.5 transition-transform duration-300 hover:translate-x-1 sm:gap-5">
                  <span
                    aria-hidden
                    className="mt-2.5 h-0 w-0 shrink-0 border-y-[5px] border-l-[8px] border-y-transparent border-l-foreground/40 transition-colors duration-300 group-hover:border-l-foreground"
                  />
                  <span className="text-sm leading-relaxed text-foreground/60 transition-colors duration-300 group-hover:font-semibold group-hover:text-foreground sm:text-lg md:text-xl">
                    {line}
                  </span>
                </li>
              </Reveal>
            ))}
          </ul>
        </div>
      </Reveal>
    </Section>
  );
}
