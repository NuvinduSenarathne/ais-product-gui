"use client";

import React from "react";
import styles from "./header.module.css";
import Image from "next/image";
import Icon from "@/components/element/icon/icon";
import UserMenu from "../userMenu/userMenu";
import NotificationMenu from "../notificationMenu/notificationMenu";
import ChatMenu from "../chatMenu/chatMenu";

interface HeaderProps {
  toggleSidebar: () => void;
}

export default function Header({ toggleSidebar }: HeaderProps) {
  return (
    <header className={styles.cPanelHeader}>
      <div className={styles.start}>
        <Icon icon="bi-list" title="Menu" onClick={toggleSidebar} />
      </div>
      <div className={styles.middle}></div>
      <div className={styles.end}>
        <ChatMenu />
        <NotificationMenu />
        <UserMenu />
      </div>
    </header>
  );
}
