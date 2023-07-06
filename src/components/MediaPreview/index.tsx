import React from "react";
import styles from "./styled.module.css";

interface MediaPreviewProps {
  url: string;
  isVideo: boolean;
  postHint: string;
  media: any; // Actualiza el tipo de "media" según la estructura de tus datos
  preview: any; // Actualiza el tipo de "preview" según la estructura de tus datos
}

const MediaPreview: React.FC<MediaPreviewProps> = ({
  url,
  isVideo,
  postHint,
  media,
  preview,
}) => {
  let videoSource: string | undefined;
  if (isVideo) {
    if (postHint === "hosted:video") {
      videoSource = media.reddit_video.fallback_url;
    }
    if (postHint === "rich:video") {
      videoSource = preview.reddit_video_preview.fallback_url;
    }
  }

  return (
    <div className={styles.preview}>
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
