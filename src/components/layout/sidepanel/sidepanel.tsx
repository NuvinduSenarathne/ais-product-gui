"use client";

import React from "react";
import styles from "./sidebar.module.css";
import Image from "next/image";
import SidebarButton from "@/components/ui/sidebarButton/sidebarButton";

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
          path: "/admin/cPanel/",
        },
        {
          label: "User Management",
          icon: "bi-person-lines-fill",
          subMenuItems: [
            { label: "Add User", path: "/admin/cPanel/main/users/add" },
            { label: "Manage User", path: "/admin/cPanel/main/users/manage" },
            { label: "Add User Roles", path: "/admin/cPanel/main/roles/add" },
            { label: "Manage User Roles", path: "/admin/cPanel/main/roles/manage" },
            { label: "Activity Logs", path: "/admin/cPanel/main/activity-logs" },
          ],
        },
        {
          label: "Department Management",
          icon: "bi-buildings-fill",
          subMenuItems: [
            { label: "Add Department", path: "/admin/cPanel/main/departments/add" },
            { label: "Manage Department", path: "/admin/cPanel/main/departments/manage" },
            { label: "Add Division", path: "/admin/cPanel/main/divisions/add" },
            { label: "Manage Division", path: "/admin/cPanel/main/divisions/manage" },
          ],
        }
      ],
    },
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
          {modules.map((module, moduleIndex) => (
            <div key={`module-${module.section}-${moduleIndex}`} className={styles.bodyContext}>
              <div className={styles.title}>{module.section}</div>
              {module.items.map((item, itemIndex) => (
                <div key={`item-${item.label}-${itemIndex}`} className={styles.buttonContainer}>
                  <SidebarButton
                    label={item.label}
                    icon={item.icon}
                    path={item.path}
                    hasSubMenu={!!item.subMenuItems}
                    subMenuItems={item.subMenuItems?.map((subItem, subIndex) => ({
                      ...subItem,
                      key: `subItem-${subItem.label}-${subIndex}`,
                    }))}
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
