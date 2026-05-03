export interface Project {
  id: string;
  title: string;
  description: string;
  tags: string[];
  github?: string;
  live?: string;
  status: 'live' | 'wip' | 'archived';
}

export interface SkillGroup {
  label: string;
  skills: string[];
}

export const projects: Project[] = [
  {
    id: 'sudoku',
    title: 'Command Line Sudoku',
    description:
      'Sudoku puzzle generator and solver built around Donald Knuth\'s Dancing Links (DLX) algorithm. Implements Algorithm X as an exact cover problem with constraint propagation across cells, rows, columns, and boxes. Playable via CLI with easy, intermediate, and hard difficulty levels.',
    tags: ['Python', 'Algorithms', 'Dancing Links', 'Backtracking', 'OOP'],
    github: 'https://github.com/zeez30',
    status: 'wip',
  },
  {
    id: 'asset-management',
    title: 'Asset Management System',
    description:
      'Full-stack asset tracking system built during a software engineering internship at North Oil Company. React frontend communicates with an ASP.NET Core REST API backed by Entity Framework Core. Supports asset search, creation, document uploads, and linked 2D and 3D model attachments.',
    tags: ['React', 'ASP.NET Core', 'C#', 'Entity Framework', 'REST API', 'SQL'],
    github: 'https://github.com/zeez30',
    status: 'wip',
  },
  {
    id: 'cue',
    title: 'Cue',
    description:
      'Android wellness companion built as my honours dissertation. Designed around Intuitive Eating principles with hunger and fullness tracking, meal reflection logging, and a helplines resource. Built with MVVM architecture, Room database, and WorkManager for fully local, privacy-first storage.',
    tags: ['Java', 'Android', 'MVVM', 'Room DB', 'WorkManager', 'Material Design'],
    github: 'https://github.com/zeez30/Cue',
    status: 'live',
  },
  {
    id: 'portfolio',
    title: 'Portfolio Site',
    description:
      'Designed and built from scratch. Clean dark editorial aesthetic, single-page scroll with smooth section transitions. TypeScript throughout, zero component library dependencies.',
    tags: ['React', 'TypeScript', 'Tailwind CSS', 'Vite'],
    github: 'https://github.com/zeez30/portfolio#',
    live: 'https://portfolio-omega-liart-grlu9dfom2.vercel.app',
    status: 'live',
  },
];

export const skillGroups: SkillGroup[] = [
  {
    label: 'Languages',
    skills: ['Java', 'TypeScript', 'JavaScript', 'Python', 'C++', 'SQL', 'HTML / CSS'],
  },
  {
    label: 'Frameworks & Tools',
    skills: ['React', 'Android SDK', 'Node.js', 'Flask', 'Room DB', 'Tailwind CSS', 'Git', 'Vite'],
  },
  {
    label: 'Concepts',
    skills: ['MVVM', 'Microservices', 'REST APIs', 'Secure Development', 'OOP', 'Concurrency', 'UI/UX Design'],
  },
];
