export type Project = {
  id: string;
  name: string;
  glance: string;
  tools: string[];
  images: string[];
  theme: string;
  liveLink: string | null;
  githubLink: string | null;
};
