import Link from "next/link";
import styles from "./Topbar.module.css";
import Image from "next/image";

const Topbar = () => {
  return (
    <header className={styles.topbar}>
      <nav className={styles.nav}>
        <Link href="/" className={styles.link}>
          <img
            src="https://i.imgur.com/sdO8tAw.png"
            alt="Reddit's logo"
            className={styles.logo}
          />
        </Link>
        <Link href="/" className={styles.link}>
          /all
        </Link>
      </nav>
    </header>
  );
};

export default Topbar;
