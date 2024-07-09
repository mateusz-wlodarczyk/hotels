"use client";

import Link from "next/link";
import React from "react";
import { ROUTES } from "../constants/utils";
import { usePathname } from "next/navigation";
import styles from "./MainNavbar.module.css";
export default function MainNavbar({
  signInComponent,
}: {
  signInComponent: React.ReactNode;
}) {
  const path = usePathname();
  return (
    <nav>
      <ul className={styles.navbar}>
        {ROUTES.map((el) => (
          <li key={el.name}>
            <Link
              href={el.link}
              style={{
                textDecoration: `${el.link === path ? "underline" : ""} `,
              }}
            >
              {el.name}
            </Link>
          </li>
        ))}
      </ul>
      {signInComponent}
    </nav>
  );
}
