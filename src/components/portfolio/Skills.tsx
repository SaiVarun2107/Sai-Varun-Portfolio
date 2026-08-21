import { SKILL_GROUPS } from "./data";
import { Reveal, Section, SectionHeading } from "./primitives";

const SKILL_ICON_MAP: Record<string, string> = {
  Python: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
  Java: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
  C: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg",
  SQL: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azuresqldatabase/azuresqldatabase-original.svg",
  HTML: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
  CSS: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
  JavaScript: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
  MySQL: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
  Git: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
  GitHub: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
  Supabase: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/supabase/supabase-original.svg",
  Figma: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg",
  Canva: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/canva/canva-original.svg",
};

function SkillCard({ name }: { name: string }) {
  const iconUrl = SKILL_ICON_MAP[name];

  const renderCustomIcon = () => {
    if (name === "Stitch") {
      return (
        <svg viewBox="0 0 24 24" className="h-9 w-9 fill-none stroke-current text-purple-400 stroke-2">
          <path d="M4 12h16M12 4v16M8 8l8 8M16 8l-8 8" />
        </svg>
      );
    }
    if (name === "ibisPaint X") {
      return (
        <svg viewBox="0 0 24 24" className="h-9 w-9 fill-none stroke-current text-sky-400 stroke-2">
          <path d="M12 19l7-7 3 3-7 7-3-3z" />
          <path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z" />
          <path d="M2 2l7.5 7.5" />
        </svg>
      );
    }
    if (name === "FlipaClip") {
      return (
        <svg viewBox="0 0 24 24" className="h-9 w-9 fill-none stroke-current text-emerald-400 stroke-2">
          <rect x="3" y="5" width="14" height="14" rx="3" />
          <rect x="7" y="9" width="14" height="14" rx="3" className="opacity-60" />
        </svg>
      );
    }
    return (
      <span className="text-sm font-bold text-foreground/80 tracking-tight sm:text-base">
        {name.slice(0, 2).toUpperCase()}
      </span>
    );
  };

  return (
    <div className="flex flex-col items-center gap-2.5">
      <div className="group relative flex h-20 w-20 items-center justify-center overflow-hidden rounded-2xl bg-skill-card shadow-md ring-1 ring-black/5 transition-all duration-300 hover:-translate-y-1 hover:bg-skill-card-hover sm:h-24 sm:w-24">
        {iconUrl ? (
          <img
            src={iconUrl}
            alt={name}
            className="h-10 w-10 object-contain transition-transform duration-300 group-hover:scale-110 sm:h-12 sm:w-12"
            loading="lazy"
          />
        ) : (
          renderCustomIcon()
        )}
      </div>
      <span className="text-xs font-medium text-muted-foreground sm:text-sm">
        {name}
      </span>
    </div>
  );
}

export function Skills() {
  return (
    <Section id="skills">
      <SectionHeading>Skills</SectionHeading>
      <div className="mt-14 grid gap-12 sm:gap-14 md:grid-cols-2">
        {SKILL_GROUPS.map((group, i) => (
          <Reveal key={group.title} delay={i * 0.08}>
            <div className="space-y-5">
              <h3 className="text-sm font-semibold tracking-wide text-foreground sm:text-base">
                {group.title}
              </h3>
              <div className="flex flex-wrap gap-4 sm:gap-5">
                {group.items.map((item) => (
                  <SkillCard key={item} name={item} />
                ))}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
      <Reveal delay={0.1}>
        <p className="mt-14 text-sm text-muted-foreground">
          More certifications and achievements are listed on my{" "}
          <a
            href="https://www.linkedin.com/in/saivar/"
            target="_blank"
            rel="noreferrer"
            className="text-foreground underline underline-offset-4"
          >
            LinkedIn
          </a>
          .
        </p>
      </Reveal>
    </Section>
  );
}
