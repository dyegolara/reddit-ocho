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
    // Disabling a11y rules because this div only stops the propagation of the
    // click event to the parent element, which is the card. This is done to
    // avoid opening the post when clicking on the video controls.

    // eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/no-static-element-interactions
    <div className={styles.preview} onClick={(event) => event.preventDefault()}>
      {isVideo ? (
        <video className={styles.video} controls autoPlay loop>
          <source src={videoSource} />
          <track kind="captions" />
        </video>
      ) : (
        <img className={styles.img} src={url} alt="preview" />
      )}
    </div>
  );
};

export default MediaPreview;
