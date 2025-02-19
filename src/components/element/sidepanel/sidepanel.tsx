"use client";

import React from "react";
import styles from "./sidebar.module.css";
import Image from "next/image";
import SidebarButton from "@/components/button/sidebarButton/sidebarButton";

interface SidebarProps {
  isOpen: boolean;
  closeSidebar: () => void;
}

export default function Sidebar({ isOpen, closeSidebar }: SidebarProps) {
  const subscribedModules: string[] = ["Accommodation", "Main"];

  const modules = [
    {
      section: "Main",
      items: [
        {
          label: "Dashboard",
          icon: "bi-house-door-fill",
          subMenuItems: []
        },
        {
          label: "User Management",
          icon: "bi-person-lines-fill",
          subMenuItems: [
            { label: "Add User", onClick: () => console.log("Occupancy Rate clicked") },
            { label: "Manage User", onClick: () => console.log("Customer Trends clicked") },
            { label: "Add User Roles", onClick: () => console.log("Peak Booking Times clicked") },
            { label: "Manage User Roles", onClick: () => console.log("Occupancy Rate clicked") },
            { label: "Activity Logs", onClick: () => console.log("Customer Trends clicked") },
          ],
        },
        {
          label: "Departments & Teams",
          icon: "bi-people-fill",
          subMenuItems: [
            { label: "Add Department", onClick: () => console.log("Add Department clicked") },
            { label: "Manage Departments", onClick: () => console.log("Manage Departments clicked") },
            { label: "Add Division", onClick: () => console.log("Add Division clicked") },
            { label: "Manage Divisions", onClick: () => console.log("Manage Divisions clicked") },
          ],
        }
      ],
    }
  ];

  return (
    <>
      <aside className={`${styles.sidebar} ${isOpen ? styles.sidebarOpen : styles.sidebarClosed}`}>
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
          {modules.map((module) => (
            <div key={module.section} className={styles.bodyContext}>
              <div className={styles.title}>{module.section}</div>
              {module.items.map((item) => (
                <div key={item.label} className={styles.buttonContainer}>
                  <SidebarButton
                    label={item.label}
                    icon={item.icon}
                    hasSubMenu={item.subMenuItems?.length > 0}
                    subMenuItems={item.subMenuItems}
                  />
                </div>
              ))}
            </div>
          ))}
        </div>
      </aside>

      {/* Sidebar Overlay */}
      {isOpen && <div className={styles.sidebarOverlay} onClick={closeSidebar} />}
    </>
  );
}
