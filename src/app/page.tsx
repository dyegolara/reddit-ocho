import { Container } from "@/components/Container";
import Post from "@/components/Post";
import { PostType } from "@/types";
import { getData } from "@/utils";

import styles from "./page.module.css";

export const revalidate = 0;

const ALL_POSTS_URL = "https://old.reddit.com/r/all.json";

export default async function Home() {
  const response = await getData(ALL_POSTS_URL);

  if (!response) {
    return (
      <div className={styles.all}>
        <Container>
          <span>Error fetching data</span>
        </Container>
      </div>
    );
  }
  const {
    data: { children: posts },
  } = response;

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
