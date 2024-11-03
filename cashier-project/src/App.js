import React from 'react';
import Sidebar from './Sidebar';
import Table from './Table';
import Footer from './Footer';
import './Footer.css';
import './style.css';

function App() {
  return (
    <main>
      <h1 className="h1">Cashier System</h1>
      <h2 className="h2">ระบบแคชเชียร์ : กรุณาเลือกโต๊ะก่อนบันทึกรายการอาหาร</h2>
      <Table />
      <Sidebar />
      <Footer />
    </main>
  );
}

export default App;
