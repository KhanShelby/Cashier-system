import { useLocation } from 'react-router-dom';
import './Bill.css';
import Sidebar from './Sidebar';

function Bill() {
    const location = useLocation();  // ใช้ useLocation เพื่อดึงข้อมูลจาก state ของ URL
    const { items, total } = location.state || { items: [], total: 0 };

    if (!items || items.length === 0) {
        return <h2>No items found</h2>;
    }

    return (
        <div className="bill-container">
            <div className="bill-header">
                <h2>Receipt</h2>
                <p>Thank you for your purchase!</p>
            </div>
            <div className="bill-content">
                <table className="bill-table">
                    <thead>
                        <tr>
                            <th>Product ID</th>
                            <th>Name</th>
                            <th>Price</th>
                        </tr>
                    </thead>
                    <tbody>
                        {items.map(item => (
                            <tr key={item.id}>
                                <td>{item.id}</td>
                                <td>{item.name}</td>
                                <td>{item.price} Bath</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <div className="bill-footer">
                <h3>Total: {total} Bath</h3>
                <button className="print-button">Print Receipt</button>
            </div>
            <Sidebar />;

        </div>
    );
}

export default Bill;
