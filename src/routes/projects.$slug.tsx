import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { PROJECTS } from "@/components/portfolio/data";
import { Github, ExternalLink } from "lucide-react";

export const Route = createFileRoute("/projects/$slug")({
  loader: ({ params }) => {
    const project = PROJECTS.find((p) => p.slug === params.slug);
    if (!project) throw notFound();
    return { project };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return {
        meta: [{ title: "Project not found" }, { name: "robots", content: "noindex" }],
      };
    }
    const title = `${loaderData.project.title} — Thokala Sai Varun`;
    const description = loaderData.project.description;
    return {
      meta: [
        { title },
        { name: "description", content: description },
        { property: "og:title", content: title },
        { property: "og:description", content: description },
        { property: "og:type", content: "article" },
        { name: "twitter:card", content: "summary_large_image" },
      ],
    };
  },
  component: ProjectDetail,
});

function Bullets({ items }: { items: string[] }) {
  return (
    <ul className="mt-5 space-y-3">
      {items.map((item) => (
        <li key={item} className="flex gap-4 text-base leading-relaxed text-muted-foreground">
          <span
            aria-hidden
            className="mt-2.5 h-0 w-0 shrink-0 border-y-[5px] border-l-[8px] border-y-transparent border-l-foreground/40"
          />
          {item}
        </li>
      ))}
    </ul>
  );
}

function ProjectDetail() {
  const { project } = Route.useLoaderData();

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
          <Link
            to="/projects"
            className="rounded-xl border border-border bg-card/60 px-5 py-2.5 text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            All Projects
          </Link>
        </nav>

        <h1 className="text-center text-4xl font-bold tracking-tight sm:text-5xl">
          {project.title}
        </h1>

        <section className="mt-16">
          <h2 className="text-2xl font-semibold text-foreground">Overview</h2>
          <p className="mt-5 text-base leading-relaxed text-muted-foreground">
            {project.overview}
          </p>
        </section>

        <section className="mt-14">
          <h2 className="text-2xl font-semibold text-foreground">Features</h2>
          <Bullets items={project.features} />
        </section>

        <section className="mt-14">
          <h2 className="text-2xl font-semibold text-foreground">Tech Stack</h2>
          <div className="mt-5 flex flex-wrap gap-2">
            {project.tech.map((t) => (
              <span
                key={t}
                className="rounded-full border border-border bg-foreground/[0.05] px-4 py-2 text-xs font-medium text-foreground/80"
              >
                {t}
              </span>
            ))}
          </div>
        </section>

        <section className="mt-14">
          <h2 className="text-2xl font-semibold text-foreground">What I Learnt</h2>
          <Bullets items={project.learnt} />
        </section>

        {/* GitHub Source Link Subheading */}
        <section className="mt-16 border-t border-border pt-12">
          <h2 className="text-2xl font-semibold text-foreground">
            Source Code &amp; Repository
          </h2>
          <p className="mt-3 text-base text-muted-foreground">
            Explore the full codebase, documentation, and implementation details on GitHub:
          </p>
          <div className="mt-6">
            <a
              href={project.github}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-3 rounded-2xl border border-border bg-secondary/80 px-7 py-4 text-base font-semibold text-foreground transition-all duration-300 hover:bg-accent hover:border-foreground/40 hover:scale-[1.02]"
            >
              <Github size={22} />
              <span>{project.github}</span>
              <ExternalLink size={16} className="opacity-70" />
            </a>
          </div>
        </section>
      </div>
    </main>
  );
}
