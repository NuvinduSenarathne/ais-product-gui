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
        <Image src={iconSrc} alt={label} width={26} height={26} />
        <span>{label}</span>
        {hasSubMenu && (
          <span className={`${styles.arrow} ${isExpanded ? styles.rotated : ""}`}>
            <Image src="/assets/icon/arrow.png" alt="Arrow" width={20} height={20} />
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
