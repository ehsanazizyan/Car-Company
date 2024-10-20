"use client";
import { PiSignInLight } from "react-icons/pi";
import { FaUserAlt } from "react-icons/fa";
import styles from "./Header.module.css";
import Link from "next/link";
import { useSession } from "next-auth/react";

function Header() {
  const { status, data } = useSession();

  return (
    <div className={styles.header}>
      <div className={styles.left}>
        <Link href="/">صفحه اصلی</Link>
        <Link href="/buy-residential">آگهی ها</Link>
      </div>
      <div className={styles.right}>
        {data ? (
          <div className={styles.login}>
            <Link href="/dashboard">
              <FaUserAlt />
            </Link>
          </div>
        ) : (
          <p>
            <PiSignInLight />
            <Link href="/signin">ورود</Link>
          </p>
        )}
      </div>
    </div>
  );
}
export default Header;
