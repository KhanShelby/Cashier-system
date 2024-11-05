import React from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css';

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="logo">
        <img src="logo.png" alt="Logo Icon" />
      </div>
      <nav className="nav-menu">
        <a href="#" className="nav-item">
          <img src="home.png" alt="Home Icon" />
          <span>หน้าหลัก/แคชเชียร์</span>
        </a>
        <Link to="/Bill" className="nav-item">
          <img src="Bill.png" alt="Bill Icon" />
          <span>รายการบิล</span>
        </Link>
        <a href="#" className="nav-item">
          <img src="leave.png" alt="Leave Icon" />
          <span>ออกจากระบบ</span>
        </a>
      </nav>
    </div>
  );
}

export default Sidebar;
