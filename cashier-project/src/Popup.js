// src/pages/Popup.js
import React, { useState } from 'react';
import './styles.css';

const Popup = ({ item, closePopup, addToOrder }) => {
  const [quantity, setQuantity] = useState(1); // กำหนดค่าเริ่มต้นของจำนวนสินค้าเป็น 1

  const handleQuantityChange = (e) => {
    const value = parseInt(e.target.value) || 1;
    setQuantity(value);
  };

  // คำนวณราคารวม
  const totalPrice = item.price * quantity;

  return (
    <div>
      <div className="overlay" onClick={closePopup}></div>
      <div className="popup">
        <span className="close" onClick={closePopup}>&times;</span>
        <h1 style={{ marginBottom: '15px' }}>เลือกสินค้า</h1>
        <div className="itemproduct">
          <p className="itemText">ชื่อ: {item.name}</p>
          <p className="priceText">ราคาจานละ: {item.price} บาท</p>
        </div>
        <div className="count_itemproduct">
          <label htmlFor="count">จำนวน (จาน):</label>
          <input type="number" min="1" value={quantity} onChange={handleQuantityChange}/>
          <label htmlFor="summary">ราคารวม (บาท):</label>
          <p className="sum">{totalPrice} บาท</p>
        </div>
        <div className="form-buttons">
          <p>พนักงานนาย A </p>
          <input type="button" value="ยกเลิก" onClick={closePopup} />
          <input
            type="button" value="สั่งอาหาร" onClick={() => addToOrder(item, quantity)}/>
        </div>
      </div>
    </div>
  );
};

export default Popup;