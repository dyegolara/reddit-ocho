"use client";
import cn from "classnames";
import Link from "next/link";
import React from "react";

import Gallery from "@/components/Gallery";
import LinkPreview from "@/components/LinkPreview";
import MediaPreview from "@/components/MediaPreview";
import Votes from "@/components/Votes";
import { useVotes } from "@/components/Votes/useVotes";
import { PostType } from "@/types";

import styles from "./Post.module.css";

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
    is_reddit_media_domain: isRedditMediaDomain,
    is_gallery: isGallery,
    is_self: isSelf,
    post_hint: postHint,
  } = post;
  const { voted, handleVoteButtonClick, updatedScore } = useVotes(score);
  const isVideo = saysIsVideo || postHint?.includes("video");
  const isImage = postHint === "image";
  const isLink = postHint === "link";
  const hasMediaPreview = isRedditMediaDomain && !isSelf && !isLink;

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
          />
        </div>
        <div className={styles.postContent}>
          <div className={styles.postMeta}>
            <span className={styles.subreddit}>r/{subreddit}</span>
            <span className={styles.dot}> · </span>
            <span className={styles.author}>u/{author}</span>
          </div>
          <h4 className={styles.title}>{title}</h4>
          {isSelf && <p className={styles.self}>{post.selftext}</p>}
          {isGallery && <Gallery images={post.gallery_data.items} />}
          {isLink && <LinkPreview url={url} thumbnail={thumbnail} />}
          {hasMediaPreview && (
            <MediaPreview
              url={isImage ? url : thumbnail}
              postHint={postHint}
              isVideo={isVideo}
              media={media}
              preview={preview}
              thumbnail={thumbnail}
            />
          )}
        </div>
      </Link>
    </li>
  );
};

export default Post;
