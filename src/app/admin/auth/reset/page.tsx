"use client";

import React from "react";
import Link from "next/link";
import InputWithImage from "@/components/form/inputWithImage/inputWithImage";
import styles from "./../auth.module.css";

export default function ForgotPassword() {
  return (
      <form>
        <h3>Reset Password</h3>
        <p>No worries! Enter your registered email below</p>

        <InputWithImage type="text" icon="bi-envelope-fill" placeholder="Enter your email" />
        <label className={styles.errorText}></label>

        <span className={styles.forgetPassword}><Link href="/admin/auth/">Back to Login</Link></span>

        <button type="submit">Reset Password</button>
      </form>
  );
}
