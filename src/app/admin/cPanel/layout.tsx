"use client";

import React, { useState } from "react";
import styles from "./cPanel.module.css";
import Image from "next/image";
import Icon from "@/components/element/icon/icon";
import SidebarButton from "@/components/button/sidebarButton/sidebarButton";

export default function ControlPanelLayout({ children }: { children: React.ReactNode }) {
  const [expandedMenus, setExpandedMenus] = useState<{ [key: string]: boolean }>({});
  const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(true);
  const [overlayVisible, setOverlayVisible] = useState(false);

  const subscribedModules: string[] = ["Accommodation", "Main"];

  const modules = [
    {
      section: "Accommodation",
      items: [
        {
          label: "Rooms",
          iconSrc: "/assets/icon/room.png",
          subMenuItems: [
            { label: "Add Room", onClick: () => console.log("Add Room clicked") },
            { label: "Room List", onClick: () => console.log("Room List clicked") },
            { label: "Room Availability", onClick: () => console.log("Room Availability clicked") },
            { label: "Assign Amenities", onClick: () => console.log("Assign Amenities clicked") },
            { label: "Price Management", onClick: () => console.log("Price Management clicked") },
            { label: "Room Maintenance", onClick: () => console.log("Room Maintenance clicked") },
          ],
        },
        {
          label: "Bookings",
          iconSrc: "/assets/icon/booking.png",
          subMenuItems: [
            { label: "New Booking", onClick: () => console.log("New Booking clicked") },
            { label: "View Bookings", onClick: () => console.log("View Bookings clicked") },
            { label: "Booking Calendar", onClick: () => console.log("Booking Calendar clicked") },
            { label: "Check-in / Check-out", onClick: () => console.log("Check-in / Check-out clicked") },
            { label: "Special Requests", onClick: () => console.log("Special Requests clicked") },
          ],
        },
        {
          label: "Housekeeping",
          iconSrc: "/assets/icon/housekeeping.png",
          subMenuItems: [
            { label: "Task Assignments", onClick: () => console.log("Task Assignments clicked") },
            { label: "Cleaning Schedule", onClick: () => console.log("Cleaning Schedule clicked") },
            { label: "Staff Management", onClick: () => console.log("Staff Management clicked") },
          ],
        },
        {
          label: "Guests",
          iconSrc: "/assets/icon/guest.png",
          subMenuItems: [
            { label: "Guest List", onClick: () => console.log("Guest List clicked") },
            { label: "VIP Guests", onClick: () => console.log("VIP Guests clicked") },
            { label: "Guest Preferences", onClick: () => console.log("Guest Preferences clicked") },
          ],
        },
      ],
    },
    {
      section: "Finance & Admin",
      items: [
        {
          label: "Payments",
          iconSrc: "/assets/icon/payment.png",
          subMenuItems: [
            { label: "Invoices", onClick: () => console.log("Invoices clicked") },
            { label: "Refunds", onClick: () => console.log("Refunds clicked") },
            { label: "Transaction History", onClick: () => console.log("Transaction History clicked") },
          ],
        },
        {
          label: "Subscriptions",
          iconSrc: "/assets/icon/subscription.png",
          subMenuItems: [
            { label: "Manage Modules", onClick: () => console.log("Manage Modules clicked") },
            { label: "Subscription Plans", onClick: () => console.log("Subscription Plans clicked") },
          ],
        },
        {
          label: "User Management",
          iconSrc: "/assets/icon/users.png",
          subMenuItems: [
            { label: "Staff Accounts", onClick: () => console.log("Staff Accounts clicked") },
            { label: "Roles & Permissions", onClick: () => console.log("Roles & Permissions clicked") },
            { label: "Access Logs", onClick: () => console.log("Access Logs clicked") },
          ],
        },
      ],
    },
    {
      section: "Reports & Analytics",
      items: [
        {
          label: "Reports",
          iconSrc: "/assets/icon/reports.png",
          subMenuItems: [
            { label: "Booking Reports", onClick: () => console.log("Booking Reports clicked") },
            { label: "Revenue Reports", onClick: () => console.log("Revenue Reports clicked") },
            { label: "Housekeeping Reports", onClick: () => console.log("Housekeeping Reports clicked") },
          ],
        },
        {
          label: "Analytics",
          iconSrc: "/assets/icon/analytics.png",
          subMenuItems: [
            { label: "Occupancy Rate", onClick: () => console.log("Occupancy Rate clicked") },
            { label: "Customer Trends", onClick: () => console.log("Customer Trends clicked") },
            { label: "Peak Booking Times", onClick: () => console.log("Peak Booking Times clicked") },
          ],
        },
      ],
    },
  ];
  
  
  const toggleMenu = (menu: string) => {
    setExpandedMenus((prev) => ({ ...prev, [menu]: !prev[menu] }));
  };

  const toggleSidebar = () => {
    setIsSidebarOpen((prev) => {
      const newState = !prev;
      setOverlayVisible(newState);
      return newState;
    });
  };

  const closeSidebar = () => {
    setIsSidebarOpen(false);
    setOverlayVisible(false);
  };

  return (
    <div className={styles.cPanelContainer}>
      <aside className={`${styles.sidebar} ${isSidebarOpen ? styles.sidebarOpen : styles.sidebarClosed}`}>
        <div className={styles.sidebarHeader}>
          <div className={styles.imageWrapper}>
            <Image src="/assets/logo/grand_amanee.png" alt="Company Logo" fill />
          </div>
          <div>
            <div className={styles.title}>GRAND AMANEE</div>
            <div className={styles.subTitle}>Hotel Management System</div>
          </div>
        </div>
        <div className={styles.sidebarBody}>
          {modules
            .filter((module) => subscribedModules.includes(module.section))
            .map((module) => (
              <div key={module.section} className={styles.bodyContext}>
                <div className={styles.title}>{module.section}</div>
                {module.items.map((item) => (
                  <div key={item.label} className={styles.buttonContainer}>
                    <SidebarButton
                      label={item.label}
                      iconSrc={item.iconSrc}
                      hasSubMenu={item.subMenuItems?.length > 0}
                      subMenuItems={item.subMenuItems}
                    />
                  </div>
                ))}
              </div>
            ))}
        </div>
      </aside>
      <div className={`${styles.sidebarOverlay} ${overlayVisible ? styles.sidebarOverlayActive : ""}`} onClick={closeSidebar} />
      <div className={styles.cPanel}>
        <header className={styles.cPanelHeader}>
          <div className={styles.start}>
            <div className={styles.iconWrapper} onClick={toggleSidebar}>
              <Icon iconSrc="/assets/icon/menu-static.png" size={26} />
            </div>
          </div>
          <div className={styles.middle}></div>
          <div className={styles.end}>
            <div className={styles.iconWrapper} title="Mail">
              <Icon iconSrc="/assets/icon/mail-static.png" count={3} size={28} />
            </div>
            <div className={styles.iconWrapper} title="Notification">
              <Icon iconSrc="/assets/icon/notification-static.png" count={3} size={28} />
            </div>
            <div className={styles.userContainer} title="Profile">
              <Image src="/assets/images/user.jpg" alt="User" width={34} height={34} className={styles.userImage} />
              <div>
                <div className={styles.userNameHolder}>Nuvindu Senarathne</div>
                <div className={styles.userRoleHolder}>Administrator</div>
              </div>
            </div>
          </div>
        </header>
        <main className={styles.cPanelBody}>
            {children}
        </main>
      </div>
    </div>
  );
}
