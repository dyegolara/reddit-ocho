"use client";
import Link from "next/link";
import styles from "./Topbar.module.css";
import { usePathname } from "next/navigation";

const Topbar = () => {
  const pathname = usePathname();

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
        {pathname !== "/" && (
          <Link href="/" className={styles.link}>
            back to /all
          </Link>
        )}
      </nav>
    </header>
  );
};

export default Topbar;
