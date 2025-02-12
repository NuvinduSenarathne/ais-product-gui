"use client";

import React, { useState } from "react";
import Image from "next/image";
import styles from "./../../settings.module.css";

const ColorAndAppearance = () => {
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
        <h3>Colour & Appearance</h3>
        <div className={styles.d}>
          
        </div>
        </div>
    </>
  );
};

export default ColorAndAppearance;
