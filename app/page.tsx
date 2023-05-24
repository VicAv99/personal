import { HomeSection } from "~/components/sections/home/home-intro";
import { PostCard } from "~/components/post-card";
import Link from "next/link";
import { descPosts } from "~/lib/posts";

export default function Home() {
  const posts = descPosts().slice(0, 3);

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
