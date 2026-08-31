import { ChevronDown } from "lucide-react";
import { EDUCATION, EXPERIENCE } from "./data";
import { Reveal, Section } from "./primitives";

type Entry = {
  from: string;
  to: string;
  place: string;
  detail: string;
  meta?: string;
};

function TimelineColumn({ title, entries }: { title: string; entries: Entry[] }) {
  return (
    <div>
      <Reveal>
        <h2
          className="eyebrow bg-clip-text text-3xl text-transparent transition-all duration-700 sm:text-4xl md:text-5xl"
          style={{
            backgroundImage: "linear-gradient(135deg, var(--theme-heading-from), var(--theme-heading-to))",
          }}
        >
          {title}
        </h2>
      </Reveal>

      <div className="mt-8 space-y-4 sm:mt-12 sm:space-y-6">
        {entries.map((entry, i) => (
          <Reveal key={entry.place + entry.from} delay={i * 0.08}>
            <div className="group grid grid-cols-[82px_minmax(0,1fr)] gap-3.5 rounded-2xl bg-foreground/[0.02] p-4 transition-colors duration-300 hover:bg-foreground/[0.06] sm:grid-cols-[115px_minmax(0,1fr)] sm:gap-5 sm:rounded-3xl sm:px-7 sm:py-6">
              <div className="relative self-stretch flex flex-col items-start justify-between py-0.5">
                <span className="text-xs font-semibold text-foreground/70 transition-colors duration-300 group-hover:text-foreground sm:text-sm shrink-0 whitespace-nowrap">
                  {entry.from}
                </span>
                <span
                  aria-hidden
                  className="my-1.5 ml-1.5 w-[1.5px] min-h-[18px] flex-1 bg-border transition-colors duration-300 group-hover:bg-foreground/50 sm:my-2 sm:min-h-[22px]"
                />
                {entry.to ? (
                  <span className="text-xs font-semibold text-foreground/70 transition-colors duration-300 group-hover:text-foreground sm:text-sm shrink-0 whitespace-nowrap">
                    {entry.to}
                  </span>
                ) : null}
              </div>

              <div className="flex flex-col justify-center">
                <h4 className="text-sm font-semibold text-foreground/80 transition-colors duration-300 group-hover:text-foreground sm:text-lg">
                  {entry.place}
                </h4>
                <p className="mt-1.5 flex flex-wrap items-center gap-x-2.5 gap-y-1 text-xs text-muted-foreground transition-colors duration-300 group-hover:text-foreground/80 sm:mt-2 sm:gap-x-3 sm:text-sm">
                  <span className="font-medium">{entry.detail}</span>
                  {entry.meta ? (
                    <>
                      <span aria-hidden className="text-border">
                        |
                      </span>
                      <span>{entry.meta}</span>
                    </>
                  ) : null}
                </p>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  );
}

export function Journey() {
  return (
    <Section id="journey">
      <div className="grid gap-16 md:grid-cols-2 md:gap-12">
        <TimelineColumn title="Education" entries={EDUCATION} />
        <TimelineColumn title="Experience" entries={EXPERIENCE} />
      </div>

      <Reveal>
        <div className="mt-16 flex justify-center">
          <a
            href="#testimonials"
            className="group inline-flex items-center gap-2.5 rounded-full border border-border/80 bg-card/60 px-6 py-3 text-sm font-medium text-muted-foreground backdrop-blur-md shadow-sm transition-all duration-300 hover:text-foreground hover:bg-accent hover:border-foreground/30 hover:scale-105 active:scale-95"
          >
            <span>Explore more below</span>
            <ChevronDown
              size={16}
              className="text-muted-foreground transition-transform duration-300 group-hover:translate-y-0.5 group-hover:text-foreground"
            />
          </a>
        </div>
      </Reveal>
    </Section>
  );
}
