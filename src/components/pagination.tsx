import { MoveLeft, MoveRight } from "lucide-react";
import Link from "next/link";
import { twMerge } from "tailwind-merge";

interface PaginationProps {
  searchParams: Record<string, string>;
  totalPagination: number;
  getNextLink: (nextPage: number) => string;
}

export function Pagination({
  searchParams,
  totalPagination,
  getNextLink,
}: PaginationProps) {
  const activePage = searchParams.page ? Number(searchParams.page) : 1;

  const paginationRage = [-2, -1, 0, 1, 2];

  return (
    <ul className="flex gap-2 my-8 w-full justify-center lg:justify-end">
      {activePage - 1 > 0 && (
        <li>
          <Link
            className="hover:text-teal-400 cursor-pointer"
            href={getNextLink(activePage - 1)}
          >
            <MoveLeft className="w-4 h-4 inline-block" /> Prev
          </Link>
        </li>
      )}

      {paginationRage.map((page) => {
        if (activePage + page > 0 && activePage + page <= totalPagination) {
          return (
            <Link
              key={page}
              className={twMerge(
                "w-6 h-6 flex justify-center items-center rounded-full hover:text-teal-400 hover:border hover:border-teal-400 cursor-pointer",
                page === 0 && "text-teal-400 border border-teal-400"
              )}
              href={getNextLink(activePage + page)}
            >
              {activePage + page}
            </Link>
          );
        }

        return null;
      })}

      {activePage + 1 <= totalPagination && (
        <li>
          <Link
            className="hover:text-teal-400 cursor-pointer"
            href={getNextLink(activePage + 1)}
          >
            Next <MoveRight className="w-4 h-4 inline-block" />
          </Link>
        </li>
      )}
    </ul>
  );
}
