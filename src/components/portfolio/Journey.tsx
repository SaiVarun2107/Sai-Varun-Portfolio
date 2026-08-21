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
        <h2 className="eyebrow bg-gradient-to-b from-foreground to-muted-foreground bg-clip-text text-4xl text-transparent sm:text-5xl">
          {title}
        </h2>
      </Reveal>

      <div className="mt-12 space-y-6">
        {entries.map((entry, i) => (
          <Reveal key={entry.place + entry.from} delay={i * 0.08}>
            <div className="group grid grid-cols-[92px_minmax(0,1fr)] gap-5 rounded-3xl px-5 py-6 transition-colors duration-300 hover:bg-foreground/[0.06] sm:grid-cols-[110px_minmax(0,1fr)] sm:px-7">
              <div className="relative flex flex-col items-start justify-between">
                <span className="text-sm font-semibold text-foreground/70 transition-colors duration-300 group-hover:text-foreground">
                  {entry.from}
                </span>
                <span
                  aria-hidden
                  className="my-2 ml-1 w-px flex-1 bg-border transition-colors duration-300 group-hover:bg-foreground/50"
                />
                {entry.to ? (
                  <span className="text-sm font-semibold text-foreground/70 transition-colors duration-300 group-hover:text-foreground">
                    {entry.to}
                  </span>
                ) : null}
              </div>

              <div>
                <h4 className="text-base font-semibold text-foreground/80 transition-colors duration-300 group-hover:text-foreground sm:text-lg">
                  {entry.place}
                </h4>
                <p className="mt-2 flex flex-wrap items-center gap-x-3 gap-y-1 text-sm text-muted-foreground transition-colors duration-300 group-hover:text-foreground/80">
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
