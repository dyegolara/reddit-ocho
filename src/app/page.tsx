import styles from "./page.module.css";
import { Container } from "@/components/Container";
import { getData } from "@/utils";
import Post from "@/components/Post";
import { PostType } from "@/types";

export const revalidate = 0;

const ALL_POSTS_URL = "https://www.reddit.com/r/all.json";

export default async function Home() {
  const {
    data: { children: posts },
  }: { data: { children: { data: PostType }[] } } = await getData(
    ALL_POSTS_URL
  );

  return (
    <div className={styles.all}>
      <Container>
        <ul className={styles.ul}>
          {posts.map((post: { data: PostType }) => (
            <Post key={post.data.id} post={post.data} clickable />
          ))}
        </ul>
      </Container>
    </div>
  );
}
