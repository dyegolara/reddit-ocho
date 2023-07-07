"use client";
import React, { useState } from "react";
import Votes from "@/components/Votes";
import LinkPreview from "@/components/LinkPreview";
import MediaPreview from "@/components/MediaPreview";
import { UP, DOWN } from "@/const";
import styles from "./Post.module.css";
import { useRouter } from "next/navigation";
import Link from "next/link";
import cn from "classnames";

type PostProps = {
  post: {
    subreddit: string;
    author: string;
    title: string;
    url: string;
    score: number;
    media: string;
    thumbnail: string;
    preview: string;
    permalink: string;
    is_video: boolean;
    is_self: boolean;
    post_hint: string;
  };
  clickable: boolean;
};

const Post: React.FC<PostProps> = ({ post, clickable }) => {
  const [voted, setVoted] = useState("");
  const router = useRouter();
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
  const isVideo = saysIsVideo || postHint?.includes("video");
  const isLink = postHint === "link";
  const hasMediaPreview = !isSelf && !isLink;

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

  let updatedScore = score;
  if (voted === UP) updatedScore = score + 1;
  if (voted === DOWN) updatedScore = score - 1;

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
          <span className={styles.author}> · Posted by u/{author}</span>
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
