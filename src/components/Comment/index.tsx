"use client";
import styles from "./Comment.module.css";
import React, { useState, useEffect } from "react";
import Votes from "@/components/Votes";
import CommentsList from "@/components/CommentsList";
import AddReply from "@/components/AddReply";
import { CommentType } from "@/types";
import { useVotes } from "@/components/Votes/useVotes";
import cn from "classnames";

interface CommentProps {
  comment: CommentType;
}

const Comment: React.FC<CommentProps> = ({ comment }) => {
  const [replies, setReplies] = useState<{ data: CommentType }[]>([]);
  const { score, author, body, id } = comment;
  const { voted, handleVoteButtonClick, updatedScore } = useVotes(score);
  const [compact, setCompact] = useState(false);

  useEffect(() => {
    if (comment.replies) {
      setReplies(
        comment.replies.data.children.filter(
          (reply) => reply.kind === "t1"
        ) as unknown as { data: CommentType }[]
      );
    }
  }, [comment.replies, id]);

  return (
    <div className={styles.comment}>
      <div className={styles.commentVotes}>
        <div
          className={styles.threadlineWrapper}
          onClick={() => setCompact(!compact)}
        >
          <div className={styles.threadline} />
        </div>
      </div>
      <div className={styles.commentContent}>
        <span className={styles.author}>u/{author}</span>
        <span className={styles.points}> · {updatedScore} points</span>
        <div className={cn({ [styles.compact]: compact })}>
          <div className={styles.commentActions}>
            <p className={styles.body}>{body}</p>
            <Votes
              score={updatedScore}
              onVote={handleVoteButtonClick}
              voted={voted}
              horizontal={true}
            />
            <AddReply setReplies={setReplies} />
          </div>
          <CommentsList comments={replies} />
        </div>
      </div>
    </div>
  );
};

export default Comment;
