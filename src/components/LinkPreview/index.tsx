import React from "react";
import styles from "./styled.module.css";
import Link from "next/link";

interface LinkPreviewProps {
  url: string;
  thumbnail: string;
}

const LinkPreview: React.FC<LinkPreviewProps> = ({ url, thumbnail }) => {
  return (
    <div className={styles.linkPreview}>
      <Link href={url} target="_blank" rel="noopener noreferrer">
        {url}
      </Link>
      <img className={styles.thumbnail} src={thumbnail} alt="Thumbnail" />
    </div>
  );
};

export default LinkPreview;
