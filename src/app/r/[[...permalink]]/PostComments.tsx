"use client";
import AddComment from "@/components/AddComment";
import CommentsList from "@/components/CommentsList";
import { CommentType } from "@/types";
import { useCallback, useState } from "react";
import { v4 as uuidv4 } from "uuid";

export default function PostComments({
  comments,
}: {
  comments: { data: CommentType }[];
}) {
  const [commentsState, setCommentsState] = useState(comments);

  const handleCommentSubmit = useCallback((comment: string) => {
    const newComment = {
      data: {
        id: uuidv4(),
        score: 0,
        author: "You",
        body: comment,
        replies: { data: { children: [] } },
      },
    } as unknown as { data: CommentType };
    setCommentsState((prevComments) => [newComment, ...prevComments]);
  }, []);

  return (
    <>
      <AddComment onSubmit={handleCommentSubmit} />
      <CommentsList comments={commentsState} />
    </>
  );
}
