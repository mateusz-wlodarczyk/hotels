import Link from "next/link";
import React from "react";
import styles from "./SubNavbar.module.css";
export default function SubNavbar() {
  return (
    <nav>
      <ul className={styles.navbar}>
        <li>
          <Link href="/about">about</Link>
        </li>
        <li>
          <Link href="/privacy-policy">privacy policy</Link>
        </li>
        <li>
          <Link href="/terms">terms</Link>
        </li>
      </ul>
    </nav>
  );
}
