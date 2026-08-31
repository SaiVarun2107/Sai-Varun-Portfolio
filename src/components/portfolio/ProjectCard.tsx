import { ArrowRight, Github } from "lucide-react";
import { Link } from "@tanstack/react-router";
import type { Project } from "./data";
import { TiltCard } from "./TiltCard";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <>
      {/* Mobile Layout (< md): Directly visible content & tap targets */}
      <div className="relative flex min-h-[20rem] flex-col justify-between overflow-hidden rounded-3xl border border-border bg-[oklch(0.15_0_0)] p-6 text-center shadow-lg transition-colors md:hidden">
        <span
          aria-hidden
          className="pointer-events-none absolute inset-x-0 top-1/2 -translate-y-1/2 text-center text-[7rem] font-bold leading-none text-foreground/[0.04]"
        >
          {project.index}
        </span>

        <div className="relative flex flex-col items-center gap-4">
          <h3 className="eyebrow text-xl font-bold leading-tight sm:text-2xl">
            {project.title}
          </h3>

          <div className="flex flex-wrap justify-center gap-1.5">
            {project.tech.slice(0, 5).map((t) => (
              <span
                key={t}
                className="rounded-full border border-border bg-foreground/[0.05] px-3 py-1 text-[11px] font-medium text-foreground/80"
              >
                {t}
              </span>
            ))}
          </div>

          <p className="mt-1 text-xs leading-relaxed text-muted-foreground sm:text-sm">
            {project.description}
          </p>
        </div>

        {!project.hideDetails && (
          <div className="relative mt-5 flex items-center justify-center gap-3">
            <Link
              to="/projects/$slug"
              params={{ slug: project.slug }}
              className="inline-flex items-center gap-2 rounded-full bg-foreground px-5 py-2.5 text-xs font-semibold text-background transition-transform active:scale-95 sm:text-sm"
            >
              Explore details
              <ArrowRight size={14} />
            </Link>
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noreferrer"
                aria-label="View on GitHub"
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border bg-secondary text-foreground transition-transform active:scale-95"
              >
                <Github size={16} />
              </a>
            )}
          </div>
        )}
      </div>

      {/* Desktop Layout (>= md): Dynamic 3D Cursor Tilt & Bending Effect */}
      <div className="hidden md:block h-[24rem]">
        <TiltCard
          maxTilt={15}
          perspective={1100}
          scaleOnHover={1.03}
          glareOpacity={0.25}
          className="rounded-3xl shadow-xl transition-[border-color,box-shadow] duration-300"
        >
          <div className="group relative h-full w-full overflow-hidden rounded-3xl border border-border bg-[oklch(0.15_0_0)] p-8 transition-colors duration-300 hover:border-foreground/40 [transform-style:preserve-3d]">
            {/* Background Watermark Index */}
            <span
              aria-hidden
              className="pointer-events-none absolute inset-x-0 top-1/2 -translate-y-1/2 text-center text-[9rem] font-bold leading-none text-foreground/[0.04] select-none [transform:translateZ(10px)]"
            >
              {project.index}
            </span>

            {/* Front Card Face Content with 3D Depth Elevation */}
            <div className="relative flex h-full flex-col items-center justify-center gap-8 text-center [transform:translateZ(25px)]">
              <h3 className="eyebrow text-2xl leading-tight sm:text-3xl text-foreground font-bold drop-shadow-sm">
                {project.title}
              </h3>
              <div className="flex flex-wrap justify-center gap-2 [transform:translateZ(30px)]">
                {project.tech.slice(0, 6).map((t) => (
                  <span
                    key={t}
                    className="rounded-full border border-border bg-foreground/[0.06] backdrop-blur-xs px-4 py-2 text-xs font-medium text-foreground/85 shadow-xs"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>

            {/* Interactive Slide-Up Overlay on Hover with 3D Pop */}
            <div className="absolute inset-0 flex translate-y-full flex-col items-center justify-center gap-6 rounded-3xl bg-background/95 p-8 text-center backdrop-blur-md transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-y-0 [transform:translateZ(35px)]">
              <p className="max-w-xs text-base leading-relaxed text-foreground/90 font-normal">
                {project.description}
              </p>
              {!project.hideDetails && (
                <div className="flex items-center gap-3">
                  <Link
                    to="/projects/$slug"
                    params={{ slug: project.slug }}
                    className="inline-flex items-center gap-2 rounded-full bg-foreground px-6 py-3 text-sm font-semibold text-background transition-transform duration-300 hover:scale-105 active:scale-95 shadow-md"
                  >
                    Explore details
                    <ArrowRight size={16} />
                  </Link>
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      aria-label="View on GitHub"
                      className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-border bg-secondary text-foreground transition-transform duration-300 hover:scale-105 hover:bg-accent active:scale-95"
                    >
                      <Github size={18} />
                    </a>
                  )}
                </div>
              )}
            </div>
          </div>
        </TiltCard>
      </div>
    </>
  );
}
