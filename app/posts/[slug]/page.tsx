import { allPosts } from "contentlayer/generated";
import { notFound } from "next/navigation";
import { ScrollIndicator } from "~/components/scroll-indicator";
import { BlogContent } from "~/components/sections/blog/blog-content";
import { BlogInfo } from "~/components/sections/blog/blog-info";

export async function generateStaticParams() {
  return allPosts.map((post) => ({
    slug: post._raw.flattenedPath,
  }));
}

export default async function Page({ params }: { params: { slug: string } }) {
  const post = allPosts.find((post) => post._raw.flattenedPath === params.slug);

  if (!post) notFound();

  return (
    <div>
      <ScrollIndicator />
      <BlogInfo post={post} />
      <hr className="border-(t t-neutral-700) mt-4 mb-6" />
      <BlogContent bodyCode={post.body.code} />
    </div>
  );
}
