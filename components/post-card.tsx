import { format, parseISO } from "date-fns";
import Link from "next/link";
import { Post } from "~/.contentlayer/generated";

interface PostCardProps {
  post: Post;
}

export function PostCard({ post }: PostCardProps) {
  return (
    <div className="hover:bg-slate-100 p-3 rounded-md cursor-pointer">
      <div className="space-y-2">
        <Link
          href={post.url}
          className="text-cyan-700 text-xl hover:text-blue-900"
        >
          {post.title}
        </Link>
        <div className="flex justify-between">
          <time dateTime={post.date} className="block text-xs text-gray-600">
            {format(parseISO(post.date), "LLLL d, yyyy")}
          </time>
          <div className="flex items-center gap-x-1 text-xs text-gray-600 md:gap-x-2">
            <span>{post.readingTime.text}</span>
            <span>•</span>
            100 views
          </div>
        </div>
      </div>
    </div>
  );
}
