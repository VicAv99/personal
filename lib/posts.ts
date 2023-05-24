import { compareDesc } from "date-fns";
import { Post, allPosts } from "~/.contentlayer/generated";

export function getAllFeaturedPosts() {
  return allPosts.filter((post) => post.featured);
}

export function getAllPublishedPosts() {
  return allPosts.filter((post) => post.published);
}

export function descFeaturedPosts() {
  return getAllFeaturedPosts().sort(postDateSortDesc).slice(0, 3);
}

export function findPost(slug: string) {
  return getAllPublishedPosts().find(
    (publishedPost) => publishedPost._raw.flattenedPath === slug
  );
}

const postDateSortDesc = (a: Post, b: Post) =>
  compareDesc(new Date(a.date), new Date(b.date));
