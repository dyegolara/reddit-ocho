import styles from "./page.module.css";
import Container from "@/components/Container";

export default function Home() {
  return (
    <>
      <div className={styles.all}>
        <Container>
          <ul className={styles.ul}></ul>
        </Container>
      </div>
    </>
  );
}
