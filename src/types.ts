export type CommentType = {
  id: string;
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
