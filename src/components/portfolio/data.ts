export const NAV_ITEMS = [
  { label: "Home", href: "#home" },
  { label: "About me", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Journey", href: "#journey" },
  { label: "Contact", href: "#contact" },
];

export const CONTACT = {
  phone: "6281753550",
  email: "saivarun210706@gmail.com",
  linkedin: "https://www.linkedin.com/in/saivar/",
};

const WA_NUMBER = "916281753550";
export const WHATSAPP_CONNECT = `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(
  "Hello Sai Varun, I came across your portfolio and would love to connect with you to discuss potential opportunities.",
)}`;
export const WHATSAPP_RESUME = `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(
  "Hello Sai Varun, I reviewed your portfolio and would like to request a copy of your resume.",
)}`;

export const ABOUT_LINES = [
  "I’m a pre-final-year B.Tech Computer Science & Engineering student specializing in Artificial Intelligence & Data Science at Vel Tech Rangarajan Dr. Sagunthala R&D Institute of Science and Technology.",
  "I enjoy building practical software, exploring AI and Machine Learning, and turning ideas into working projects while continuously learning new technologies.",
  "I work across different areas of development — from Python, Java and Flask to React, Next.js and TypeScript, with experience working with databases such as MySQL, PostgreSQL and Supabase.",
  "My internship experiences have allowed me to explore different roles, from Business Development at Younity to Machine Learning at SmartED Innovations and AI & Full-Stack Development at DIGIT Innovations, helping me adapt quickly to new environments and technologies.",
  "Beyond academics and technology, I enjoy drawing, dancing, playing sports and practicing Taekwondo. I’m always looking for opportunities to learn, experiment and grow through new experiences.",
];

export const SKILL_GROUPS = [
  {
    title: "Core Programming Languages",
    items: ["Python", "Java", "C", "SQL"],
  },
  {
    title: "Web Development",
    items: ["HTML", "CSS", "JavaScript", "TypeScript"],
  },
  {
    title: "Database & Backend",
    items: ["MySQL", "Git", "GitHub", "Supabase"],
  },
  {
    title: "Tools & Design",
    items: ["Stitch", "Figma", "Canva", "ibisPaint X", "FlipaClip"],
  },
];

export type Project = {
  slug: string;
  index: string;
  title: string;
  description: string;
  tech: string[];
  overview: string;
  features: string[];
  learnt: string[];
  github: string;
  hideDetails?: boolean;
};

export const PROJECTS: Project[] = [
  {
    slug: "careersync",
    index: "01",
    title: "CareerSync",
    description:
      "Student-focused platform for discovering and managing internships, scholarships, events and career opportunities.",
    tech: ["Python", "Flask", "MySQL", "HTML", "CSS", "JavaScript"],
    overview:
      "A student-focused platform that brings internships, scholarships, events and other career opportunities into one organized place, so students no longer have to track them across scattered sources.",
    features: [
      "Centralized listing of internships, scholarships and events.",
      "Category-wise browsing and search.",
      "Clean, lightweight interface for quick access.",
      "MySQL-backed data management with a Flask service layer.",
    ],
    learnt: [
      "Designing and querying relational schemas.",
      "Building server-rendered Flask applications end to end.",
      "Structuring maintainable frontend code.",
    ],
    github: "",
  },
  {
    slug: "customer-churn-prediction",
    index: "02",
    title: "Customer Churn Prediction",
    description:
      "Machine learning application that predicts telecom customer churn.",
    tech: ["Python", "Pandas", "NumPy", "Scikit-learn", "Streamlit"],
    overview:
      "A machine learning application that predicts whether a telecom customer is likely to churn, wrapped in an interactive Streamlit interface for quick experimentation.",
    features: [
      "Data cleaning and feature engineering pipeline.",
      "Multiple classification models with performance comparison.",
      "Interactive Streamlit app for live predictions.",
    ],
    learnt: [
      "Handling imbalanced classification data.",
      "Model evaluation beyond accuracy.",
      "Shipping ML models as usable apps.",
    ],
    github: "https://github.com/SaiVarun2107/Custromer-Churn-Project",
  },
  {
    slug: "house-price-prediction",
    index: "03",
    title: "House Price Prediction",
    description:
      "Machine learning application for predicting house prices using regression models.",
    tech: [
      "Python",
      "Pandas",
      "NumPy",
      "Scikit-learn",
      "Random Forest",
      "Streamlit",
    ],
    overview:
      "A regression-based application that estimates house prices from property attributes, comparing linear and ensemble models to find the best fit.",
    features: [
      "Exploratory data analysis and outlier handling.",
      "Linear regression and Random Forest comparison.",
      "Streamlit interface for instant price estimates.",
    ],
    learnt: [
      "Regression metrics and error analysis.",
      "Feature importance with ensemble models.",
      "Building reproducible ML workflows.",
    ],
    github: "https://github.com/SaiVarun2107/House_Price_Prediction",
  },
  {
    slug: "ai-curriculum-platform",
    index: "04",
    title: "AI Curriculum & Assessment Platform",
    description:
      "AI-powered education platform using curriculum data, RAG, vector search and Gemini to generate syllabus-aware assessments.",
    tech: [
      "Next.js",
      "TypeScript",
      "Node.js",
      "Express",
      "PostgreSQL",
      "Prisma",
      "Supabase",
      "Gemini",
      "RAG",
      "pgvector",
    ],
    overview:
      "An AI-powered education platform that ingests curriculum documents, indexes them with vector search, and uses Gemini with RAG to generate syllabus-aware questions and assessments.",
    features: [
      "Curriculum ingestion with chunking and embeddings.",
      "pgvector-backed semantic retrieval.",
      "Gemini-powered, syllabus-aware question generation.",
      "Role-based access with Supabase Auth and Storage.",
    ],
    learnt: [
      "Designing RAG pipelines end to end.",
      "Working with vector databases and embeddings.",
      "Full-stack architecture with Next.js, Prisma and Postgres.",
    ],
    github: "https://github.com/SaiVarun2107/AI-Powered-Student-Parent-Learning-Platform",
  },
  {
    slug: "personal-portfolio",
    index: "05",
    title: "PERSONAL PORTFOLIO",
    description:
      "A fully designed and developed personal portfolio website, showcasing my skills, projects, and creative design approach.",
    tech: ["HTML5", "CSS3", "JavaScript", "Figma"],
    overview:
      "A fully designed and developed personal portfolio website, showcasing my skills, projects, and creative design approach.",
    features: [
      "Modern dark theme portfolio interface with smooth motion physics.",
      "Interactive skill bubbles, project showcases, and experience timelines.",
      "Clean UI component design and responsive layout across all device sizes.",
    ],
    learnt: [
      "Designing clean user interfaces and interactive web components.",
      "Building motion-enhanced portfolio showcases.",
    ],
    github: "",
    hideDetails: true,
  },
];

export const FEATURED_PROJECTS = PROJECTS.slice(0, 3);

export const EDUCATION = [
  {
    from: "2024",
    to: "2028",
    place:
      "Vel Tech Rangarajan Dr. Sagunthala R&D Institute of Science and Technology",
    detail: "B.Tech — CSE (AIDS)",
    meta: "CGPA : 8.6",
  },
  {
    from: "2023",
    to: "2024",
    place: "Sree Venkateswara College of Commerce",
    detail: "Intermediate (MPC) — 2nd Year",
    meta: "Percentage : 93.6%",
  },
  {
    from: "2022",
    to: "2023",
    place: "Narayana Junior College",
    detail: "Intermediate (MPC) — 1st Year",
    meta: "Percentage : 94.68%",
  },
  {
    from: "2021",
    to: "2022",
    place: "Narayana Olympiad School",
    detail: "10th",
    meta: "Grade : 9.3 / 10",
  },
];

export const EXPERIENCE = [
  {
    from: "May 2026",
    to: "Sep 2026",
    place: "Google",
    detail: "Google Student Ambassador",
    meta: "Program",
  },
  {
    from: "Jun 2026",
    to: "Jul 2026",
    place: "DIGIT Innovations",
    detail: "AI & Full-Stack Development Intern",
    meta: "Internship",
  },
  {
    from: "Apr 2026",
    to: "May 2026",
    place: "SmartED Innovations",
    detail: "Machine Learning Intern",
    meta: "Internship",
  },
  {
    from: "Apr 2025",
    to: "May 2025",
    place: "Younity.in",
    detail: "Business Development Intern · Team Leader",
    meta: "Internship",
  },
];

export const TESTIMONIALS = [
  {
    org: "DIGIT IT",
    quote:
      "Sai Varun performed well in user interviews, AI-assisted UI/UX design, and RAG data processing. As Team Coordinator, he effectively tracked contributions, coordinated feature integration, and facilitated communication across the team.",
    name: "Nishikanth A.",
    role: "Software Engineer & Technical Lead, DIGIT Innovations",
  },
  {
    org: "Sree Venkateswara Jr Clg",
    quote:
      "Sai Varun consistently demonstrated a strong work ethic and genuine enthusiasm for learning. He actively participated in discussions, approached new concepts with curiosity, and was always willing to support and assist his fellow students. His positive attitude, initiative, and ability to work well with others reflected his strong interpersonal skills and dependable nature. He approached both academic and collaborative responsibilities with sincerity and a willingness to grow.",
    name: "Uday Chaitanya",
    role: "Senior Lecturer & Head of Department, Physics — Sree Venkateswara College of Commerce",
  },
];

export const ADDITIONAL_SKILLS = [
  { name: "Code", label: "I code" },
  { name: "Draw", label: "I draw" },
  { name: "Dance", label: "I dance" },
  { name: "Taekwondo", label: "I practice Taekwondo" },
  { name: "Football", label: "I play football" },
  { name: "Animate", label: "I animate" },
];

export const LANGUAGES = [
  { name: "English", level: 5 },
  { name: "Telugu", level: 5 },
  { name: "Hindi", level: 4 },
  { name: "German", level: 3 },
  { name: "Japanese", level: 2 },
];

export const INTERESTS = [
  "Photography",
  "Drawing",
  "Volleyball",
  "Gym",
  "Taekwondo",
];
