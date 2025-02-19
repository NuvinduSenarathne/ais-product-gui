import React from "react";
import styles from "./icon.module.css";

interface IconProps {
  icon: string;
  count?: number;
  title: string;
  onClick?: () => void;
}

export default function Icon({ icon, count = 0, title, onClick }: IconProps) {
  return (
    <div 
      className={styles.iconContainer} 
      title={title} 
      onClick={onClick} 
      style={{ cursor: onClick ? "pointer" : "default" }}
    >
      <i className={`bi ${icon} ${styles.inputIcon}`}></i>
      {count > 0 && <span className={styles.badge}>{count}</span>}
    </div>
  );
}
