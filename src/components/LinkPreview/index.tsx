import { ExternalLink } from "lucide-react";
import Link from "next/link";
import React from "react";

import styles from "./LinkPreview.module.css";

interface LinkPreviewProps {
  url: string;
  thumbnail: string;
}

const LinkPreview: React.FC<LinkPreviewProps> = ({ url, thumbnail }) => {
  return (
    // Disabling a11y rules because this div only stops the propagation of the
    // click event to the parent element, which is the card. This is done to
    // avoid opening the post when clicking on the link preview.

    // eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/no-static-element-interactions
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
        <ExternalLink size={16} />
        &nbsp;
        {url}
      </Link>
      {!thumbnail || thumbnail === "default" ? null : (
        <img className={styles.thumbnail} src={thumbnail} alt="Thumbnail" />
      )}
    </div>
  );
};

export default LinkPreview;
