import { projects } from '$lib/projects.js';

export function load() {
  return {
    summaries: projects.map((project) => ({
      slug: project.slug,
      title: project.title,
      link: project.link,
      img: project.img_path,
      description: project.description
    }))
  };
}