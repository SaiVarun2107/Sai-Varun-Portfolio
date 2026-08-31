export interface ArtworkItem {
  id: string;
  title: string;
  category: string;
  software: string;
  year: string;
  description: string;
  image: string;
  mediumType: "Digital Art" | "Paper Sketch";
  tags: string[];
}

export interface AnimationItem {
  id: string;
  title: string;
  category: string;
  software: string;
  fps: number;
  description: string;
  videoUrl: string;
  motionType: string;
  tags: string[];
}

export interface SkillDetailConfig {
  emoji: string;
  title: string;
  subtitle: string;
  badge: string;
  description: string;
  tags: string[];
  artworks?: ArtworkItem[];
  animations?: AnimationItem[];
  highlights?: { title: string; desc: string }[];
}

export const SKILL_DETAILS_DATA: Record<string, SkillDetailConfig> = {
  Draw: {
    emoji: "🎨",
    title: "Art, Sketching & Digital Illustration",
    subtitle: "Digital illustrations on iPad & traditional paper sketches",
    badge: "Creative Arts",
    description:
      "Creating stylized illustrations, anime character studies, and expressive drawings using Sketchbook on iPad, ibisPaint X, and traditional graphite pencil in paper sketchbooks.",
    tags: [
      "iPad Sketchbook",
      "ibisPaint X",
      "Digital Art",
      "Paper Sketching",
      "Graphite Pencil",
      "Anime Art",
      "Anatomy & Eye Studies",
    ],
    artworks: [
      {
        id: "art-1",
        title: "Stargaze · Celestial Eye",
        category: "Character Concept & Digital Art",
        software: "iPad Sketchbook · ibisPaint X",
        year: "Digital Art",
        mediumType: "Digital Art",
        description:
          "Stylized anime protagonist set against a twilight purple sky and drifting clouds, featuring a striking celestial black star motif radiating over the eye with glowing white accents.",
        image: "/skills/draw/celestial-star.png",
        tags: ["iPad Sketchbook", "ibisPaint X", "Character Concept", "Digital Art"],
      },
      {
        id: "art-2",
        title: "The Inner Gaze · Macro Eye Study",
        category: "Surreal Illustration & Texturing",
        software: "iPad Sketchbook · ibisPaint X",
        year: "Digital Art",
        mediumType: "Digital Art",
        description:
          "Intricately textured macro eye illustration with a stylized blue-haired character gazing outwards from within the iris, surrounded by detailed cross-hatching and sparkling highlights.",
        image: "/skills/draw/iris-reflection.png",
        tags: ["Surrealism", "Eye Study", "Texture & Hatching", "ibisPaint X"],
      },
      {
        id: "art-3",
        title: "Vibrant Focus · Framing the Gaze",
        category: "Expressive Inking & Color Contrast",
        software: "iPad Sketchbook · Digital Stylus",
        year: "Digital Art",
        mediumType: "Digital Art",
        description:
          "High-energy expressive sketch capturing an intense gaze framed between fingers, with dynamic warm yellow strokes, fiery hair highlights, and crisp sparkle stars.",
        image: "/skills/draw/spark-frame.jpg",
        tags: ["Expressive Sketch", "Dynamic Inking", "Color Theory", "iPad Art"],
      },
      {
        id: "art-4",
        title: "Silent Observer · Depth Study",
        category: "Concept Art & Eye Study",
        software: "iPad Sketchbook · ibisPaint X",
        year: "Digital Art",
        mediumType: "Digital Art",
        description:
          "Moody dark-void composition with a hooded white-haired figure poised atop an iridescent blue pupil, contrasting deep shadows with subtle eyelash glimmers.",
        image: "/skills/draw/eye-observer.png",
        tags: ["Concept Art", "Deep Contrast", "Surreal", "Digital Painting"],
      },
      {
        id: "art-5",
        title: "Intertwined · Layered Hand Anatomy",
        category: "Digital Anatomy & Line Art",
        software: "iPad Sketchbook · Stylus Inking",
        year: "Digital Art",
        mediumType: "Digital Art",
        description:
          "Layered semi-transparent hands intertwined in delicate connection, utilizing soft pink, teal, and charcoal contour line-work to convey depth, form, and emotional resonance.",
        image: "/skills/draw/hands-study.png",
        tags: ["Anatomy Study", "Line Art", "Layering & Opacity", "Stylus Inking"],
      },
      {
        id: "art-6",
        title: "Eren & Mikasa · Attack on Titan Study",
        category: "Traditional Pencil Sketch",
        software: "Paper Sketchbook · Graphite Pencil",
        year: "Paper Sketch",
        mediumType: "Paper Sketch",
        description:
          "Iconic dual-panel Attack on Titan emotional sketch study capturing the poignant gaze between Eren and Mikasa with delicate graphite pencil cross-hatching, tears, and expressive eyes.",
        image: "/skills/draw/eyes-emotion-sketch.jpg",
        tags: ["Attack on Titan", "Eren & Mikasa", "Paper Sketch", "Graphite Pencil", "Anime Art"],
      },
      {
        id: "art-7",
        title: "Eren & Mikasa · Smiling Moment",
        category: "Traditional Anime Sketch",
        software: "Paper Sketchbook · Graphite Pencil",
        year: "Paper Sketch",
        mediumType: "Paper Sketch",
        description:
          "Hand-drawn Attack on Titan sketchbook drawing of Eren Yeager and Mikasa Ackerman sharing a heartwarming smile in their Scout Regiment uniforms.",
        image: "/skills/draw/aot-duo-sketchbook.png",
        tags: ["Attack on Titan", "Eren & Mikasa", "Paper Sketch", "Pencil Shading"],
      },
    ],
  },

  Animate: {
    emoji: "🎬",
    title: "2D Animation & Motion Design",
    subtitle: "Frame-by-frame visual storytelling & digital animation videos",
    badge: "Motion Arts",
    description:
      "Creating 2D frame-by-frame animations, character gesture loops, and timing studies using iPad Sketchbook, ibisPaint X, and FlipaClip. Understanding motion physics and easing curves directly informs how I craft silky smooth web UI interactions.",
    tags: [
      "iPad Sketchbook",
      "ibisPaint X",
      "FlipaClip",
      "2D Animation",
      "Frame-by-Frame",
      "Character Motion",
      "Timing Curves",
      "Motion Physics",
    ],
    animations: [
      {
        id: "anim-her",
        title: "HER · Character Animation",
        category: "2D Character Animation",
        software: "iPad Sketchbook · Digital Animation",
        fps: 24,
        description:
          "Frame-by-frame stylized 2D digital character animation created in Sketchbook on iPad, exploring expressive gestures, hair motion physics, and clean inking arcs.",
        videoUrl: "/skills/animate/her-animation.mp4",
        motionType: "Character Gesture & Expression",
        tags: ["iPad Sketchbook", "2D Animation", "Character Motion", "Frame-by-Frame"],
      },
      {
        id: "anim-face",
        title: "FACE · Facial Dynamics & Expressions",
        category: "2D Facial Motion Study",
        software: "ibisPaint X · Frame-by-Frame",
        fps: 24,
        description:
          "Dynamic facial animation created in ibisPaint X capturing fluid perspective shifts, blinking, expressive eye movement, and organic timing curves.",
        videoUrl: "/skills/animate/face-animation.mp4",
        motionType: "Facial Timing & Perspective",
        tags: ["ibisPaint X", "Facial Dynamics", "Timing Curves", "2D Animation"],
      },
      {
        id: "anim-purple-red",
        title: "Purple & Red · Color & Motion Study",
        category: "Visual Motion & Inking Flow",
        software: "FlipaClip · Digital Animation",
        fps: 24,
        description:
          "High-contrast stylized motion loop created in FlipaClip exploring vibrant color transitions, kinetic pacing, and continuous shape evolution.",
        videoUrl: "/skills/animate/purple-red-animation.mp4",
        motionType: "Color Transition & Kinetic Flow",
        tags: ["FlipaClip", "Color Motion", "Kinetic Flow", "Loop"],
      },
    ],
    highlights: [
      {
        title: "Frame-by-Frame Storytelling",
        desc: "Crafting expressive movements, character gestures, and continuous motion flow through hand-drawn digital frames.",
      },
      {
        title: "Timing & Easing Physics",
        desc: "Applying anticipation, squash & stretch, and natural momentum decay to make animations feel impactful and physically grounded.",
      },
      {
        title: "Motion-Informed Frontend",
        desc: "Translating animation principles into smooth, high-frame-rate CSS and Framer Motion web UI interactions.",
      },
    ],
  },

  Taekwondo: {
    emoji: "🥋",
    title: "Taekwondo Practice & Tournaments",
    subtitle: "National Champion · 1x Gold & 1x Silver (Nationals) · 1x Silver (Districts)",
    badge: "Martial Arts",
    description:
      "Practicing Taekwondo for physical stamina, agility, and mental resilience. Competed at National and District championship tournaments, building quick reflexes, focus, and composure under pressure.",
    tags: [
      "National Champion",
      "🥇 1x Gold (Nationals)",
      "🥈 1x Silver (Nationals)",
      "🥈 1x Silver (Districts)",
      "Sparring & Forms",
      "Agility & Reflexes",
      "Discipline",
    ],
    highlights: [
      {
        title: "National Level Gold Medalist 🥇",
        desc: "Won 1st Place Gold Medal at the National Taekwondo Championship.",
      },
      {
        title: "National Level Silver Medalist 🥈",
        desc: "Secured Silver Medal at the National Taekwondo Championship tournament.",
      },
      {
        title: "District Level Silver Medalist 🥈",
        desc: "Earned Silver Medal at the District Level Taekwondo Championship.",
      },
      {
        title: "Reflexes & Mental Composure",
        desc: "Training consistently builds high agility, lightning-fast reaction speed, and the mental composure to stay calm under intense pressure.",
      },
    ],
  },

  Code: {
    emoji: "💻",
    title: "Software & Problem Solving",
    subtitle: "Core programming & building practical applications",
    badge: "Core Engineering",
    description:
      "Working with core languages and clean fundamentals to build practical software applications, solve problems logically, and continuously learn new technologies.",
    tags: ["Python", "Java", "C", "SQL", "JavaScript", "Problem Solving", "Clean Code"],
    highlights: [
      {
        title: "Core Programming Fundamentals",
        desc: "Writing structured, maintainable code in Python, Java, C, and SQL.",
      },
      {
        title: "Practical Web Applications",
        desc: "Building functional user interfaces and reliable backend services.",
      },
      {
        title: "Continuous Learning",
        desc: "Exploring new tools and libraries with curiosity to expand technical breadth.",
      },
    ],
  },

  Dance: {
    emoji: "🕺",
    title: "Dance & Movement",
    subtitle: "Casual hobby, rhythm & de-stressing",
    badge: "Recreation & Hobbies",
    description:
      "A fun hobby and creative outlet I enjoy to unwind, de-stress, or have fun when bored. Dancing to music helps clear the mind, recharge energy, and stay active.",
    tags: ["Freestyle", "Recreation", "Rhythm", "De-Stressing", "Music", "Casual Hobby"],
    highlights: [
      {
        title: "De-Stressing & Recharging",
        desc: "A fun way to take a break from screens, refresh the mind, and recharge focus.",
      },
      {
        title: "Freestyle & Rhythm",
        desc: "Grooving to music beats casually for fun and personal enjoyment.",
      },
    ],
  },

  Football: {
    emoji: "⚽",
    title: "Football & Sports",
    subtitle: "Casual matches, recreation & staying active",
    badge: "Recreation & Hobbies",
    description:
      "Playing casual football matches with friends for fun, recreation, and staying physically active. It's a great way to unwind outdoors and enjoy friendly team games.",
    tags: ["Casual Football", "Recreation", "Staying Active", "Friendly Teamwork", "Fitness"],
    highlights: [
      {
        title: "Casual Matches & Fitness",
        desc: "Playing recreational matches outdoors to stay fit and have fun.",
      },
      {
        title: "Friendly Teamwork",
        desc: "Enjoying the camaraderie, passing game, and lighthearted matches with friends.",
      },
    ],
  },
};
