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
            <div className="group grid grid-cols-[76px_minmax(0,1fr)] gap-3.5 rounded-2xl bg-foreground/[0.02] p-4 transition-colors duration-300 hover:bg-foreground/[0.06] sm:grid-cols-[110px_minmax(0,1fr)] sm:gap-5 sm:rounded-3xl sm:px-7 sm:py-6">
              <div className="relative flex flex-col items-start justify-between">
                <span className="text-xs font-semibold text-foreground/70 transition-colors duration-300 group-hover:text-foreground sm:text-sm">
                  {entry.from}
                </span>
                <span
                  aria-hidden
                  className="my-1.5 ml-1 w-px flex-1 bg-border transition-colors duration-300 group-hover:bg-foreground/50 sm:my-2"
                />
                {entry.to ? (
                  <span className="text-xs font-semibold text-foreground/70 transition-colors duration-300 group-hover:text-foreground sm:text-sm">
                    {entry.to}
                  </span>
                ) : null}
              </div>

              <div>
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
        <p className="mt-16 text-center text-sm text-muted-foreground">
          Explore more below
        </p>
      </Reveal>
    </Section>
  );
}
