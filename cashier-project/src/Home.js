
import React from 'react';
import Sidebar from './Sidebar';
import Table from './Table';
import Footer from './Footer';
import './Home.css';
import { Link } from 'react-router-dom';

const Home = () => {
  return (

    <main>
         <div className="head">
            <h1>Cashier Systems</h1>
            <h2>กรุณาเลือกโต๊ะก่อนบันทึกรายการอาหาร</h2>
         </div>
         
         <Table />
         <Sidebar />
         <Footer />
    </main>
     
    
  );
};

export default Home;
