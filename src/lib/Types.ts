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
