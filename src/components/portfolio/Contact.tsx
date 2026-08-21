import { Download } from "lucide-react";
import { CONTACT, WHATSAPP_CONNECT, WHATSAPP_RESUME } from "./data";
import { Reveal, Section, SectionHeading } from "./primitives";

const LINKS = [
  { label: "Phone", value: "+91 6281753550", href: `tel:+91${CONTACT.phone}` },
  { label: "WhatsApp", value: "Chat on WhatsApp", href: WHATSAPP_CONNECT },
  { label: "Email", value: CONTACT.email, href: `mailto:${CONTACT.email}` },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/saivar",
    href: CONTACT.linkedin,
  },
];

export function Contact() {
  return (
    <Section id="contact">
      <SectionHeading>Contact</SectionHeading>
      <Reveal>
        <p className="mt-12 text-4xl font-bold leading-tight tracking-tight sm:text-5xl md:text-6xl">
          Let's work together.
        </p>
      </Reveal>

      <Reveal delay={0.1}>
        <a
          href={WHATSAPP_RESUME}
          target="_blank"
          rel="noreferrer"
          className="mt-10 inline-flex items-center gap-2 rounded-full bg-foreground px-7 py-3 text-sm font-semibold text-background transition-transform duration-300 hover:scale-105"
        >
          Get resume
          <Download size={16} />
        </a>
      </Reveal>

      <div className="mt-14 border-t border-border">
        {LINKS.map((link, i) => (
          <Reveal key={link.label} delay={i * 0.08}>
            <div className="group flex flex-wrap items-baseline justify-between gap-3 border-b border-border py-6">
              <span className="eyebrow text-sm text-muted-foreground">
                {link.label}
              </span>
              <a
                href={link.href}
                target={link.href.startsWith("http") ? "_blank" : undefined}
                rel="noreferrer"
                className="text-base text-muted-foreground transition-colors duration-300 group-hover:text-foreground sm:text-lg"
              >
                {link.value}
              </a>
            </div>
          </Reveal>
        ))}
      </div>

      <footer className="mt-20 flex flex-wrap items-center justify-between gap-4 border-t border-border pt-8 text-xs text-muted-foreground">
        <span>© {new Date().getFullYear()} Thokala Sai Varun</span>
        <a href="#home" className="transition-colors hover:text-foreground">
          Back to top
        </a>
      </footer>
    </Section>
  );
}
