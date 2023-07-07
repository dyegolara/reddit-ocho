import styles from "./page.module.css";
import Loading from "@/components/Loading";
import { Container } from "@/components/Container";
import Post from "@/components/Post";
import { getData } from "@/utils";
import AddComment from "@/components/AddComment";
import CommentsList from "@/components/CommentsList";
import PostComments from "@/app/r/[[...permalink]]/PostComments";

export default async function Detail({
  params: { permalink },
}: {
  params: { permalink: string[] };
}) {
  const [rawPost, rawComments] = await getData(
    `https://www.reddit.com/r/${permalink.join("/")}.json`
  );
  const [post] = rawPost.data.children;
  const comments = rawComments.data.children;
  return (
    <div className={styles.detail}>
      <Container>
        <Post post={post.data} clickable={false} />
        <PostComments comments={comments} />
      </Container>
      <Loading />
    </div>
  );
}
