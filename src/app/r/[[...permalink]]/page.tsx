import PostComments from "@/app/r/[[...permalink]]/PostComments";
import { Container } from "@/components/Container";
import Post from "@/components/Post";
import { CommentType, PostType } from "@/types";
import { getData } from "@/utils";

import styles from "./page.module.css";

export default async function Detail({
  params: { permalink },
}: {
  params: { permalink: string[] };
}) {
  const [rawPost, rawComments]: [
    { data: { children: { data: PostType }[] } },
    { data: { children: { data: CommentType }[] } }
  ] = await getData(`https://old.reddit.com/r/${permalink.join("/")}.json`);

  const [post] = rawPost?.data?.children;
  const comments = rawComments?.data?.children || [];

  return (
    <div className={styles.detail}>
      <Container>
        <Post post={post.data} clickable={false} />
        <PostComments comments={comments} />
      </Container>
    </div>
  );
}
