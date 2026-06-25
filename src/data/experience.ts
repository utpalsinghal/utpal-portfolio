export interface Role {
  date: string;
  role: string;
  company: string;
  location: string;
  note?: string;
  points?: string[];
}

export const experience: Role[] = [
  {
    date: 'May 2024 — Present',
    role: 'Senior Software Engineer',
    company: 'Navex',
    location: 'Bengaluru',
    note: 'promoted from Associate Senior SWE, Mar 2026',
  },
  {
    date: 'Mar 2024 — Apr 2024',
    role: 'Software Engineer',
    company: 'GlobalLogic',
    location: 'Bengaluru',
    note: 'transitioned to Navex via Build-Operate-Transfer',
  },
  {
    date: 'Aug 2021 — Mar 2024',
    role: 'Application Development Analyst',
    company: 'Accenture',
    location: 'Gurugram',
    note: 'from Application Development Associate',
  },
  {
    date: 'Mar 2021 — Jun 2021',
    role: 'Project Intern',
    company: 'Bosch',
    location: 'Bengaluru',
  },
];
