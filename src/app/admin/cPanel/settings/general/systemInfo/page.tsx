"use client";

import React, { useState } from "react";
import Image from "next/image";
import styles from "./../../settings.module.css";

const SystemDetails = () => {
  const [systemData, setSystemData] = useState({
    systemId: "SYS-2025-001",
    systemName: "Arcadia ERP",
    version: "1.0.0",
    developer: "Arcadia Dev Team",
    companyName: "Arcadia Resource Management Solutions",
    industry: "ERP & Business Solutions",
    companyGroup: "Arcadia Global",
    license: "MIT",
    supportContact: "support@arcadia.com",
    releaseDate: "2025-01-15",
    description: "Comprehensive ERP solution for various business needs.",
    logo: "/assets/logo/arcadia.png",
  });

  const [editableData, setEditableData] = useState({
    systemName: systemData.systemName,
    version: systemData.version,
    industry: systemData.industry,
    description: systemData.description,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEditableData({ ...editableData, [e.target.name]: e.target.value });
  };

  return (
    <>
        <h2 className={styles.mainHeading}>General Settings</h2>
        <div className={styles.sectionContainer}>
        <h3>System Information</h3>
        <div className={styles.detailsGrid}>
            <div className={styles.detailItem}>
            <span className={styles.label}>System ID:</span>
            <span className={styles.value}>{systemData.systemId}</span>
            </div>
            <div className={styles.detailItem}>
            <span className={styles.label}>System Name:</span>
            <input
                type="text"
                name="systemName"
                value={editableData.systemName}
                onChange={handleChange}
                className={styles.input}
            />
            </div>
            <div className={styles.detailItem}>
            <span className={styles.label}>Version:</span>
            <input
                type="text"
                name="version"
                value={editableData.version}
                onChange={handleChange}
                className={styles.input}
            />
            </div>
            <div className={styles.detailItem}>
            <span className={styles.label}>Developer:</span>
            <span className={styles.value}>{systemData.developer}</span>
            </div>
            <div className={styles.detailItem}>
            <span className={styles.label}>Company Name:</span>
            <span className={styles.value}>{systemData.companyName}</span>
            </div>
            <div className={styles.detailItem}>
            <span className={styles.label}>Industry:</span>
            <input
                type="text"
                name="industry"
                value={editableData.industry}
                onChange={handleChange}
                className={styles.input}
            />
            </div>
            <div className={styles.detailItem}>
            <span className={styles.label}>Company Group:</span>
            <span className={styles.value}>{systemData.companyGroup}</span>
            </div>
            <div className={styles.detailItem}>
            <span className={styles.label}>License:</span>
            <span className={styles.value}>{systemData.license}</span>
            </div>
            <div className={styles.detailItem}>
            <span className={styles.label}>Support Contact:</span>
            <span className={styles.value}>{systemData.supportContact}</span>
            </div>
            <div className={styles.detailItem}>
            <span className={styles.label}>Release Date:</span>
            <span className={styles.value}>{systemData.releaseDate}</span>
            </div>
            <div className={styles.detailItem}>
            <span className={styles.label}>Description:</span>
            <input
                type="text"
                name="description"
                value={editableData.description}
                onChange={handleChange}
                className={styles.input}
            />
            </div>
            <div className={styles.logoContainer}>
            <span className={styles.label}>Company Logo:</span>
            <Image src={systemData.logo} alt="Company Logo" width={100} height={100} />
            </div>
        </div>
        </div>
    </>
  );
};

export default SystemDetails;
