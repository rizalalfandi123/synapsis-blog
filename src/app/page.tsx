import Link from "next/link";
import { getPosts } from "@/services/get-posts.service";
import { ArrowRight, MoveLeft, MoveRight } from "lucide-react";
import PostCard from "@/components/post-card";
import { Pagination } from "@/components/pagination";

interface HomeProps {
  searchParams: Record<string, string>;
}

export default async function Home({ searchParams }: HomeProps) {
  const posts = await getPosts({
    page: searchParams.page ? Number(searchParams.page) : 1,
    perPage: searchParams.per_page ? Number(searchParams.per_page) : 30,
  });

  return (
    <>
      <ul className="group/posts w-full py-3 hover:text-slate-200/75 transition-all">
        {posts.map((post) => {
          return <PostCard key={post.id} post={post} />;
        })}
      </ul>

      <Pagination getNextLink={nextPage => `/?page=${nextPage}`} searchParams={searchParams} totalPagination={1000}/>
    </>
  );
}
