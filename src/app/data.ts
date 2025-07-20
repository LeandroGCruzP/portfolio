export interface ProjectData {
  id: number;
  name: string;
  description: string;
  date: string;
  demoLink: string;
}

export const projectsData: ProjectData[] = [
  {
    id: 1,
    name: "Project One",
    description: "A brief description of Project One.",
    date: "2025-08-15",
    demoLink: "https://project-one.example.com",
  },
]
