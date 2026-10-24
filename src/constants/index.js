import { getAssetPath } from "../utils/assetPath";

const navLinks = [
  {
    name: "Work",
    link: "#work",
  },
  {
    name: "Experience",
    link: "#experience",
  },
  {
    name: "Skills",
    link: "#skills",
  },
];

const words = [
  { text: "Ideas", imgPath: getAssetPath("/images/ideas.svg") },
  { text: "Concepts", imgPath: getAssetPath("/images/concepts.svg") },
  { text: "Designs", imgPath: getAssetPath("/images/designs.svg") },
  { text: "Code", imgPath: getAssetPath("/images/code.svg") },
];

const counterItems = [
  {
    value: 250,
    suffix: "+",
    label: "LeetCode Problems Solved",
    link: "https://leetcode.com/u/_vikash_kumar/",
  },
  {
    value: 4,
    suffix: "+",
    label: "Full-Stack MEAN Projects",
    link: "https://github.com/Vikash-Kumar-23?tab=repositories",
  },
  {
    value: 10,
    suffix: "+",
    label: "Technical Projects",
    link: "https://github.com/Vikash-Kumar-23?tab=repositories",
  },
  {
    value: 15,
    suffix: "+",
    label: "Tech Skills",
    link: "https://www.linkedin.com/in/vikash-kumar-4a4a39347/",
  },
];

const logoIconsList = [
  {
    imgPath: getAssetPath("/images/logos/company-logo-1.png"),
  },
  {
    imgPath: getAssetPath("/images/logos/company-logo-2.png"),
  },
  {
    imgPath: getAssetPath("/images/logos/company-logo-3.png"),
  },
  {
    imgPath: getAssetPath("/images/logos/company-logo-4.png"),
  },
  {
    imgPath: getAssetPath("/images/logos/company-logo-5.png"),
  },
  {
    imgPath: getAssetPath("/images/logos/company-logo-6.png"),
  },
];

const abilities = [
  {
    imgPath: getAssetPath("/images/full_stack.png"),
    title: "Full-Stack Development",
    desc: "Building scalable, responsive web applications with modern architectures using React, Node.js, and client-side JavaScript.",
    demoLink: "#",
    demoText: "View Demo",
  },
  {
    imgPath: getAssetPath("/images/ai1.png"),
    title: "Generative AI Engineering",
    desc: "Building intelligent document processing pipelines using Gemini models, with robust context management and automated risk detection logic. Experience with production-grade AI systems for legal document analysis and summarization.",
    link: "https://legal-document-summarizer-project-nuaghjqlum4c5wk5l5tvwg.streamlit.app/",
    isExternal: true,
    ctaText: "View Live AI Legal Document Summarizer",
  },
  {
    imgPath: getAssetPath("/images/DSA.png"),
    title: "Algorithmic Optimization",
    desc: "LeetCode Rating above 1700, placing me in the Top 10% of global LeetCode users. Strong problem-solving skills with consistent performance in Data Structures and Algorithms.",
    link: "https://leetcode.com/u/_vikash_kumar/",
    isExternal: true,
  },
];

const techStackImgs = [
  {
    name: "React Developer",
    imgPath: getAssetPath("/images/logos/react.png"),
  },
  {
    name: "Data Scientist",
    imgPath: getAssetPath("/images/logos/python.svg"),
  },
  {
    name: "Backend Developer",
    imgPath: getAssetPath("/images/logos/node.png"),
  },
  {
    name: "DSA",
    modelPath: getAssetPath("/models/c.glb"),
    scale: 0.1,
    rotation: [0, -Math.PI / 2, 0],
  },
  {
    name: "GitHub",
    imgPath: getAssetPath("/images/logos/git.svg"),
  },
];

const techStackIcons = [
  {
    name: "React Developer",
    modelPath: getAssetPath("/models/react_logo-transformed.glb"),
    scale: 1,
    rotation: [0, 0, 0],
  },
  {
    name: "Data Scientist",
    modelPath: getAssetPath("/models/python-transformed.glb"),
    scale: 0.8,
    rotation: [0, 0, 0],
  },
  {
    name: "Backend Developer",
    modelPath: getAssetPath("/models/node-transformed.glb"),
    scale: 5,
    rotation: [0, -Math.PI / 2, 0],
  },
  {
    name: "DSA",
    modelPath: getAssetPath("/models/c.glb"),
    scale: 0.08,
    rotation: [0, -Math.PI / 2, 0],
  },
  {
    name: "GitHub",
    modelPath: getAssetPath("/models/git-svg-transformed.glb"),
    scale: 0.05,
    rotation: [0, -Math.PI / 4, 0],
  },
];

