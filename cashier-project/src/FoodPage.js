// src/pages/FoodPage.js
import React, { useState } from 'react';
import Popup from './Popup';
import './styles.css';
import { useNavigate } from 'react-router-dom';

const foodItems = [
  // ของทอด
  { category: 'ของทอด', name: 'นักเก็ต', price: 25, imgSrc: 'src/img/นักเก็ต.jpg' },
  { category: 'ของทอด', name: 'เอนไก่ทอด', price: 25, imgSrc: 'src/img/เอนไก่ทอด.jpg' },
  { category: 'ของทอด', name: 'เฟรนฟราย', price: 20, imgSrc: 'src/img/เฟรนฟราย.jpg' },
  // เนื้อสัตว์
  { category: 'เนื้อสัตว์', name: 'สันในหมู', price: 20, imgSrc: 'src/img/สันใน.jpg' },
  { category: 'เนื้อสัตว์', name: 'สามชั้นสไลด์', price: 20, imgSrc: 'src/img/สามชั้นสไลด์.jpg' },
  { category: 'เนื้อสัตว์', name: 'หมูเด้ง', price: 20, imgSrc: 'src/img/หมูเด้ง.jpg' },
  { category: 'เนื้อสัตว์', name: 'หมูพริกไทยดำ', price: 25, imgSrc: 'src/img/หมูพริกไทยดำ.jpg' },
  { category: 'เนื้อสัตว์', name: 'หมูบาร์บีคิว', price: 25, imgSrc: 'src/img/หมูบาร์บีคิว.jpg' },
  { category: 'เนื้อสัตว์', name: 'หมูสามชั้นหมักงา', price: 25, imgSrc: 'src/img/หมูสามชั้นหมักงา.jpg' },
  { category: 'เนื้อสัตว์', name: 'ไก่สไลด์', price: 20, imgSrc: 'src/img/ไก่สไลด์.jpg' },
  { category: 'เนื้อสัตว์', name: 'เนื้อสไลด์', price: 25, imgSrc: 'src/img/เนื้อสไลด์.jpg' },
  { category: 'เนื้อสัตว์', name: 'ลิปอาย', price: 30, imgSrc: 'src/img/ลิปอาย.jpg' },
  { category: 'เนื้อสัตว์', name: 'กุ้ง', price: 20, imgSrc: 'src/img/กุ้ง.jpg' },
  { category: 'เนื้อสัตว์', name: 'ลูกชิ้นปลา', price: 10, imgSrc: 'src/img/ลูกชิ้นปลา.jpg' },
  { category: 'เนื้อสัตว์', name: 'ลูกชิ้นหมู', price: 10, imgSrc: 'src/img/ลูกชิ้นหมู.jpg' },
  // ผัก
  { category: 'ผัก', name: 'กะหลํ่าปี', price: 5, imgSrc: 'src/img/กะหลํ่าปี.jpg' },
  { category: 'ผัก', name: 'ผักกาด', price: 5, imgSrc: 'src/img/ผักกาด.jpg' },
  { category: 'ผัก', name: 'ข้าวโพด', price: 5, imgSrc: 'src/img/ข้าวโพด.jpg' },
  { category: 'ผัก', name: 'ผักบุ้ง', price: 5, imgSrc: 'src/img/ผักบุ้ง.jpg' },
];

const FoodPage = () => {
  const [selectedItem, setSelectedItem] = useState(null);
  const [isPopupVisible, setIsPopupVisible] = useState(false);
  const [orderList, setOrderList] = useState([]);

  const handleButtonClick = (item) => {
    setSelectedItem(item);
    setIsPopupVisible(true);
  };

  const closePopup = () => {
    setIsPopupVisible(false);
    setSelectedItem(null);
  };

  const addToOrder = (item, quantity) => {
    const existingOrderIndex = orderList.findIndex(order => order.name === item.name);

  if (existingOrderIndex >= 0) {
    // ถ้า order เดิมมีอยู่แล้ว ให้เพิ่ม quantity และคำนวณราคาใหม่
    const updatedOrderList = [...orderList];
    const existingOrder = updatedOrderList[existingOrderIndex];
    
    existingOrder.quantity += quantity;
    existingOrder.total = existingOrder.price * existingOrder.quantity;
    setOrderList(updatedOrderList);
  } else {
    // ถ้าเป็น order ใหม่ ให้เพิ่มเข้าไปใน list
    const newOrder = { ...item, quantity, total: item.price * quantity };
    setOrderList([...orderList, newOrder]);
  }
    closePopup();
  };

  const totalAmount = orderList.reduce((sum, order) => sum + order.total, 0);

  const navigate = useNavigate();
  const goToCheckBillPage = () => {
    navigate('/CheckBill');
  };

  return (
    <div>
      <div className="main">
        {['ของทอด', 'เนื้อสัตว์', 'ผัก'].map((category) => (
          <div key={category}>
            <b>{category}</b>
            <div className="container">
              {foodItems
                .filter((item) => item.category === category)
                .map((item, index) => (
                  <button
                    key={index}
                    className="button"
                    onClick={() => handleButtonClick(item)}
                  >
                    <img src={item.imgSrc} alt={item.name} />
                    {item.name}
                  </button>
                ))}
            </div>
          </div>
        ))}
      </div>

      <div className="main">
        <div>
        <b style={{ textAlign: 'center', display: 'block', marginBottom: '20px' }}>
          รายการอาหารที่เลือก
        </b>
        <div className="grid-container1">
          <div className="grid-item">#</div>
          <div className="grid-item">ชื่อ</div>
          <div className="grid-item">จำนวน</div>
          <div className="grid-item">ราคา</div>
        </div>
        {orderList.map((order, index) => (
          <div key={index} className="grid-container1 update-grid">
            <div className="grid-item">{index + 1}</div>
            <div className="grid-item">{order.name}</div>
            <div className="grid-item">{order.quantity}</div>
            <div className="grid-item">{order.total} บาท</div>
          </div>
        ))}
        <div className="grid-container2">
          <div className="grid-item">รวม</div>
          <div className="grid-item">{totalAmount} บาท</div>
        </div>
        {/* ปุ่มไปหน้าถัดไป */}
        <button className="checkbillbutton" onClick={goToCheckBillPage}>จัดการออร์เดอร์</button>
        </div>
      </div>

      {isPopupVisible && (
        <Popup item={selectedItem} closePopup={closePopup} addToOrder={addToOrder} />
      )}
      
    
    </div>
  );
};

export default FoodPage;