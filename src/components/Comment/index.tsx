"use client";
import styles from "./Comment.module.css";
import React, { useState, useEffect, ReactElement } from "react";
import Votes from "@/components/Votes";
import CommentsList from "@/components/CommentsList";
import AddReply from "@/components/AddReply";
import { UP, DOWN } from "@/const";

interface CommentProps {
  comment: {
    score: number;
    author: string;
    body: string;
    id: string;
    replies?: {
      data: {
        children: Array<{}>;
      };
    };
  };
}

const Comment: React.FC<CommentProps> = ({ comment }) => {
  const [voted, setVoted] = useState("");
  const [replies, setReplies] = useState<Array<{}>>([]);
  const { score, author, body, id } = comment;

  const handleVoteButtonClick = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.stopPropagation();
    const { name } = event.currentTarget;
    if (voted === name) {
      setVoted("");
    } else {
      setVoted(name);
    }
  };

  useEffect(() => {
    if (comment.replies) {
      setReplies(comment.replies.data.children);
    }
  }, [comment.replies, id]);

  let updatedScore = score;
  if (voted === UP) updatedScore = score + 1;
  if (voted === DOWN) updatedScore = score - 1;

  return (
    <div className={styles.comment}>
      <div className={styles.commentVotes}>
        <Votes
          score={updatedScore}
          onVote={handleVoteButtonClick}
          voted={voted}
          showScore={false}
        />
        <div className={styles.threadlineWrapper}>
          <div className={styles.threadline} />
        </div>
      </div>
      <div className={styles.commentContent}>
        <span className={styles.author}>u/{author}</span>
        <span className={styles.points}> · {updatedScore} points</span>
        <p className={styles.body}>{body}</p>
        <AddReply setReplies={setReplies} />
        <CommentsList comments={replies} />
      </div>
    </div>
  );
};

export default Comment;
