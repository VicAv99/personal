import { HomeSection } from "~/components/sections/home";
import Toolbar from "~/components/toolbar";
import { allPosts, Post } from "contentlayer/generated";
import Link from "next/link";
import { compareDesc, format, parseISO } from "date-fns";

export default function Home() {
  const posts = allPosts.sort((a, b) =>
    compareDesc(new Date(a.date), new Date(b.date))
  );

  return (
    <main>
      <HomeSection />
      <div className="mx-auto py-7">
        <h1 className="mb-5 text-2xl">Featured Blogs</h1>
        {posts.map((post, idx) => (
          <PostCard key={idx} {...post} />
        ))}
      </div>
    </main>
  );
}

function PostCard(post: Post) {
  return (
    <div className="mb-8">
      <h2 className="mb-1 text-xl">
        <Link
          href={post.url}
          className="text-blue-700 hover:text-blue-900 dark:text-blue-400"
        >
          {post.title}
        </Link>
      </h2>
      <time dateTime={post.date} className="mb-2 block text-xs text-gray-600">
        {format(parseISO(post.date), "LLLL d, yyyy")}
      </time>
    </div>
  );
}
