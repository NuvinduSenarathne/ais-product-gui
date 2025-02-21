"use client";

import React, { useState } from "react";
import styles from "./cPanel.module.css";
import Sidebar from "@/components/layout/sidepanel/sidepanel";
import Header from "@/components/layout/header/header";

export default function ControlPanelLayout({ children }: { children: React.ReactNode }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(true);

  const toggleSidebar = () => setIsSidebarOpen((prev) => !prev);
  const closeSidebar = () => setIsSidebarOpen(false);

  return (
    <div className={styles.cPanelContainer}>
      <Sidebar isOpen={isSidebarOpen} closeSidebar={closeSidebar} />
      <div className={styles.cPanel}>
        <Header toggleSidebar={toggleSidebar} />
        <main>{children}</main>
      </div>
    </div>
  );
}
