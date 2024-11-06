import { useState, useEffect } from "react";
import './HistoryPage.css';

function HistoryPage() {
    const [purchaseHistory, setPurchaseHistory] = useState([]);

    useEffect(() => {
        const history = JSON.parse(localStorage.getItem('purchaseHistory')) || [];
        setPurchaseHistory(history);
    }, []);

    return (
        <div className="history-container">
            <h1>Purchase History</h1>
            {purchaseHistory.length === 0 ? (
                <p>No purchase history found</p>
            ) : (
                <table className="history-table">
                    <thead>
                        <tr>
                            <th>Date</th>
                            <th>Items</th>
                            <th>Total</th>
                        </tr>
                    </thead>
                    <tbody>
                        {purchaseHistory.map((purchase, index) => (
                            <tr key={index}>
                                <td>{purchase.date}</td>
                                <td>
                                    {purchase.items.map(item => (
                                        <p key={item.id}>{item.name}</p>
                                    ))}
                                </td>
                                <td>{purchase.total} Bath</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}
        </div>
    );
}

export default HistoryPage;
