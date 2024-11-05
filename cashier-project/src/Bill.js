import React from 'react';
import './Bill.css';

const Bill = () => {
  return (
    <div className="container">
      <h2>รายการขาย</h2>
      <div className="table-container">
        <div className="search">
          <label>
            ค้นหา: <input type="text" />
          </label>
        </div>
        <table>
          <thead>
            <tr>
              <th>No.</th>
              <th>สถานะ</th>
              <th>วันที่ทำรายการ</th>
              <th>แคชเชียร์</th>
              <th>ราคารวม</th>
              <th>เปิดดู</th>
            </tr>
          </thead>
          <tbody>
            {/* Empty rows to be populated from the database */}
          </tbody>
        </table>
      </div>

      <div className="pagination">
        <div>Showing 0 entries</div>
        <div>
          <button>Previous</button>
          <button>1</button>
          <button>Next</button>
        </div>
      </div>

      <div className="total">
        รวมยอดขายทั้งหมด: 0.00 บาท
      </div>
    </div>
  );
};

export default Bill;
