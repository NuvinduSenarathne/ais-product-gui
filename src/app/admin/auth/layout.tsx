"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import styles from "./auth.module.css";
import img1 from "../../../../public/assets/images/login-background-1.jpg";
import img2 from "../../../../public/assets/images/login-background-2.jpg";
import img3 from "../../../../public/assets/images/login-background-3.jpg";
import img4 from "../../../../public/assets/images/login-background-4.jpg";

const images = [img1, img2, img3, img4];

export default function AuthLayout({ children }: { children: React.ReactNode }) {
  const [imageIndex, setImageIndex] = useState<number>(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 20000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className={styles.loginContainer} style={{ backgroundImage: `url(${images[imageIndex].src})` }}>
      <div className={styles.formWrapper}>
        <div className={styles.formContainer}>
          <div className={styles.formLogoContainer}>
            <Image src="/assets/logo/grand_amanee.png" fill alt="Company Logo" />
          </div>
          <h3>Control Panel</h3>
          {children}
        </div>
      </div>
      <div className={styles.overlay}></div>
    </div>
  );
}
