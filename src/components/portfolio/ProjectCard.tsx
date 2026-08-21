import { ArrowRight, Github } from "lucide-react";
import { Link } from "@tanstack/react-router";
import type { Project } from "./data";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="group relative h-[24rem] overflow-hidden rounded-3xl border border-border bg-[oklch(0.15_0_0)] p-8 transition-colors duration-300 hover:border-foreground/40">
      <span
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-1/2 -translate-y-1/2 text-center text-[9rem] font-bold leading-none text-foreground/[0.04]"
      >
        {project.index}
      </span>

      <div className="relative flex h-full flex-col items-center justify-center gap-8 text-center">
        <h3 className="eyebrow text-2xl leading-tight sm:text-3xl">
          {project.title}
        </h3>
        <div className="flex flex-wrap justify-center gap-2">
          {project.tech.slice(0, 6).map((t) => (
            <span
              key={t}
              className="rounded-full border border-border bg-foreground/[0.05] px-4 py-2 text-xs font-medium text-foreground/80"
            >
              {t}
            </span>
          ))}
        </div>
      </div>

      <div className="absolute inset-0 flex translate-y-full flex-col items-center justify-center gap-6 rounded-3xl bg-background/95 p-8 text-center backdrop-blur-sm transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-y-0">
        <p className="max-w-xs text-base leading-relaxed text-foreground/90">
          {project.description}
        </p>
        {!project.hideDetails && (
          <div className="flex items-center gap-3">
            <Link
              to="/projects/$slug"
              params={{ slug: project.slug }}
              className="inline-flex items-center gap-2 rounded-full bg-foreground px-6 py-3 text-sm font-semibold text-background transition-transform duration-300 hover:scale-105"
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
                className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-border bg-secondary text-foreground transition-transform duration-300 hover:scale-105 hover:bg-accent"
              >
                <Github size={18} />
              </a>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
