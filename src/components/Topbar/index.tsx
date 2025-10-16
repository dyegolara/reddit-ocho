"use client";
import { Moon, Sun } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { useTheme } from "@/app/ColorModeProvider";
import { ColorMode, DARK, LIGHT } from "@/app/useColorMode";

import logo from "./logo.webp";
import styles from "./Topbar.module.css";

const Topbar = () => {
  const pathname = usePathname();
  const { colorMode, setColorMode } = useTheme();

  return (
    <header className={styles.topbar}>
      <nav className={styles.nav}>
        <Link href="/" className={styles.link}>
          <Image src={logo} alt="Reddit's logo" width={100} height={30} />
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
