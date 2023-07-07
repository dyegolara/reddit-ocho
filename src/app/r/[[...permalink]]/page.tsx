import styles from "./page.module.css";
import { Container } from "@/components/Container";
import Post from "@/components/Post";
import { getData } from "@/utils";
import PostComments from "@/app/r/[[...permalink]]/PostComments";
import { CommentType, PostType } from "@/types";

export default async function Detail({
  params: { permalink },
}: {
  params: { permalink: string[] };
}) {
  const [rawPost, rawComments]: [
    { data: { children: { data: PostType }[] } },
    { data: { children: { data: CommentType }[] } }
  ] = await getData(`https://www.reddit.com/r/${permalink.join("/")}.json`);

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
