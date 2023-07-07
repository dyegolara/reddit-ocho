export type CommentType = {
  id: string;
  score: number;
  author: string;
  body: string;
  replies?: { data: { children: CommentType[] } };
};
