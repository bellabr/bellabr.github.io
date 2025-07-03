import { posts } from '$lib/posts.js';
import { error } from '@sveltejs/kit';

export function load({ params }) {
  const post = posts.find((post) => post.slug === params.slug);

  if (!post) error(404);

  return {
    post
  }
}