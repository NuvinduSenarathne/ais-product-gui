"use client";

import React, { useState } from "react";
import styles from "./dashboard.module.css";
import Image from "next/image";
import Icon from "@/components/element/icon/icon";
import SidebarButton from "@/components/button/sidebarButton/sidebarButton";

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const [expandedMenus, setExpandedMenus] = useState<{ [key: string]: boolean }>({});
  const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(false); // Added missing state

  const toggleMenu = (menu: string) => {
    setExpandedMenus((prev) => ({ ...prev, [menu]: !prev[menu] }));
  };

  return (
    <div className={styles.dashboardContainer}>
      <aside className={styles.sidebar}>
        <div className={styles.sidebarHeader}>
          <Image src="/assets/logo/grand_amanee.png" alt="Company Logo" width={85} height={85} />
          <div>
            <div className={styles.sidebarHeaderTitle1}>GRAND AMANEE</div>
            <div className={styles.sidebarHeaderTitle2}>Hotel Management System</div>
          </div>
        </div>
        <div className={styles.sidebarContent}>
          <div className={styles.sectionTitle}>Main</div>
          <div className={styles.buttonContainer}>
          <SidebarButton
            label="Bookings"
            iconSrc="/assets/icon/booking.png"
            hasSubMenu
            subMenuItems={[
              { label: "New Booking", onClick: () => console.log("New Booking clicked") },
              { label: "View Bookings", onClick: () => console.log("View Bookings clicked") },
            ]}
          />
            <button className={styles.sidebarButton} onClick={() => toggleMenu("bookings")}>
              <Image src="/assets/icon/booking.png" alt="Bookings" width={26} height={26} />
              <span>Bookings</span>
              <span className={`${styles.arrow} ${expandedMenus["bookings"] ? styles.rotated : ""}`}>
                <Image src="/assets/icon/arrow.png" alt="Arrow" width={20} height={20} />
              </span>
            </button>
            <div className={`${styles.subMenu} ${expandedMenus["bookings"] ? styles.open : ""}`}>
              <button className={styles.subButton}>New Booking</button>
              <button className={styles.subButton}>View Bookings</button>
            </div>
          </div>
        </div>
      </aside>
      <div className={styles.dashboard}>
        <header className={styles.header}>
          <div className={styles.start} onClick={() => setIsSidebarOpen(!isSidebarOpen)}>
            <Icon iconSrc="/assets/icon/menu-static.png" size={26} />
          </div>
          <div className={styles.middle}></div>
          <div className={styles.end}>
            <div className={styles.iconContainer} title="Mail">
              <Icon iconSrc="/assets/icon/mail-static.png" count={3} size={28} />
            </div>
            <div className={styles.iconContainer} title="Notification">
              <Icon iconSrc="/assets/icon/notification-static.png" count={3} size={28} />
            </div>
            <div className={styles.userContainer} title="Profile">
              <Image src="/assets/images/user.jpg" alt="User" width={34} height={34} className={styles.userImage} />
              <div>
                <div className={styles.userName}>Nuvindu Senarathne</div>
                <div className={styles.userRole}>Administrator</div>
              </div>
            </div>
          </div>
        </header>
        <main className={styles.content}>{children}</main>
      </div>
    </div>
  );
}
