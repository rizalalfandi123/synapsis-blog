import Link from "next/link";
import { getPosts } from "@/services/get-posts.service";
import { MoveRight } from "lucide-react";
import PostCard from "@/components/post-card";

interface HomeProps {
  searchParams: Record<string, string>;
}

export default async function Home({ searchParams }: HomeProps) {
  const posts = await getPosts({
    page: searchParams.page ? Number(searchParams.page) : 1,
    perPage: searchParams.per_page ? Number(searchParams.per_page) : 30,
  });

  return (
    <ul className="group/posts w-full py-3 hover:text-slate-400 transition-all">
      {posts.map((post) => {
        return <PostCard key={post.id} post={post} />;
      })}
    </ul>
  );
}
