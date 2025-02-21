"use client";

import React, { useState } from "react";
import styles from "../../main.module.css";
import Image from "next/image";


export default function AttendanceOverview() {

  const [searchTerm, setSearchTerm] = useState("");
    const [selectedRows, setSelectedRows] = useState<number[]>([]);
    const [sortColumn, setSortColumn] = useState<string | null>(null);
    const [sortOrder, setSortOrder] = useState<"asc" | "desc">("asc");
  
    const data = [
      { id: 1, name: "Darrell Robertson", position: "CEO", exp: 6 },
      { id: 2, name: "Zack Russell", position: "Head of SMM", exp: 5 },
      { id: 3, name: "Diane Webb", position: "Head of SEO", exp: 4 },
      { id: 4, name: "Darlene Cooper", position: "PM", exp: 3 },
      { id: 5, name: "Esther Edwards", position: "PPC", exp: 3 },
    ];
  
    const handleSort = (column: string) => {
      setSortOrder((prev) => (sortColumn === column && prev === "asc" ? "desc" : "asc"));
      setSortColumn(column);
    };
  
    const sortedData = [...data].sort((a, b) => {
      if (!sortColumn) return 0;
  
      const valueA = a[sortColumn as keyof typeof a];
      const valueB = b[sortColumn as keyof typeof b];
  
      if (typeof valueA === "string" && typeof valueB === "string") {
        return sortOrder === "asc" ? valueA.localeCompare(valueB) : valueB.localeCompare(valueA);
      } else if (typeof valueA === "number" && typeof valueB === "number") {
        return sortOrder === "asc" ? valueA - valueB : valueB - valueA;
      }
  
      return 0;
    });
  
    const handleSelectRow = (id: number) => {
      setSelectedRows((prev) =>
        prev.includes(id) ? prev.filter((row) => row !== id) : [...prev, id]
      );
    };
  
    const handleSelectAll = () => {
      if (selectedRows.length === data.length) {
        setSelectedRows([]);
      } else {
        setSelectedRows(data.map((item) => item.id));
      }
    };
  
    const isAllSelected = selectedRows.length === data.length;
    const hasSelection = selectedRows.length > 0;

  return (
      <div>
        <h3 className={styles.pageTitle}>Attendance Overview</h3>
        <div className={styles.listViewBtnHolder}>
        <div className={styles.start}>
          <button className={styles.btnType1}>
            <div className={styles.btnLogoContainer}>
              <Image src="/assets/icon/upload.png" alt="icon" fill />
            </div>
            <div>Export</div>
          </button>
          <button className={styles.btnType1}>
            <div className={styles.btnLogoContainer}>
              <Image src="/assets/icon/download.png" alt="icon" fill />
            </div>
            <div>Upload</div>
          </button>
          {hasSelection && (
            <button className={styles.btnType2}>
              <div className={styles.btnLogoContainer}>
                <Image src="/assets/icon/delete.png" alt="icon" fill />
              </div>
              <div>Delete</div>
            </button>
          )}
        </div>
        <div className={styles.end}>
          <button className={styles.btnType1}>
            <div className={styles.btnLogoContainer}>
              <Image src="/assets/icon/filter.png" alt="icon" fill />
            </div>
            <div>Filter</div>
          </button>
          <div className={styles.searchContainer}>
            <div className={styles.searchIcon}>
              <Image src="/assets/icon/search.png" alt="Search" width={20} height={20} />
            </div>
            <input
              type="text"
              placeholder="Search here"
              className={styles.searchInput}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <button className={styles.btnType3}>
            <div className={styles.btnLogoContainer}>
              <Image src="/assets/icon/addnew.png" alt="icon" fill />
            </div>
            <div>Add New</div>
          </button>
        </div>
      </div>
      <div className={styles.tableContainer}>
      <table className={styles.table}>
        <thead>
            <tr>
                <th>
                    <input type="checkbox" checked={isAllSelected} onChange={handleSelectAll} />
                </th>
                <th onClick={() => handleSort("name")} className={styles.sortableHeader}>
                    <div className={styles.sortableHeaderContext}>
                        {sortColumn === "name" && (
                            <div className={styles.sortIconWrapper}>
                                <Image
                                src={sortOrder === "asc" ? "/assets/icon/sort-asc.png" : "/assets/icon/sort-desc.png"}
                                alt="Sort Icon"
                                fill
                                />
                            </div>
                        )}
                        <span>Full Name</span>
                    </div>
                </th>
                <th onClick={() => handleSort("position")} className={styles.sortableHeader}>
                    <div className={styles.sortableHeaderContext}>
                        {sortColumn === "position" && (
                            <div className={styles.sortIconWrapper}>
                                <Image
                                src={sortOrder === "asc" ? "/assets/icon/sort-asc.png" : "/assets/icon/sort-desc.png"}
                                alt="Sort Icon"
                                width={16}
                                height={16}
                                />
                            </div>
                        )}
                        <span>Position</span>
                    </div>
                </th>
                <th onClick={() => handleSort("exp")} className={styles.sortableHeader}>
                    <div className={styles.sortableHeaderContext}>
                        {sortColumn === "exp" && (
                            <div className={styles.sortIconWrapper}>
                                <Image
                                src={sortOrder === "asc" ? "/assets/icon/sort-asc.png" : "/assets/icon/sort-desc.png"}
                                alt="Sort Icon"
                                width={16}
                                height={16}
                                />
                            </div>
                        )}
                        <span>Experience</span>
                    </div>
                </th>
            </tr>
        </thead>
        <tbody>

            {sortedData
              .filter((item) => item.name.toLowerCase().includes(searchTerm.toLowerCase()))
              .map((item) => (
                <tr key={item.id}>
                  <td>
                    <input
                      type="checkbox"
                      checked={selectedRows.includes(item.id)}
                      onChange={() => handleSelectRow(item.id)}
                    />
                  </td>
                  <td>{item.name}</td>
                  <td>{item.position}</td>
                  <td>{item.exp} Years</td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
      </div>
  );
}
