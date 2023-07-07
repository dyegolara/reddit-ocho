import React from "react";
import styles from "./MediaPreview.module.css";

interface MediaPreviewProps {
  url: string;
  isVideo: boolean;
  postHint: string;
  thumbnail: string;
  media: {
    reddit_video: {
      fallback_url: string;
    };
  };
  preview: {
    reddit_video_preview: {
      fallback_url: string;
    };
  };
}

const MediaPreview: React.FC<MediaPreviewProps> = ({
  url,
  isVideo,
  postHint,
  media,
  preview,
  thumbnail,
}) => {
  let videoSource: string | undefined;
  if (isVideo) {
    if (postHint === "hosted:video") {
      videoSource = media?.reddit_video?.fallback_url;
    }
    if (postHint === "rich:video") {
      videoSource = preview?.reddit_video_preview?.fallback_url;
    }
  }

  return (
    <div className={styles.preview} onClick={(event) => event.preventDefault()}>
      {isVideo ? (
        <video className={styles.video} controls autoPlay loop>
          <source src={videoSource} />
        </video>
      ) : (
        <img className={styles.img} src={url} alt="preview" />
      )}
    </div>
  );
};

export default MediaPreview;
