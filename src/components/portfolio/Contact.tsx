import { useState } from "react";
import { Download, Check, Copy, Send } from "lucide-react";
import { CONTACT, WHATSAPP_CONNECT, WHATSAPP_RESUME } from "./data";
import { Reveal, Section, SectionHeading } from "./primitives";

const LINKS = [
  { label: "Phone", value: "+91 6281753550", href: `tel:+91${CONTACT.phone}`, copyable: "+916281753550" },
  { label: "WhatsApp", value: "Chat on WhatsApp", href: WHATSAPP_CONNECT },
  { label: "Email", value: CONTACT.email, href: `mailto:${CONTACT.email}`, copyable: CONTACT.email },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/saivar",
    href: CONTACT.linkedin,
  },
];

export function Contact() {
  const [copiedKey, setCopiedKey] = useState<string | null>(null);
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [sentStatus, setSentStatus] = useState(false);

  const handleCopy = (text: string, key: string) => {
    navigator.clipboard.writeText(text);
    setCopiedKey(key);
    setTimeout(() => setCopiedKey(null), 2000);
  };

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.message) return;

    const messageText = `Hello Sai Varun,\n\nMy name is ${formData.name}${
      formData.email ? ` (${formData.email})` : ""
    }.\n\nMessage:\n${formData.message}`;

    const whatsappUrl = `https://wa.me/91${CONTACT.phone}?text=${encodeURIComponent(messageText)}`;
    window.open(whatsappUrl, "_blank");
    setSentStatus(true);
    setTimeout(() => setSentStatus(false), 5000);
  };

  return (
    <Section id="contact">
      <SectionHeading>Contact</SectionHeading>
      <Reveal>
        <p className="mt-8 text-3xl font-bold leading-tight tracking-tight sm:mt-12 sm:text-5xl md:text-6xl">
          Let's work together.
        </p>
      </Reveal>

      <div className="mt-12 grid gap-12 md:grid-cols-[1.1fr_0.9fr] md:gap-16">
        {/* Left Column: Direct links & Resume */}
        <div>
          <Reveal delay={0.1}>
            <p className="text-base text-muted-foreground sm:text-lg">
              I'm always open to discussing new opportunities, full-stack &amp; AI projects, or collaborating on innovative ideas.
            </p>

            <a
              href={WHATSAPP_RESUME}
              target="_blank"
              rel="noreferrer"
              className="mt-8 inline-flex w-full items-center justify-center gap-2 rounded-full bg-foreground px-7 py-3.5 text-sm font-semibold text-background transition-transform duration-300 hover:scale-105 active:scale-95 sm:w-auto"
            >
              Get resume
              <Download size={16} />
            </a>
          </Reveal>

          <div className="mt-10 border-t border-border sm:mt-12">
            {LINKS.map((link, i) => (
              <Reveal key={link.label} delay={i * 0.06}>
                <div className="group flex flex-col gap-1 border-b border-border py-4 transition-colors duration-300 hover:border-foreground/40 sm:flex-row sm:items-baseline sm:justify-between sm:gap-3 sm:py-5">
                  <span className="eyebrow text-xs text-muted-foreground sm:text-sm">
                    {link.label}
                  </span>
                  <div className="flex items-center gap-2.5">
                    <a
                      href={link.href}
                      target={link.href.startsWith("http") ? "_blank" : undefined}
                      rel="noreferrer"
                      className="break-all text-sm text-muted-foreground transition-colors duration-300 group-hover:text-foreground sm:text-base"
                    >
                      {link.value}
                    </a>
                    {link.copyable && (
                      <button
                        type="button"
                        aria-label={`Copy ${link.label}`}
                        onClick={() => handleCopy(link.copyable!, link.label)}
                        className="inline-flex h-7 w-7 items-center justify-center rounded-md border border-border bg-card text-muted-foreground transition-colors hover:text-foreground active:scale-90"
                      >
                        {copiedKey === link.label ? (
                          <Check size={13} className="text-emerald-400" />
                        ) : (
                          <Copy size={13} />
                        )}
                      </button>
                    )}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        {/* Right Column: Quick Message Form */}
        <Reveal delay={0.15}>
          <div className="rounded-3xl border border-border bg-card/60 p-6 sm:p-8 backdrop-blur-md shadow-lg">
            <h3 className="eyebrow text-base font-bold text-foreground">
              Send a quick message
            </h3>
            <p className="mt-2 text-xs text-muted-foreground sm:text-sm">
              Have a question or role in mind? Drop a message here:
            </p>

            <form onSubmit={handleSendMessage} className="mt-6 space-y-4">
              <div>
                <label htmlFor="name" className="block text-xs font-medium text-muted-foreground">
                  Your Name
                </label>
                <input
                  id="name"
                  type="text"
                  required
                  placeholder="e.g. Alex Smith"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="mt-1.5 w-full rounded-xl border border-border bg-secondary/50 px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground/50 focus:border-foreground/40 focus:outline-none"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-xs font-medium text-muted-foreground">
                  Your Email
                </label>
                <input
                  id="email"
                  type="email"
                  placeholder="e.g. alex@company.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="mt-1.5 w-full rounded-xl border border-border bg-secondary/50 px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground/50 focus:border-foreground/40 focus:outline-none"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-xs font-medium text-muted-foreground">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  required
                  placeholder="Tell me about your project or opportunity..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="mt-1.5 w-full resize-none rounded-xl border border-border bg-secondary/50 px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground/50 focus:border-foreground/40 focus:outline-none"
                />
              </div>

              <button
                type="submit"
                className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-foreground px-6 py-3 text-sm font-semibold text-background transition-transform duration-300 hover:opacity-90 active:scale-98"
              >
                <Send size={15} />
                Send via WhatsApp
              </button>

              {sentStatus && (
                <p className="text-center text-xs font-medium text-emerald-400 animate-fade-in">
                  ✓ Opening WhatsApp chat with your message!
                </p>
              )}
            </form>
          </div>
        </Reveal>
      </div>

      <footer className="mt-16 flex flex-wrap items-center justify-between gap-4 border-t border-border pt-6 text-xs text-muted-foreground sm:mt-20 sm:pt-8">
        <span>© {new Date().getFullYear()} Thokala Sai Varun</span>
        <a href="#home" className="transition-colors hover:text-foreground">
          Back to top
        </a>
      </footer>
    </Section>
  );
}
