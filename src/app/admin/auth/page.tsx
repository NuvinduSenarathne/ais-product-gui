"use client";

import React from "react";
import Link from "next/link";
import InputWithImage from "@/components/form/inputWithImage/inputWithImage";
import styles from "./auth.module.css";

export default function AdminLogin() {
  return (
      <form>
        <InputWithImage type="text" imageUrl="/assets/icon/user.png" placeholder="Enter your username" />
        <label className={styles.errorText}></label>
        <InputWithImage type="password" imageUrl="/assets/icon/lock.png" placeholder="Enter your credentials" />
        <label className={styles.errorText}></label>
        <span className={styles.forgetPassword}><Link href="/admin/auth/reset/">Forgot Password?</Link></span>
        <button type="submit">Login</button>
      </form>
  );
}
