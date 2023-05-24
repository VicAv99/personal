import { compareDesc } from "date-fns";
import { Post, allPosts } from "~/.contentlayer/generated";

export function getAllPublishedPosts() {
  return allPosts.filter((post) => post.published);
}

export function descPosts() {
  return getAllPublishedPosts().sort(postDateSortDesc);
}

export function findPost(slug: string) {
  return getAllPublishedPosts().find(
    (publishedPost) => publishedPost._raw.flattenedPath === slug
  );
}

const postDateSortDesc = (a: Post, b: Post) =>
  compareDesc(new Date(a.date), new Date(b.date));
