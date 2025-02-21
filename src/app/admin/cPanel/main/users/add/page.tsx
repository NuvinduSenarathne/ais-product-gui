"use client";

import styles from "./../../main.module.css";

export default function AddUser() {
  return (
    <div className={styles.addUserContainer}>
      {/* Header Section */}
      <div className={styles.header}>
        <div>
          <h3>Add New User</h3>
          <p className={styles.description}>Fill in the details to add a new user to the system.</p>
        </div>
        <button className={styles.selectButton}>
            <i className={`bi bi-person-fill-add ${styles.inputIcon}`}></i>
            <div>Select from Employees</div>
          </button>
      </div>

      {/* Form Wrapper */}
      <form>
        <div className={styles.rowContainer}>
          <div className={styles.halfWidthContainer}>
            <label className={styles.label}>Room Number</label>
            <input type="text" className={styles.input} placeholder="Enter Room Number" />
            <span className={styles.errorText}></span>
          </div>
          <div className={styles.halfWidthContainer}>
            <label className={styles.label}>Room Type ID</label>
            <input type="number" className={styles.input} placeholder="Enter Room Type ID" />
            <span className={styles.errorText}></span>
          </div>
        </div>
        <div className={styles.rowContainer}>
          <div className={styles.halfWidthContainer}>
            <label className={styles.label}>Floor Number</label>
            <input type="number" className={styles.input} placeholder="Enter Floor Number" />
            <span className={styles.errorText}></span>
          </div>
          <div className={styles.halfWidthContainer}>
            <label className={styles.label}>Building</label>
            <input type="text" className={styles.input} placeholder="Enter Building Name" />
            <span className={styles.errorText}></span>
          </div>
        </div>

        {/* Capacity & Accessibility Section */}
        <div className={styles.rowContainer}>
          <div className={styles.halfWidthContainer}>
            <label className={styles.label}>Max Occupancy</label>
            <input type="number" className={styles.input} placeholder="Enter Max Occupancy" />
            <span className={styles.errorText}></span>
          </div>
          <div className={styles.halfWidthContainer}>
            <label className={styles.label}>Bed Type</label>
            <input type="text" className={styles.input} placeholder="Enter Bed Type" />
            <span className={styles.errorText}></span>
          </div>
        </div>
        <div className={styles.fullWidthContainer}>
          <label className={styles.label}>Room Size (sq meters)</label>
          <input type="number" className={styles.input} placeholder="Enter Room Size" />
          <span className={styles.errorText}></span>
        </div>
        <div className={styles.fullWidthContainer}>
          <label className={styles.label}>Disabled Accessible</label>
          <select className={styles.input}>
            <option value="true">Yes</option>
            <option value="false">No</option>
          </select>
          <span className={styles.errorText}></span>
        </div>

        {/* Status Section */}
        <div className={styles.fullWidthContainer}>
          <label className={styles.label}>Availability Status</label>
          <select className={styles.input}>
            <option value="Available">Available</option>
            <option value="Occupied">Occupied</option>
            <option value="Under Maintenance">Under Maintenance</option>
            <option value="Reserved">Reserved</option>
          </select>
          <span className={styles.errorText}></span>
        </div>
        <div className={styles.fullWidthContainer}>
          <label className={styles.label}>Housekeeping Status</label>
          <select className={styles.input}>
            <option value="dirty">Dirty</option>
            <option value="clean">Clean</option>
            <option value="under_maintenance">Under Maintenance</option>
            <option value="occupied">Occupied</option>
          </select>
          <span className={styles.errorText}></span>
        </div>

        {/* Submit Button */}
        <div className={styles.fullWidthContainer}>
          <button type="submit" className={styles.submitButton}>Add Room</button>
        </div>
      </form>
    </div>
  );
}
