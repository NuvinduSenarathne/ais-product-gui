"use client";

import React from "react";
import Link from "next/link";
import InputWithImage from "@/components/form/inputWithImage/inputWithImage";
import styles from "./auth.module.css";

export default function AdminLogin() {
  return (
      <form>
        <h3>Welcome Back!</h3>
        <p>Enter your valid credential for logging in</p>

        <InputWithImage type="text" icon="bi-person-fill" placeholder="Enter your username" />
        <label className={styles.errorText}></label>

        <InputWithImage type="password" icon="bi-key-fill" placeholder="Enter your credentials" />
        <label className={styles.errorText}></label>

        <span className={styles.forgetPassword}><Link href="/admin/auth/reset/">Forgot Password?</Link></span>
        
        <button type="submit">Login</button>
      </form>
  );
}
