import { useCallback, useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { TESTIMONIALS } from "./data";
import { Reveal, Section, SectionHeading } from "./primitives";

const SLIDE_MS = 5000;

export function Testimonials() {
  const [index, setIndex] = useState(0);
  const [dir, setDir] = useState(1);
  const count = TESTIMONIALS.length;

  const go = useCallback(
    (next: number, direction: number) => {
      setDir(direction);
      setIndex(((next % count) + count) % count);
    },
    [count],
  );

  useEffect(() => {
    const id = setInterval(() => go(index + 1, 1), SLIDE_MS);
    return () => clearInterval(id);
  }, [index, go]);

  const t = TESTIMONIALS[index]!;

  return (
    <Section id="testimonials">
      <SectionHeading>Testimonials</SectionHeading>

      <Reveal>
        <div className="relative mt-10 flex items-center justify-center gap-3 sm:mt-14 sm:gap-8">
          <button
            aria-label="Previous testimonial"
            onClick={() => go(index - 1, -1)}
            className="hidden h-12 w-12 shrink-0 items-center justify-center rounded-full border border-border bg-foreground/[0.06] text-foreground/70 transition-colors duration-300 hover:bg-foreground/15 hover:text-foreground sm:flex"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>

          <div className="relative w-full max-w-3xl overflow-hidden cursor-grab active:cursor-grabbing">
            <AnimatePresence initial={false} mode="wait" custom={dir}>
              <motion.figure
                key={index}
                custom={dir}
                initial={{ opacity: 0, x: dir * 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: dir * -50 }}
                transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={0.25}
                onDragEnd={(_e, { offset }) => {
                  if (offset.x < -35) {
                    go(index + 1, 1);
                  } else if (offset.x > 35) {
                    go(index - 1, -1);
                  }
                }}
                className="touch-pan-y rounded-3xl border border-border bg-card p-6 sm:p-12 shadow-lg select-none"
              >
                <span className="eyebrow text-xs text-muted-foreground">
                  {t.org}
                </span>
                <blockquote className="mt-4 text-sm italic leading-relaxed text-card-foreground sm:mt-6 sm:text-lg md:text-xl">
                  “{t.quote}”
                </blockquote>
                <figcaption className="mt-6 sm:mt-8">
                  <p className="text-sm font-semibold text-card-foreground sm:text-base">
                    {t.name}
                  </p>
                  <p className="mt-0.5 text-xs text-card-foreground/60 sm:mt-1 sm:text-sm">
                    {t.role}
                  </p>
                </figcaption>
              </motion.figure>
            </AnimatePresence>
          </div>

          <button
            aria-label="Next testimonial"
            onClick={() => go(index + 1, 1)}
            className="hidden h-12 w-12 shrink-0 items-center justify-center rounded-full border border-border bg-foreground/[0.06] text-foreground/70 transition-colors duration-300 hover:bg-foreground/15 hover:text-foreground sm:flex"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>
      </Reveal>

      {/* Mobile controls & pagination dots */}
      <div className="mt-6 flex items-center justify-center gap-4 sm:mt-8">
        <button
          aria-label="Previous testimonial"
          onClick={() => go(index - 1, -1)}
          className="flex h-9 w-9 items-center justify-center rounded-full border border-border bg-card text-foreground/80 sm:hidden"
        >
          <ChevronLeft className="h-4 w-4" />
        </button>

        <div className="flex items-center gap-2.5">
          {TESTIMONIALS.map((item, i) => (
            <button
              key={item.name}
              aria-label={`Go to testimonial ${i + 1}`}
              onClick={() => go(i, i > index ? 1 : -1)}
              className={`h-2.5 rounded-full transition-all duration-300 ${
                i === index ? "w-6 bg-foreground" : "w-2.5 bg-foreground/25"
              }`}
            />
          ))}
        </div>

        <button
          aria-label="Next testimonial"
          onClick={() => go(index + 1, 1)}
          className="flex h-9 w-9 items-center justify-center rounded-full border border-border bg-card text-foreground/80 sm:hidden"
        >
          <ChevronRight className="h-4 w-4" />
        </button>
      </div>
    </Section>
  );
}
