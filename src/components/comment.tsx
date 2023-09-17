import { Comment } from "@/types";

interface CommentPorps {
  comment: Comment;
}

export function Comment({ comment }: CommentPorps) {
  return (
    <div className="flex gap-3">
      <div className="flex justify-center items-center w-9 h-9 font-semibold text-lg border-2 rounded-full">
        {comment.name.substring(0, 1)}
      </div>

      <div>
        <h4 className="font-semibold">{comment.name}</h4>
        <p className="text-sm">{comment.body}</p>
      </div>
    </div>
  );
}

export default Comment