import { Link } from "@tanstack/react-router";
import { FEATURED_PROJECTS } from "./data";
import { ProjectCard } from "./ProjectCard";
import { Reveal, Section, SectionHeading } from "./primitives";

export function Projects() {
  return (
    <Section id="projects">
      <SectionHeading>Featured Projects</SectionHeading>

      <div className="mt-14 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {FEATURED_PROJECTS.map((project, i) => (
          <Reveal key={project.slug} delay={i * 0.06}>
            <ProjectCard project={project} />
          </Reveal>
        ))}
      </div>

      <Reveal>
        <p className="mt-10 text-center text-sm text-muted-foreground">
          Explore each project to learn more about its features, tools, and outcomes.
        </p>
      </Reveal>

      <Reveal delay={0.1}>
        <div className="mt-10 flex justify-center">
          <Link
            to="/projects"
            className="inline-flex items-center gap-2 rounded-xl border border-border bg-card/60 px-7 py-3 text-sm font-medium text-foreground transition-colors duration-300 hover:bg-accent"
          >
            View all projects
          </Link>
        </div>
      </Reveal>
    </Section>
  );
}
