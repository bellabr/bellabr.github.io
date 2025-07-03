import { projects } from '$lib/projects.js';
import { error } from '@sveltejs/kit';

export function load({ params }) {
  // @ts-ignore
  const project = projects.find((project) => project.slug === params.slug);

  if (!project) error(404);

  return {
    project
  }
}