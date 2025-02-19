"use client";

import React, { useState, useRef, useEffect } from "react";
import styles from "./notificationMenu.module.css";
import Image from "next/image";
import Icon from "../icon/icon";

interface Notification {
  title: string;
  content: string;
  time: string;
}

export default function NotificationMenu() {
  const [open, setOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  const notifications: Notification[] = [
    { title: "New Message", content: "You have received a new message from John.", time: "18 hours ago" },
    { title: "System Update", content: "A new update is available. Please restart your system.", time: "1 day ago" },
    { title: "Meeting Reminder", content: "You have a meeting scheduled at 3 PM.", time: "2 days ago" },
    { title: "New Message", content: "You have received a new message from John.", time: "18 hours ago" },
    { title: "System Update", content: "A new update is available. Please restart your system.", time: "1 day ago" },
    { title: "Meeting Reminder", content: "You have a meeting scheduled at 3 PM.", time: "2 days ago" },
    { title: "New Message", content: "You have received a new message from John.", time: "18 hours ago" },
    { title: "System Update", content: "A new update is available. Please restart your system.", time: "1 day ago" },
    { title: "Meeting Reminder", content: "You have a meeting scheduled at 3 PM.", time: "2 days ago" },
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
    <div className={styles.notificationWrapper} ref={menuRef}>
      <Icon icon="bi-bell-fill" count={3} title="Notification" onClick={() => setOpen(!open)} />
      <div className={styles.notificationDropdown + (open ? ` ${styles.open}` : "")}>
        <div className={styles.notificationHeader}>Notifications</div>
        <div className={styles.notificationList}>
            {notifications.length > 0 ? (
            notifications.map((notification, index) => (
                <div key={index} className={styles.notificationItem}>
                <div className={styles.notificationTitle}>{notification.title}</div>
                <div className={styles.notificationContent}>{notification.content}</div>
                <div className={styles.notificationTime}>{notification.time}</div>
                </div>
            ))
            ) : (
            <div className={styles.noNotifications}>No new notifications</div>
            )}
        </div>
        </div>
    </div>
  );
}
