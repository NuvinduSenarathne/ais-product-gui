"use client";

import React, { useState, useRef, useEffect } from "react";
import styles from "./userMenu.module.css";
import Image from "next/image";

export default function UserMenu() {
  const [open, setOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  const options = [
    { label: "Manage Account", icon: "bi-person-vcard", onClick: () => alert("Profile Clicked") },
    { label: "Settings", icon: "bi-gear", onClick: () => alert("Settings Clicked") },
    { label: "Logout", icon: "bi-box-arrow-right", onClick: () => alert("Logout Clicked") },
  ];

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className={styles.userWrapper} ref={menuRef}>
      <Image
        src="/assets/images/user.jpg"
        alt="User"
        width={34}
        height={34}
        className={styles.userImage}
        onClick={() => setOpen(!open)}
      />
      <div className={`${styles.userDropdown} ${open ? styles.open : ""}`}>
        <div className={styles.userContainer} title="Profile" onClick={() => setOpen(!open)}>
          <Image src="/assets/images/user.jpg" alt="User" width={60} height={60} className={styles.userImage} />
          <div>
            <div className={styles.userNameHolder}>Hi, Nuvindu Senarathne</div>
            <div className={styles.userRoleHolder}>Online</div>
          </div>
        </div>

        {options.map((option, index) => (
          <div className={styles.userMenu}>
            <button>
              <i className={`bi ${option.icon} ${styles.inputIcon}`}></i>
              <span>{option.label}</span>
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
