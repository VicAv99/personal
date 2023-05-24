import { format, parseISO } from "date-fns";
import { Post } from "~/.contentlayer/generated";
import { NavLink } from "~/components/nav-link";
import { Icon } from "~/components/ui/icon";

interface BlogInfoProps {
  post: Post;
}

export function BlogInfo({ post }: BlogInfoProps) {
  return (
    <div>
      <NavLink
        href="/posts"
        buttonProps={{ className: "p-0 mb-3 text-cyan-500" }}
      >
        <Icon className="w-4" name="ArrowLeft" />
        Back To Posts
      </NavLink>

      <br />

      <h2 className="mb-0 inline-flex flex-nowrap text-4xl">{post.title}</h2>

      <div className="pt-4 text-zinc-400">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between">
          <div className="flex items-center gap-x-1 md:gap-x-2">
            <time>Victor Avila</time>
            <span>•</span>
            <time>{format(parseISO(post.date), "LLLL d, yyyy")}</time>
          </div>
          <div className="flex items-center gap-x-1 md:gap-x-2">
            <span>2min</span>
            <span>•</span>
            100 views
          </div>
        </div>
      </div>
    </div>
  );
}
