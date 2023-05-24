import { PostCard } from "~/components/post-card";
import { getAllPublishedPosts } from "~/lib/posts";

interface PageProps {}

export default function Page(props: PageProps) {
  const posts = getAllPublishedPosts();
  return (
    <div className="my-9 divide-y">
      {posts.map((post) => (
        <PostCard key={post._id} post={post} />
      ))}
    </div>
  );
}
