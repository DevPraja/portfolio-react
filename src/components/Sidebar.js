import React from "react";
import { Link } from "react-router-dom";
import "./Sidebar.css";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <h2 className="logo">💼 Resollect</h2>
      <ul>
        <li><Link to="/dashboard">📊 Dashboard</Link></li>
        <li><Link to="/portfolio">📁 Portfolio</Link></li>
        <li><Link to="/notifications">🔔 Notifications</Link></li>
        <li><Link to="/notices">📜 Notices</Link></li>
        <li><Link to="/auction">🏦 Auction</Link></li>
        <li><Link to="/data-upload">📂 Data Upload</Link></li>
        <li><Link to="/control-panel">⚙️ Control Panel</Link></li>
        <li><Link to="/user-management">👥 User Management</Link></li>
        <li><Link to="/permissions">🔑 Permissions</Link></li>
      </ul>
    </div>
  );
};

export default Sidebar;
