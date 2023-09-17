import Link from "next/link";
import type { Post } from "@/types";
import { MoveRight } from "lucide-react";

interface PostCardProps {
  post: Post;
}

export function PostCard({ post }: PostCardProps) {
  return (
    <li className="group/post py-3 first:pt-0 last:pb-0">
      <Link href={`posts/${post.id}`} className="flex flex-col gap-1">
        <h2 className="font-medium line-clamp-2 text-lg group-hover/post:text-teal-400 transition-all">
          {post.title}

          <MoveRight className="hidden group-hover/post:inline-block ml-2 w-4 h-4" />
        </h2>
        <p className="line-clamp-2 group-hover/post:text-slate-50">
          {post.body}
        </p>
      </Link>
    </li>
  );
}

export default PostCard;
