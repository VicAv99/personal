import { HomeSection } from "~/components/sections/home/home-intro";
import { allPosts } from "contentlayer/generated";
import { compareDesc } from "date-fns";
import { PostCard } from "~/components/post-card";
import Link from "next/link";

export default function Home() {
  const posts = allPosts.sort((a, b) =>
    compareDesc(new Date(a.date), new Date(b.date))
  );

  return (
    <main>
      <HomeSection />
      <div className="py-7">
        <h1 className="text-2xl">Featured Blogs</h1>
        <div>
          {posts.map((post) => (
            <PostCard key={post._id} post={post} />
          ))}
        </div>
        <Link href="/posts" className="text-xs text-cyan-500">
          Check out all posts &gt;&gt;
        </Link>
      </div>
    </main>
  );
}
