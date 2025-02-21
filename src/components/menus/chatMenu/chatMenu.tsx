"use client";

import React, { useState, useRef, useEffect } from "react";
import styles from "./chatMenu.module.css";
import Image from "next/image";
import Icon from "../../ui/icon/icon";

interface ChatMessage {
  senderImage: string;
  senderName: string;
  date: string;
  content: string;
}

export default function ChatMenu() {
  const [open, setOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  const chatMessages: ChatMessage[] = [
    {
      senderImage: "/assets/images/default-user.png",
      senderName: "John Doe",
      date: "18 hours ago",
      content: "Hey, how are you?",
    },
    {
      senderImage: "/assets/images/default-user.png",
      senderName: "Alice Smith",
      date: "1 day ago",
      content: "Meeting at 3 PM confirmed!",
    },
    {
      senderImage: "/assets/images/default-user.png",
      senderName: "Bob Williams",
      date: "2 days ago",
      content: "Can you check the report?",
    },
    {
      senderImage: "/assets/images/default-user.png",
      senderName: "Emily Johnson",
      date: "3 days ago",
      content: "Let's catch up later!",
    },
    {
        senderImage: "/assets/images/default-user.png",
        senderName: "John Doe",
        date: "18 hours ago",
        content: "Hey, how are you?",
      },
      {
        senderImage: "/assets/images/default-user.png",
        senderName: "Alice Smith",
        date: "1 day ago",
        content: "Meeting at 3 PM confirmed!",
      },
      {
        senderImage: "/assets/images/default-user.png",
        senderName: "Bob Williams",
        date: "2 days ago",
        content: "Can you check the report?",
      },
      {
        senderImage: "/assets/images/default-user.png",
        senderName: "Emily Johnson",
        date: "3 days ago",
        content: "Let's catch up later!",
      },
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
    <div className={styles.chatWrapper} ref={menuRef}>
      <Icon icon="bi-chat-dots-fill" count={3} title="Messages" onClick={() => setOpen(!open)} />
      <div className={`${styles.chatDropdown} ${open ? styles.open : ""}`}>
        <div className={styles.chatHeader}>Messages</div>
        <div className={styles.chatList}>
          {chatMessages.length > 0 ? (
            chatMessages.map((chat, index) => (
              <div key={index} className={styles.chatItem}>
                <Image src={chat.senderImage} alt="Sender" width={40} height={40} className={styles.chatImage} />
                <div className={styles.chatDetails}>
                  <div className={styles.chatName}>{chat.senderName}</div>
                  <div className={styles.chatDate}>{chat.date}</div>
                  <div className={styles.chatContent}>{chat.content}</div>
                </div>
              </div>
            ))
          ) : (
            <div className={styles.noChats}>No new messages</div>
          )}
        </div>
      </div>
    </div>
  );
}
