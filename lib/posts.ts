import { cache } from "react";
import { promises as fs } from "fs";
import path from "path";
import matter from "gray-matter";
import { MDXRemoteSerializeResult } from "next-mdx-remote";
import { serialize } from "next-mdx-remote/serialize";

export type FrontMatter = {
  title: string;
  slug: string;
  date: string;
  published: boolean;
  tags: string[];
  description: string;
  body: string;
  lastModified?: number;
  views?: number;
};

type Post<TFrontmatter> = {
  serialized: MDXRemoteSerializeResult;
  frontmatter: TFrontmatter;
};

export const getPosts = cache(async (): Promise<Post<FrontMatter>[]> => {
  const posts = await fs.readdir("./posts/");

  console.log({ posts });

  return Promise.all(
    posts
      .filter((file) => path.extname(file) === ".mdx")
      .map(async (file) => {
        const filePath = `./posts/${file}`;
        const postContent = await fs.readFile(filePath, "utf8");
        const serialized = await serialize(postContent, {
          parseFrontmatter: true,
        });

        const frontmatter = serialized.frontmatter as FrontMatter;

        // if (frontmatter.published === false) {
        //   return null;
        // }

        return { frontmatter, serialized } as Post<FrontMatter>;
      })
      .filter(Boolean)
  );
});

export async function getPost(
  slug: string
): Promise<Post<FrontMatter> | undefined> {
  const posts = await getPosts();
  return posts.find((post) => post.frontmatter.slug === slug);
}
