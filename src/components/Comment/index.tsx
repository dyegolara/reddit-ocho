"use client";
import cn from "classnames";
import React, { useEffect, useState } from "react";

import AddReply from "@/components/AddReply";
import CommentsList from "@/components/CommentsList";
import Votes from "@/components/Votes";
import { useVotes } from "@/components/Votes/useVotes";
import { CommentType } from "@/types";

import styles from "./Comment.module.css";

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

  // this is needed for a11y
  const handleKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
    // Enter or Space pressed
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      setCompact(!compact);
    }
  };

  return (
    <div className={styles.comment}>
      <div className={styles.commentVotes}>
        <div
          role={"button"}
          tabIndex={0}
          className={styles.threadlineWrapper}
          onClick={() => setCompact(!compact)}
          onKeyDown={handleKeyDown}
          aria-pressed={compact}
          aria-label={compact ? "Expand comment" : "Collapse comment"}
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
