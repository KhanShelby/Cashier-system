import React from 'react';
import './Sidebar.css';
import { Link } from 'react-router-dom';

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="logo">
        <img src="food1.jpg" alt="Logo Icon" className="logo-image" />
      </div>
      <nav className="nav-menu">
        <Link to="/" className="nav-item">
          <img src="home.jpg" alt="Home Icon" className="nav-icon" />
          <span>หน้าหลัก/แคชเชียร์</span>
        </Link>
        <Link to="/bill" className="nav-item">
          <img src="bill.png" alt="Bill Icon" className="nav-icon" />
          <span>รายการบิล</span>
        </Link>
      </nav>
    </div>
  );
}

export default Sidebar;
