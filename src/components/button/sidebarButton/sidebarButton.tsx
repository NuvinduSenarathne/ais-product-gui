import React, { useState } from "react";
import Image from "next/image";
import styles from "./sidebarButton.module.css"; 

interface SidebarButtonProps {
  label: string;
  iconSrc: string;
  hasSubMenu?: boolean;
  subMenuItems?: { label: string; onClick: () => void }[];
}

const SidebarButton: React.FC<SidebarButtonProps> = ({ label, iconSrc, hasSubMenu = false, subMenuItems = [] }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className={styles.sidebarButtonContainer}>
      <button className={styles.sidebarButton} onClick={() => hasSubMenu && setIsExpanded(!isExpanded)}>
        <div className={styles.sideButtonLogo}>
          <Image src={iconSrc} alt="icon" fill />
        </div>
        <span>{label}</span>
        {hasSubMenu && (
          <span className={`${styles.arrow} ${isExpanded ? styles.rotated : ""}`}>
            <div className={styles.arrowLogo}>
            <Image src="/assets/icon/arrow.png" alt="icon" fill />
            </div>
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