const expCards = [
  {
    isGSoC: true,
    review: "Working on real-world open-source projects taught me so much beyond just writing code—from understanding large existing codebases to resolving complex edge cases, discussing RFCs with maintainers, and shipping production-quality code based on community feedback.",
    problemStatement: "What started as an opportunity to contribute to open source turned into an incredible journey with Google Summer of Code 2026 contributing to NumFOCUS, driving core improvements across Matplotlib, CPython, Mypy, and major developer ecosystems.",
    imgPath: getAssetPath("/images/gsoc-full.svg"),
    logoPath: getAssetPath("/images/gsoc-icon.svg"),
    title: "Google Summer of Code '26 & Open Source",
    organization: "NumFOCUS",
    date: "May 25 – September 21, 2026",
    gsocLink: "https://vikash-kumar-23.github.io/",
    openSourceLink: "https://github.com/Vikash-Kumar-23",
    responsibilities: [
      "NumFOCUS (Google Summer of Code 2026): Selected and completed GSoC 2026 under NumFOCUS mentorship; drove core performance optimizations, deep architectural debugging, and merged upstream pull requests.",
      "Matplotlib: Merged #31478 (resolved root-cause bug in collection.get_datalim for errorbar autoscaling on log axes), #31413 (enhanced pyplot API with partial figsize support using None), and #31323 (fixed SubFigure.remove() crash with regression tests).",
      "Python / mypy & CPython: Merged #20858 in mypy (upgraded stubtest accuracy to validate Final literal variables against runtime counterparts) and #145198 in CPython (corrected re tokenizer documentation typing).",
      "Joomla CMS & Compilers: Merged #47248 in Joomla 6.1 (optimized conditional workflow asset loading) and contributed core stability fixes to ArxLang (irx #240).",
      "Python Holidays: Merged #3376 & #3426 (added Telangana 'TG' alias and Bonalu public holiday with year-specific mapping and regression tests).",
    ],
  },
  {
    review: "This modern food platform connects hungry users with local restaurants via an Instagram-style video feed for frictionless discovery and ordering.",
    imgPath: getAssetPath("/images/exp1.png"),
    logoPath: getAssetPath("/images/logo1.png"),
    title: "Full Stack Project",
    date: "December 2025",
    responsibilities: [
      "Built a full-stack MERN application (React + Vite, Node.js, Express, MongoDB) with JWT authentication and role-based access control.",
      "Designed scalable architecture with RESTful APIs, database modeling, and media handling for real-world deployment.",
    ],
  },
  {
    isResearchAssistant: true,
    review: "An AI research assistant that searches the live web, gathers evidence, and generates quality-checked reports.",
    imgPath: getAssetPath("/images/ai1.png"),
    logoPath: getAssetPath("/images/logo3.png"),
    title: "Multi-Agent AI Research Assistant",
    date: "October 2026",
    liveDemoLink: "https://vikash-multi-agent-research-assistant.streamlit.app/",
    responsibilities: [
      "Frontend/UI: Streamlit dashboard for questions, reports, sources, evidence, and critic feedback.",
      "AI: Google Gemini and LangChain agents for search, webpage reading, report generation, and scoring.",
      "Tools: Tavily Search, Requests, BeautifulSoup, Pydantic, and secure environment-based API configuration.",
      "Features: Evidence-backed reports, source attribution, failure handling, critic score out of 10, and Markdown/JSON exports.",
    ],
  },
  {
    review: "",
    imgPath: getAssetPath("/images/exp3.png"),
    logoPath: getAssetPath("/images/logo3.png"),
    title: "Gen AI Project",
    date: "January 2026",
    liveDemoLink: "https://legal-document-summarizer-project-nuaghjqlum4c5wk5l5tvwg.streamlit.app/",
    responsibilities: [
      "Frontend/UI: Python-based Streamlit app ( app.py ) for an interactive web interface.",
      "AI & Processing: Google Gemini LLM for document summarization and risk/liability analysis.",
      "Utilities & Data Handling: dotenv for API key management, with custom modules for PDF/DOCX/TXT ingestion, text cleaning, chunking, and prompt templates.",
    ],
  },
];

const expLogos = [
  {
    name: "logo1",
    imgPath: getAssetPath("/images/logo1.png"),
  },
  {
    name: "logo2",
    imgPath: getAssetPath("/images/logo2.png"),
  },
  {
    name: "logo3",
    imgPath: getAssetPath("/images/logo3.png"),
  },
];

const testimonials = [
  {
    name: "Esther Howard",
    mentions: "@estherhoward",
    review:
      "I can’t say enough good things about Vikash. He was able to take our complex project requirements and turn them into a seamless, functional website. His problem-solving abilities are outstanding.",
    imgPath: getAssetPath("/images/client1.png"),
  },
  {
    name: "Wade Warren",
    mentions: "@wadewarren",
    review:
      "Working with Vikash was a fantastic experience. He transformed our outdated website into a modern, user-friendly platform. His attention to detail and commitment to quality are unmatched. Highly recommend him for any web dev projects.",
    imgPath: getAssetPath("/images/client3.png"),
  },
  {
    name: "Guy Hawkins",
    mentions: "@guyhawkins",
    review:
      "Collaborating with Vikash was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Vikash's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Vikash is the ideal partner.",
    imgPath: getAssetPath("/images/client2.png"),
  },
  {
    name: "Marvin McKinney",
    mentions: "@marvinmckinney",
    review:
      "Vikash was a pleasure to work with. He turned our outdated website into a fresh, intuitive platform that’s both modern and easy to navigate. Fantastic work overall.",
    imgPath: getAssetPath("/images/client5.png"),
  },
  {
    name: "Floyd Miles",
    mentions: "@floydmiles",
    review:
      "Vikash’s expertise in web development is truly impressive. He delivered a robust and scalable solution for our e-commerce site, and our online sales have significantly increased since the launch. He’s a true professional!",
    imgPath: getAssetPath("/images/client4.png"),
  },
  {
    name: "Albert Flores",
    mentions: "@albertflores",
    review:
      "Vikash was a pleasure to work with. He understood our requirements perfectly and delivered a website that exceeded our expectations. His skills in both frontend and backend dev are top-notch.",
    imgPath: getAssetPath("/images/client6.png"),
  },
];

const socialImgs = [
  {
    name: "github",
    imgPath: getAssetPath("/images/logos/git.svg"),
    link: "https://github.com/Vikash-Kumar-23",
  },
  {
    name: "linkedin",
    imgPath: getAssetPath("/images/linkedin.png"),
    link: "https://www.linkedin.com/in/vikash-kumar-4a4a39347/?isSelfProfile=true",
  },
];

export {
  words,
  abilities,
  logoIconsList,
  counterItems,
  expCards,
  expLogos,
  testimonials,
  socialImgs,
  techStackIcons,
  techStackImgs,
  navLinks,
};
