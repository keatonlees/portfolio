export type Project = {
  id: string;
  name: string;
  glance: string;
  tools: string[];
  images: string[];
  theme: string;
  topics: string[];
  types: string[];
  roles: string[];
  timeline: string;
  liveLink: string | null;
  githubLink: string | null;
};

export type Experience = {
  id: string;
  company: string;
  title: string;
  timeframe: string;
  link: string | null;
  logo: string;
  glance: string;
  points: string[];
};

export type Education = {
  id: string;
  school: string;
  degree: string;
  timeframe: string;
  courses: string;
  logo: string;
};
