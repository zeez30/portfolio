export interface Project {
  id: string;
  title: string;
  subtitle: string;
  description: string[];
  tags: string[];
  github?: string;
  live?: string;
  liveLabel?: string;
  status?: 'private' | 'live';
}

export interface SkillGroup {
  label: string;
  skills: string[];
}

export const projects: Project[] = [
  {
    "id": "cue",
    "title": "Cue",
    "subtitle": "Intuitive Eating Companion",
    "description": [
      "A native Android application designed around Intuitive Eating principles, helping users reflect on hunger, fullness, meals and body-related experiences without calorie, macro or weight tracking.",
      "Built in Java using MVVM architecture and Room for local data persistence, with custom visual components for hunger and fullness tracking, meal reflections, journaling and seven-day insights."
    ],
    "tags": [
      "Java",
      "Android",
      "Room",
      "MVVM"
    ],
    "github": "https://github.com/zeez30/Cue"
  },
  {
    "id": "sudoku",
    "title": "Sudoku",
    "subtitle": "Solver & Generator",
    "description": [
      "An interactive Sudoku solver and generator, originally developed as an Algorithms & Data Structures project and later extended into a complete web application.",
      "The solving and generation logic uses Algorithm X with Dancing Links, implemented in Python, with a React and TypeScript frontend providing the interactive interface."
    ],
    "tags": [
      "React",
      "TypeScript",
      "Python",
      "Algorithm X",
      "Dancing Links"
    ],
    "live": "https://sudoku.zaidi.dev/",
    "github": "https://github.com/zeez30/Sudoku"
  },
  {
    "id": "asset-management",
    "title": "Asset Management System",
    "subtitle": "Digital Assets Prototype",
    "description": [
      "A full-stack asset management prototype developed during my Digital Assets internship at North Oil Company, exploring an alternative approach to existing third-party asset information tooling.",
      "Built with React, ASP.NET Core, C# and SQL Server, with asset search and detail views, related-asset modelling, document and file associations, and a split-screen workflow for viewing technical documentation alongside asset information."
    ],
    "tags": [
      "React",
      "C#",
      "ASP.NET Core",
      "SQL Server",
      "Entity Framework Core"
    ],
    "status": "private"
  },
  {
    "id": "image-analysis",
    "title": "Image Analysis Platform",
    "subtitle": "Grain Size Analysis",
    "description": [
      "A client-led university project developed by a five-person team to support grain size determination through image analysis. I served as Project Manager, coordinating the project, managing documentation and submissions, and contributing to the early design and wireframing process.",
      "The platform was built using JavaScript, Node.js, Express and MongoDB, with functionality for image processing and analysis."
    ],
    "tags": [
      "JavaScript",
      "Node.js",
      "Express",
      "MongoDB",
      "Project Management"
    ],
    "github": "https://github.com/zeez30/Image-Analysis-Package"
  },
  {
    "id": "cpp",
    "title": "Centre for Public Perception (CPP)",
    "subtitle": "Totally Unbiased Feedback",
    "description": [
      "A deliberately rigged anonymous feedback survey built around one simple principle: negative feedback is a user error.",
      "What begins as an ordinary survey becomes increasingly uncooperative when a user tries to disagree, with responses moving, shrinking and otherwise refusing to behave. The final results remain, naturally, statistically impeccable."
    ],
    "tags": [
      "HTML",
      "CSS",
      "JavaScript"
    ],
    "status": "live",
    "live": "https://cpp.zaidi.dev",
    "liveLabel": "Live Site ↗"
  }
];

export const skillGroups: SkillGroup[] = [
  {
    label: 'Languages',
    skills: ['TypeScript', 'JavaScript', 'Java', 'C#', 'Python', 'SQL'],
  },
  {
    label: 'Development',
    skills: ['React', 'Android', 'ASP.NET Core', 'Node.js', 'Express', 'REST APIs'],
  },
  {
    label: 'Tools',
    skills: ['Git', 'GitHub', 'JetBrains IDEs', 'Visual Studio', 'Vite', 'SQL Server'],
  },
];
