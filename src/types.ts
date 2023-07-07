export type CommentType = {
  id: string;
  kind: "t1" | "more";
  score: number;
  author: string;
  body: string;
  replies?: { data: { children: CommentType[] } };
};

export type PostType = {
  id: string;
  subreddit: string;
  author: string;
  title: string;
  selftext: string;
  url: string;
  score: number;
  gallery_data: {
    items: [{ media_id: string; id: string }];
  };
  media: {
    reddit_video: {
      fallback_url: string;
    };
  };
  thumbnail: string;
  preview: {
    reddit_video_preview: {
      fallback_url: string;
    };
  };
  permalink: string;
  is_video: boolean;
  is_gallery: boolean;
  is_reddit_media_domain: boolean;
  is_self: boolean;
  post_hint: string;
};
