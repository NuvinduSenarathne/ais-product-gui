import React, { useState, useEffect } from "react";
import styles from "./icon.module.css";
import Image from "next/image";

interface IconProps {
  iconSrc: string;
  count?: number;
  size: number;
}

export default function Icon({ iconSrc, count = 0, size }: IconProps) {
  const [scaledSize, setScaledSize] = useState(size);

  useEffect(() => {
    const updateSize = () => {
      let newSize = size;

      if (window.innerWidth <= 500 || window.innerHeight <= 400) {
        newSize = size * 0.70;
      } else if (window.innerWidth <= 890) {
        newSize = size * 0.80;
      } else if (window.innerWidth <= 1300 || window.innerHeight <= 600) {
        newSize = size * 0.90;
      }

      setScaledSize(newSize);
    };

    updateSize();
    window.addEventListener("resize", updateSize);

    return () => window.removeEventListener("resize", updateSize);
  }, [size]);

  return (
    <div className={styles.iconContainer} style={{ width: scaledSize, height: scaledSize, minWidth: 20, minHeight: 20 }}>
      <Image src={iconSrc} fill alt="Icon Element" className={styles.image} />
      {count > 0 && <span className={styles.badge}>{count}</span>}
    </div>
  );
}
