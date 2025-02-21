"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import styles from "./sidebarButton.module.css";

interface SidebarButtonProps {
  label: string;
  icon: string;
  path?: string;
  hasSubMenu?: boolean;
  subMenuItems?: { label: string; path: string }[];
}

const SidebarButton: React.FC<SidebarButtonProps> = ({ label, icon, path, hasSubMenu = false, subMenuItems = [] }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const router = useRouter();

  const handleNavigation = (path?: string) => {
    if (path) {
      router.replace(path);
    }
  };

  return (
    <div className={styles.sidebarButtonContainer}>
      <button
        className={styles.sidebarButton}
        onClick={() => (hasSubMenu ? setIsExpanded(!isExpanded) : handleNavigation(path))}
      >
        <i className={`bi ${icon} ${styles.menuIcon}`}></i>
        <span>{label}</span>
        {hasSubMenu && (
          <span className={`${styles.arrow} ${isExpanded ? styles.rotated : ""}`}>
            <i className="bi bi-chevron-right"></i>
          </span>
        )}
      </button>

      {hasSubMenu && (
        <div className={`${styles.subMenu} ${isExpanded ? styles.open : ""}`}>
          {subMenuItems.map((item, index) => (
            <button key={`subitem-${item.label}-${index}`} className={styles.subButton} onClick={() => handleNavigation(item.path)}>
              {item.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default SidebarButton;
