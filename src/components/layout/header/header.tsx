"use client";

import React from "react";
import styles from "./header.module.css";
import Icon from "@/components/ui/icon/icon";
import UserMenu from "../../menus/userMenu/userMenu";
import NotificationMenu from "../../menus/notificationMenu/notificationMenu";
import ChatMenu from "../../menus/chatMenu/chatMenu";

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
