import { createFileRoute, Link } from "@tanstack/react-router";
import { PROJECTS } from "@/components/portfolio/data";
import { ProjectCard } from "@/components/portfolio/ProjectCard";
import { Reveal } from "@/components/portfolio/primitives";

const title = "All Projects — Thokala Sai Varun";
const description =
  "Every project built by Thokala Sai Varun — AI, machine learning and full-stack web applications.";

export const Route = createFileRoute("/projects/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: AllProjects,
});

function AllProjects() {
  return (
    <main className="min-h-screen bg-background">
      <div className="section-shell py-24">
        <nav className="mb-14 flex flex-wrap gap-3">
          <Link
            to="/"
            className="rounded-xl border border-border bg-card/60 px-5 py-2.5 text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            Back to Home
          </Link>
        </nav>

        <h1 className="eyebrow bg-gradient-to-b from-foreground to-muted-foreground bg-clip-text text-4xl text-transparent sm:text-5xl md:text-6xl">
          All Projects
        </h1>

        <div className="mt-14 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {PROJECTS.map((project, i) => (
            <Reveal key={project.slug} delay={i * 0.06}>
              <ProjectCard project={project} />
            </Reveal>
          ))}
        </div>
      </div>
    </main>
  );
}
