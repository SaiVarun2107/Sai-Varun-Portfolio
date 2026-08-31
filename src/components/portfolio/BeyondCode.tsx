import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  X,
  Sparkles,
  Palette,
  Maximize2,
  CheckCircle2,
  Brush,
  BookOpen,
  Film,
} from "lucide-react";
import { ADDITIONAL_SKILLS, LANGUAGES } from "./data";
import { Reveal, Section, SectionHeading } from "./primitives";
import {
  SKILL_DETAILS_DATA,
  type ArtworkItem,
  type AnimationItem,
} from "./skillsShowcaseData";

export function BeyondCode() {
  const [activeSkill, setActiveSkill] = useState<string | null>(null);
  const [artFilter, setArtFilter] = useState<"all" | "Digital Art" | "Paper Sketch">("all");
  const [lightboxItem, setLightboxItem] = useState<{
    title: string;
    subtitle: string;
    image?: string;
    videoUrl?: string;
    description: string;
    tags: string[];
  } | null>(null);

  // Close modal on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        if (lightboxItem) {
          setLightboxItem(null);
        } else {
          setActiveSkill(null);
        }
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [lightboxItem]);

  const renderBubble = (skill: (typeof ADDITIONAL_SKILLS)[number], i: number) => {
    const label = skill.label || skill.name;
    const isSelected = activeSkill === skill.name;

    return (
      <motion.div
        key={skill.name}
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        animate={{ y: [0, -6, 0, 6, 0] }}
        transition={{
          opacity: { duration: 0.4 },
          scale: { duration: 0.4 },
          y: {
            duration: 5 + (i % 3),
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 0.2,
          },
        }}
        className="max-w-full"
      >
        <motion.button
          type="button"
          onClick={() => {
            setActiveSkill(skill.name);
            setArtFilter("all");
          }}
          whileHover={{ scale: 1.12, y: -4 }}
          whileTap={{ scale: 1.04 }}
          transition={{ type: "spring", stiffness: 350, damping: 22 }}
          className={`group cursor-pointer select-none rounded-full border px-5 py-3 text-center flex items-center justify-center gap-2 text-sm font-medium shadow-lg backdrop-blur-md transition-all duration-300 sm:px-8 sm:py-4 sm:text-lg md:px-10 md:py-5 md:text-xl ${
            isSelected
              ? "border-foreground bg-foreground/[0.18] text-foreground ring-2 ring-foreground/40 shadow-[0_0_24px_rgba(255,255,255,0.2)]"
              : "border-border/80 bg-card/90 text-foreground/90 hover:border-foreground hover:bg-foreground/[0.12] hover:text-foreground hover:shadow-[0_0_24px_rgba(255,255,255,0.12)] ring-1 ring-white/5 hover:ring-white/20"
          }`}
        >
          <span>{label}</span>
          <Sparkles
            size={14}
            className="opacity-0 transition-opacity duration-300 group-hover:opacity-100 text-foreground/70"
          />
        </motion.button>
      </motion.div>
    );
  };

  const selectedData = activeSkill ? SKILL_DETAILS_DATA[activeSkill] : null;

  const filteredArtworks =
    selectedData?.artworks?.filter(
      (art) => artFilter === "all" || art.mediumType === artFilter
    ) || [];

  return (
    <Section id="beyond">
      <div className="text-center">
        <SectionHeading>Additional Skills</SectionHeading>
        <Reveal>
          <p className="mx-auto mt-4 max-w-xl text-xs text-muted-foreground sm:mt-6 sm:text-base">
            I'm a canvas of many skills — but I choose to paint with code.
          </p>
          <p className="mt-2 text-xs text-muted-foreground/60 flex items-center justify-center gap-1.5">
            <Sparkles size={13} className="text-foreground/70 animate-pulse" />
            <span>Tap any skill to explore drawings, animation videos &amp; highlights</span>
          </p>
        </Reveal>
      </div>

      {/* Reverse triangle (3 -> 2 -> 1) skill bubble layout */}
      <div className="mx-auto mt-10 flex flex-col items-center justify-center gap-3.5 max-w-4xl px-2 py-2 sm:mt-14 sm:gap-6 lg:gap-8 sm:px-4">
        {/* Row 1: 3 items */}
        <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-6 lg:gap-8">
          {ADDITIONAL_SKILLS.slice(0, 3).map((skill, i) => renderBubble(skill, i))}
        </div>

        {/* Row 2: 2 items */}
        <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-6 lg:gap-8">
          {ADDITIONAL_SKILLS.slice(3, 5).map((skill, i) => renderBubble(skill, i + 3))}
        </div>

        {/* Row 3: 1 item */}
        <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-6 lg:gap-8">
          {ADDITIONAL_SKILLS.slice(5, 6).map((skill, i) => renderBubble(skill, i + 5))}
        </div>
      </div>

      {/* Clean Interactive Showcase Modal */}
      <AnimatePresence>
        {selectedData && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 md:p-6 overflow-y-auto">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setActiveSkill(null)}
              className="fixed inset-0 bg-black/85 backdrop-blur-md"
            />

            {/* Modal Container */}
            <motion.div
              initial={{ opacity: 0, scale: 0.94, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.94, y: 20 }}
              transition={{ type: "spring", damping: 26, stiffness: 340 }}
              className="relative z-10 my-auto w-full max-w-3xl max-h-[90vh] flex flex-col rounded-3xl border border-border/90 bg-card/95 shadow-2xl backdrop-blur-2xl ring-1 ring-white/10 overflow-hidden"
            >
              {/* Modal Header */}
              <div className="relative border-b border-border/70 p-5 sm:p-6 flex items-start justify-between gap-4 bg-gradient-to-b from-foreground/[0.04] to-transparent">
                <div className="flex items-center gap-4">
                  <span className="flex h-12 w-12 sm:h-14 sm:w-14 items-center justify-center rounded-2xl bg-foreground/10 text-3xl sm:text-4xl shadow-inner ring-1 ring-white/10 shrink-0">
                    {selectedData.emoji}
                  </span>
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="rounded-full bg-foreground/[0.08] px-2.5 py-0.5 text-[10px] font-semibold tracking-wider uppercase text-foreground/80 border border-border/80">
                        {selectedData.badge}
                      </span>
                    </div>
                    <h3 className="mt-1 text-lg font-bold text-foreground sm:text-xl md:text-2xl eyebrow tracking-wide">
                      {selectedData.title}
                    </h3>
                    <p className="text-xs text-muted-foreground sm:text-sm">
                      {selectedData.subtitle}
                    </p>
                  </div>
                </div>

                <button
                  onClick={() => setActiveSkill(null)}
                  className="rounded-full p-2 text-muted-foreground transition-all duration-200 hover:bg-foreground/15 hover:text-foreground active:scale-90"
                  aria-label="Close dialog"
                >
                  <X size={20} />
                </button>
              </div>

              {/* Modal Body / Scrollable Content Area */}
              <div className="flex-1 overflow-y-auto p-5 sm:p-6 space-y-6">
                {/* Description */}
                <p className="text-xs sm:text-sm leading-relaxed text-muted-foreground">
                  {selectedData.description}
                </p>

                {/* DRAW / ARTWORK GALLERY SHOWCASE */}
                {activeSkill === "Draw" && selectedData.artworks && (
                  <div className="space-y-4 pt-1">
                    {/* Filter Pills & Header */}
                    <div className="flex flex-wrap items-center justify-between gap-2.5 pb-1 border-b border-border/50">
                      <div className="flex items-center gap-1.5">
                        <Palette size={15} className="text-foreground/80" />
                        <span className="text-xs sm:text-sm font-bold text-foreground">
                          Artworks &amp; Sketches ({selectedData.artworks.length})
                        </span>
                      </div>

                      <div className="flex items-center gap-1.5">
                        <button
                          type="button"
                          onClick={() => setArtFilter("all")}
                          className={`rounded-full px-3 py-1 text-[11px] font-semibold transition-all ${
                            artFilter === "all"
                              ? "bg-foreground text-background shadow-xs"
                              : "bg-foreground/[0.05] text-muted-foreground hover:text-foreground"
                          }`}
                        >
                          All ({selectedData.artworks.length})
                        </button>
                        <button
                          type="button"
                          onClick={() => setArtFilter("Digital Art")}
                          className={`inline-flex items-center gap-1 rounded-full px-3 py-1 text-[11px] font-semibold transition-all ${
                            artFilter === "Digital Art"
                              ? "bg-foreground text-background shadow-xs"
                              : "bg-foreground/[0.05] text-muted-foreground hover:text-foreground"
                          }`}
                        >
                          <Brush size={11} /> Digital Art (5)
                        </button>
                        <button
                          type="button"
                          onClick={() => setArtFilter("Paper Sketch")}
                          className={`inline-flex items-center gap-1 rounded-full px-3 py-1 text-[11px] font-semibold transition-all ${
                            artFilter === "Paper Sketch"
                              ? "bg-foreground text-background shadow-xs"
                              : "bg-foreground/[0.05] text-muted-foreground hover:text-foreground"
                          }`}
                        >
                          <BookOpen size={11} /> Paper Sketches (2)
                        </button>
                      </div>
                    </div>

                    {/* Artwork Cards Grid */}
                    <div className="grid gap-4 sm:grid-cols-2">
                      {filteredArtworks.map((art: ArtworkItem) => (
                        <motion.div
                          key={art.id}
                          layout
                          whileHover={{ y: -3 }}
                          transition={{ duration: 0.2 }}
                          onClick={() =>
                            setLightboxItem({
                              title: art.title,
                              subtitle: `${art.category} · ${art.software}`,
                              image: art.image,
                              description: art.description,
                              tags: art.tags,
                            })
                          }
                          className="group relative cursor-pointer overflow-hidden rounded-2xl border border-border/80 bg-foreground/[0.03] p-3.5 transition-all hover:border-foreground/40 hover:bg-foreground/[0.06] hover:shadow-xl"
                        >
                          {/* Image Container with balanced uncropped aspect */}
                          <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl bg-black/50 flex items-center justify-center">
                            <img
                              src={art.image}
                              alt={art.title}
                              className="h-full w-full object-contain p-1 transition-transform duration-500 group-hover:scale-105"
                              loading="lazy"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end justify-between p-3">
                              <span className="inline-flex items-center gap-1 text-xs font-semibold text-white">
                                <Maximize2 size={13} /> Click to expand
                              </span>
                              <span className="rounded-md bg-white/20 backdrop-blur-xs px-2 py-0.5 text-[10px] font-semibold text-white">
                                {art.mediumType}
                              </span>
                            </div>
                          </div>

                          {/* Card Details */}
                          <div className="mt-3">
                            <div className="flex items-center justify-between gap-2">
                              <h5 className="font-bold text-sm text-foreground truncate">
                                {art.title}
                              </h5>
                              <span className="rounded-full bg-foreground/[0.06] px-2 py-0.5 text-[10px] font-medium text-foreground/75 whitespace-nowrap">
                                {art.mediumType}
                              </span>
                            </div>
                            <p className="text-[11px] text-muted-foreground line-clamp-1 mt-0.5">
                              {art.software}
                            </p>
                            <p className="text-xs text-foreground/80 line-clamp-2 mt-2 leading-relaxed">
                              {art.description}
                            </p>

                            <div className="mt-2.5 flex flex-wrap gap-1">
                              {art.tags.slice(0, 3).map((tag) => (
                                <span
                                  key={tag}
                                  className="rounded-md border border-border/60 bg-foreground/[0.04] px-2 py-0.5 text-[10px] font-medium text-foreground/70"
                                >
                                  {tag}
                                </span>
                              ))}
                            </div>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                )}

                {/* ANIMATE / 2D ANIMATION VIDEO SHOWCASE */}
                {activeSkill === "Animate" && selectedData.animations && (
                  <div className="space-y-4 pt-1">
                    <div className="flex items-center justify-between pb-1 border-b border-border/50">
                      <div className="flex items-center gap-1.5">
                        <Film size={15} className="text-foreground/80" />
                        <span className="text-xs sm:text-sm font-bold text-foreground">
                          2D Animation Videos ({selectedData.animations.length})
                        </span>
                      </div>
                      <span className="text-[11px] text-muted-foreground">
                        Play inline or expand to watch
                      </span>
                    </div>

                    <div className="space-y-4">
                      {selectedData.animations.map((anim: AnimationItem) => (
                        <div
                          key={anim.id}
                          className="overflow-hidden rounded-2xl border border-border/80 bg-foreground/[0.03] p-4 transition-all hover:border-foreground/30"
                        >
                          <div className="flex flex-col md:flex-row gap-4">
                            {/* Video Player Container */}
                            <div className="relative aspect-[16/10] md:w-5/12 overflow-hidden rounded-xl bg-black/60 shrink-0 flex items-center justify-center border border-white/5">
                              <video
                                src={anim.videoUrl}
                                controls
                                playsInline
                                loop
                                muted
                                preload="metadata"
                                className="h-full w-full object-contain"
                              />

                              {/* Top-Right Maximize button */}
                              <button
                                type="button"
                                onClick={() =>
                                  setLightboxItem({
                                    title: anim.title,
                                    subtitle: `${anim.category} · ${anim.software}`,
                                    videoUrl: anim.videoUrl,
                                    description: anim.description,
                                    tags: anim.tags,
                                  })
                                }
                                className="absolute top-2 right-2 rounded-lg bg-black/70 p-1.5 text-white/80 hover:text-white hover:bg-black/90 transition-colors backdrop-blur-xs"
                                aria-label="Expand video"
                              >
                                <Maximize2 size={13} />
                              </button>

                              {/* FPS badge */}
                              <span className="absolute bottom-2 left-2 rounded-md bg-black/80 px-2 py-0.5 text-[10px] font-bold text-foreground backdrop-blur-xs border border-white/10 pointer-events-none">
                                {anim.fps} FPS
                              </span>
                            </div>

                            {/* Animation Details */}
                            <div className="flex flex-col justify-between flex-1">
                              <div>
                                <div className="flex items-center justify-between gap-2">
                                  <h5 className="font-bold text-base text-foreground">
                                    {anim.title}
                                  </h5>
                                  <span className="rounded-full border border-border bg-foreground/[0.05] px-2.5 py-0.5 text-[10px] font-semibold text-foreground/80">
                                    {anim.software}
                                  </span>
                                </div>
                                <p className="mt-1 text-xs text-muted-foreground">
                                  {anim.motionType}
                                </p>
                                <p className="mt-2 text-xs sm:text-sm leading-relaxed text-foreground/85">
                                  {anim.description}
                                </p>
                              </div>

                              <div className="mt-3 pt-3 border-t border-border/50 flex flex-wrap items-center justify-between gap-2">
                                <div className="flex flex-wrap gap-1.5">
                                  {anim.tags.map((tag) => (
                                    <span
                                      key={tag}
                                      className="rounded-md border border-border/60 bg-foreground/[0.04] px-2 py-0.5 text-[10px] font-medium text-foreground/70"
                                    >
                                      {tag}
                                    </span>
                                  ))}
                                </div>
                                <button
                                  type="button"
                                  onClick={() =>
                                    setLightboxItem({
                                      title: anim.title,
                                      subtitle: `${anim.category} · ${anim.software}`,
                                      videoUrl: anim.videoUrl,
                                      description: anim.description,
                                      tags: anim.tags,
                                    })
                                  }
                                  className="text-xs font-semibold text-foreground hover:underline inline-flex items-center gap-1"
                                >
                                  <Maximize2 size={12} /> Cinematic View
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* HIGHLIGHTS FOR OTHER SKILLS (TAEKWONDO, CODE, DANCE, FOOTBALL) */}
                {selectedData.highlights && (
                  <div className="space-y-3 pt-2">
                    <h4 className="text-xs uppercase tracking-wider font-bold text-muted-foreground">
                      Core Highlights &amp; Practice
                    </h4>
                    <div className="grid gap-3 sm:grid-cols-1">
                      {selectedData.highlights.map((item) => (
                        <div
                          key={item.title}
                          className="rounded-2xl border border-border/80 bg-foreground/[0.03] p-4 transition-colors hover:bg-foreground/[0.05]"
                        >
                          <h5 className="font-bold text-sm text-foreground flex items-center gap-2">
                            <CheckCircle2 size={15} className="text-foreground/70 shrink-0" />
                            {item.title}
                          </h5>
                          <p className="mt-1.5 text-xs sm:text-sm leading-relaxed text-muted-foreground">
                            {item.desc}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Key Tags */}
                <div className="border-t border-border/60 pt-4">
                  <span className="eyebrow text-[11px] text-muted-foreground block mb-2.5">
                    Key Focus &amp; Tools
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {selectedData.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-border/80 bg-foreground/[0.05] px-3 py-1 text-xs font-medium text-foreground/80"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Fullscreen Lightbox Preview Modal with Video and Uncropped Image Support */}
      <AnimatePresence>
        {lightboxItem && (
          <div className="fixed inset-0 z-60 flex items-center justify-center p-3 sm:p-5">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setLightboxItem(null)}
              className="fixed inset-0 bg-black/92 backdrop-blur-lg"
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.92 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.92 }}
              transition={{ type: "spring", damping: 25, stiffness: 320 }}
              className="relative z-20 max-h-[94vh] max-w-4xl w-full flex flex-col rounded-3xl border border-white/20 bg-card p-4 sm:p-6 shadow-2xl overflow-hidden"
            >
              <div className="flex items-center justify-between pb-3 border-b border-border">
                <div>
                  <h4 className="font-bold text-base sm:text-lg text-foreground">
                    {lightboxItem.title}
                  </h4>
                  <p className="text-xs text-muted-foreground">{lightboxItem.subtitle}</p>
                </div>
                <button
                  onClick={() => setLightboxItem(null)}
                  className="rounded-full p-2 text-muted-foreground hover:bg-foreground/10 hover:text-foreground transition-colors"
                  aria-label="Close modal"
                >
                  <X size={20} />
                </button>
              </div>

              {/* Media Container (Video or Image) */}
              <div className="relative my-3.5 flex-1 flex items-center justify-center overflow-hidden rounded-2xl bg-black/70 max-h-[66vh] min-h-[42vh] p-2">
                {lightboxItem.videoUrl ? (
                  <video
                    src={lightboxItem.videoUrl}
                    autoPlay
                    controls
                    loop
                    playsInline
                    className="max-h-[62vh] max-w-full object-contain rounded-lg"
                  />
                ) : (
                  <img
                    src={lightboxItem.image}
                    alt={lightboxItem.title}
                    className="max-h-[62vh] max-w-full object-contain select-none rounded-lg"
                  />
                )}
              </div>

              <div className="space-y-2">
                <p className="text-xs sm:text-sm text-foreground/90 leading-relaxed">
                  {lightboxItem.description}
                </p>
                {lightboxItem.tags && (
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {lightboxItem.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-md border border-border/60 bg-foreground/[0.05] px-2 py-0.5 text-[10px] font-medium text-foreground/70"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Language proficiency */}
      <div className="mt-16 text-center sm:mt-24">
        <SectionHeading>Language Proficiency</SectionHeading>
        <div className="mx-auto mt-10 max-w-lg sm:mt-14">
          {LANGUAGES.map((lang, i) => (
            <Reveal key={lang.name} delay={i * 0.06}>
              <div className="flex items-center justify-center gap-4 py-3 sm:gap-12 sm:py-4 md:gap-16">
                <span className="w-20 text-right text-sm font-medium text-foreground sm:w-32 sm:text-lg">
                  {lang.name}
                </span>
                <span className="flex items-center gap-1.5 sm:gap-2">
                  {[1, 2, 3, 4, 5].map((n) => (
                    <span
                      key={n}
                      aria-hidden
                      className={`h-1.5 w-4.5 rounded-full sm:w-8 ${
                        n <= lang.level ? "bg-foreground" : "bg-foreground/20"
                      }`}
                    />
                  ))}
                </span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </Section>
  );
}
