import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/portfolio/Navbar";
import { Hero } from "@/components/portfolio/Hero";
import { About } from "@/components/portfolio/About";
import { Skills } from "@/components/portfolio/Skills";
import { Projects } from "@/components/portfolio/Projects";
import { Journey } from "@/components/portfolio/Journey";
import { Testimonials } from "@/components/portfolio/Testimonials";
import { BeyondCode } from "@/components/portfolio/BeyondCode";
import { Contact } from "@/components/portfolio/Contact";

const title = "Thokala Sai Varun — CSE (AI & Data Science) Portfolio";
const description =
  "Portfolio of Thokala Sai Varun, B.Tech CSE student specializing in AI & Data Science — projects in machine learning, full-stack web and applied AI.";

export const Route = createFileRoute("/")({
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
  component: Index,
});

function Index() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Journey />
      <Testimonials />
      <BeyondCode />
      <Contact />
    </main>
  );
}
