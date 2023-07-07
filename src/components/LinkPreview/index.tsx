import React from "react";
import styles from "./LinkPreview.module.css";
import Link from "next/link";

interface LinkPreviewProps {
  url: string;
  thumbnail: string;
}

const LinkPreview: React.FC<LinkPreviewProps> = ({ url, thumbnail }) => {
  return (
    <div
      className={styles.linkPreview}
      onClick={(event) => event.stopPropagation()}
    >
      <Link
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className={styles.link}
      >
        {url}
      </Link>
      {!thumbnail || thumbnail === "default" ? null : (
        <img className={styles.thumbnail} src={thumbnail} alt="Thumbnail" />
      )}
    </div>
  );
};

export default LinkPreview;
