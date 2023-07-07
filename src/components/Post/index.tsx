"use client";
import React from "react";
import Votes from "@/components/Votes";
import LinkPreview from "@/components/LinkPreview";
import MediaPreview from "@/components/MediaPreview";
import styles from "./Post.module.css";
import Link from "next/link";
import cn from "classnames";
import { useVotes } from "@/components/Votes/useVotes";
import { PostType } from "@/types";

interface PostProps {
  post: PostType;
  clickable: boolean;
}

const Post: React.FC<PostProps> = ({ post, clickable }) => {
  const {
    subreddit,
    author,
    title,
    url,
    score,
    media,
    thumbnail,
    preview,
    permalink,
    is_video: saysIsVideo,
    is_self: isSelf,
    post_hint: postHint,
  } = post;
  const { voted, handleVoteButtonClick, updatedScore } = useVotes(score);
  const isVideo = saysIsVideo || postHint?.includes("video");
  const isLink = postHint === "link";
  const hasMediaPreview = !isSelf && !isLink;

  return (
    <li className={cn(styles.post, { [styles.clickablePost]: clickable })}>
      <Link
        href={clickable ? permalink : ""}
        className={cn(styles.link, { [styles.notClickable]: !clickable })}
      >
        <div className={styles.postVotes}>
          <Votes
            score={updatedScore}
            onVote={handleVoteButtonClick}
            voted={voted}
            showScore
          />
        </div>
        <div className={styles.postContent}>
          <span className={styles.subreddit}>r/{subreddit}</span>
          <span className={styles.author}> · OP u/{author}</span>
          <h4 className={styles.title}>{title}</h4>
          {hasMediaPreview && (
            <MediaPreview
              url={url}
              postHint={postHint}
              isVideo={isVideo}
              media={media}
              preview={preview}
            />
          )}
          {isLink && <LinkPreview url={url} thumbnail={thumbnail} />}
        </div>
      </Link>
    </li>
  );
};

export default Post;
