import styles from "./page.module.css";
import { Container } from "@/components/Container";
import { getData } from "@/utils";
import Post from "@/components/Post";

const ALL_POSTS_URL = "https://www.reddit.com/r/all.json";

export default async function Home() {
  const {
    data: { children: posts },
  } = await getData(ALL_POSTS_URL);

  return (
    <div className={styles.all}>
      <Container>
        <ul className={styles.ul}>
          {posts.map((post: any) => (
            <Post key={post.data.id} post={post.data} clickable />
          ))}
        </ul>
      </Container>
    </div>
  );
}
