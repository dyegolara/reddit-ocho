"use client";
import Link from "next/link";
import styles from "./Topbar.module.css";
import { usePathname } from "next/navigation";
import useColorMode, { ColorMode, DARK, LIGHT } from "@/app/useColorMode";
import { useTheme } from "@/app/ColorModeProvider";
import { Sun, Moon } from "lucide-react";

const Topbar = () => {
  const pathname = usePathname();
  const { colorMode, setColorMode } = useTheme();

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

        <div className={styles.rightSide}>
          {pathname !== "/" && (
            <Link href="/" className={styles.link}>
              back to /all
            </Link>
          )}
          <button
            className={styles.button}
            onClick={() =>
              setColorMode((mode: ColorMode) => (mode === LIGHT ? DARK : LIGHT))
            }
          >
            {colorMode === LIGHT ? <Moon size={24} /> : <Sun size={24} />}
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Topbar;
