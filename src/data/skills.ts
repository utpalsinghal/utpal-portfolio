export interface SkillGroup {
  label: string;
  items: string[];
}

export const skills: SkillGroup[] = [
  { label: 'Languages', items: ['C#', 'JavaScript', 'SQL', 'HTML', 'CSS'] },
  { label: 'Backend', items: ['ASP.NET Core', 'ASP.NET Framework', 'MVC', 'Web API', 'Classic ASP', 'REST'] },
  { label: 'Frontend', items: ['React (JS & TS)', 'Redux', 'Astro', 'HTML5', 'CSS3'] },
  { label: 'Databases', items: ['SQL Server', 'PostgreSQL', 'MySQL'] },
  { label: 'Cloud & Tools', items: ['Azure', 'AWS', 'Git', 'LaunchDarkly', 'Jira'] },
  { label: 'AI & Dev Productivity', items: ['Prompt Engineering', 'Agentic AI Workflows', 'IDE Extensions', 'AI-Assisted Modernization'] },
];
