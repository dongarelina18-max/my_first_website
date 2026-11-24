// ✏️ EDIT THIS FILE to update the whole website.
// Anything marked PLACEHOLDER is not in the resume - replace it with real details.

export const profile = {
  name: "Lina Dongare",
  headline: "Computer Science student building clean, responsive web experiences.",
  summary:
    "B.Sc. Computer Science student from Nagpur with a growing focus on front-end development and web technologies, looking for an internship or entry-level role.",
  location: "Nagpur, India",
  email: "dongarelina18@gmail.com",
  phone: "+91 7507503955",
  resume: "/Lina_Dongare_Resume.docx",
  photo: "", // PLACEHOLDER: put a file in /public (e.g. "/lina.jpg") and set it here
  github: "", // PLACEHOLDER: e.g. "https://github.com/your-username"
  linkedin: "", // PLACEHOLDER: e.g. "https://linkedin.com/in/your-name"
};

export const about = [
  "I'm a third-year B.Sc. Computer Science student at Bajaj College of Science, Wardha. I enjoy the part of computing where logic becomes something people can see and use, which is why front-end development and responsive web design pulled me in.",
  "I work with HTML, CSS and JavaScript on the web side, and I'm comfortable with Python, PHP, C, C++ and Java for programming fundamentals. I learn quickly, enjoy debugging, and like understanding why something breaks before fixing it.",
  "My goal is to start my career in IT, build practical skills on real projects, and contribute sincerely to a team that lets me keep learning.",
];

export const education = [
  {
    degree: "B.Sc. in Computer Science",
    place: "Bajaj College of Science, Wardha",
    years: "2024 – 2027",
    note: "Currently in 3rd year",
  },
];

export const skills = [
  { title: "Programming", items: ["Python", "PHP", "C", "C++", "Java"] },
  { title: "Web Development", items: ["HTML", "CSS", "JavaScript", "Front-end Development", "Responsive Web Design"] },
  { title: "Tools", items: ["Visual Studio Code", "Git (basic)"] },
  { title: "Core Strengths", items: ["Problem Solving", "Debugging", "Quick Learning"] },
];

// PLACEHOLDER: the resume lists no projects yet. Add real ones here; they appear automatically.
export const projects: {
  title: string; description: string; tech: string[]; contribution: string; outcome: string; github?: string; live?: string;
}[] = [
  {
    title: "Your first featured project",
    description: "PLACEHOLDER: describe what you built and the problem it solves.",
    tech: ["HTML", "CSS", "JavaScript"],
    contribution: "PLACEHOLDER: what you personally designed or coded.",
    outcome: "PLACEHOLDER: what it achieved or what you learned.",
    github: "",
    live: "",
  },
];

// PLACEHOLDER: no internships, volunteering or leadership are listed in the resume.
export const experience: { role: string; org: string; period: string; detail: string }[] = [];

export const certifications = [
  { title: "MS-CIT", detail: "Maharashtra State Certificate in Information Technology" },
  { title: "Employment Skills", detail: "Certificate course in Employment Skills" },
];

// PLACEHOLDER: the resume has no interests section beyond these career areas.
export const interests = ["Front-end development", "Web technologies", "Responsive design", "Learning by building"];
