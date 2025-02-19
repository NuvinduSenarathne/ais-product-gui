import React, { useState } from "react";
import styles from "./sidebarButton.module.css"; 

interface SidebarButtonProps {
  label: string;
  icon: string;
  hasSubMenu?: boolean;
  subMenuItems?: { label: string; onClick: () => void }[];
}

const SidebarButton: React.FC<SidebarButtonProps> = ({ label, icon, hasSubMenu = false, subMenuItems = [] }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className={styles.sidebarButtonContainer}>
      <button className={styles.sidebarButton} onClick={() => hasSubMenu && setIsExpanded(!isExpanded)}>
        <i className={`bi ${icon} ${styles.inputIcon}`}></i>
        <span>{label}</span>
        {hasSubMenu && (
          <span className={`${styles.arrow} ${isExpanded ? styles.rotated : ""}`}>
            <i className={`bi bi-chevron-right ${styles.inputIcon}`}></i>
          </span>
        )}
      </button>
      {hasSubMenu && (
        <div className={`${styles.subMenu} ${isExpanded ? styles.open : ""}`}>
          {subMenuItems.map((item, index) => (
            <button key={index} className={styles.subButton} onClick={item.onClick}>
              {item.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default SidebarButton;
