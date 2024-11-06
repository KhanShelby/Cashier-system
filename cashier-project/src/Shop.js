import { useEffect, useState } from "react";
import axios from 'axios';
import './Shop.css';

function Item(props) {
    return (
        <div className="item" onClick={() => props.callback(props)}>
            <img src={props.img} alt={props.name} className="item-image" />
            <div className="item-details">
                <h3>{props.name}</h3>
                <p>Price: {props.price} Bath</p>
                <button className="add-to-cart">Add to Cart</button>
            </div>
        </div>
    );
}

export default function Shop({ tableId, updateTableStatus }) {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);
    const [totalprice, setTotalprice] = useState(0);
    const [showPopup, setShowPopup] = useState(false);
    const [amountPaid, setAmountPaid] = useState('');
    const [change, setChange] = useState(0);
    const URL = "http://localhost:3002";

    useEffect(() => {
        axios.get(URL + '/api/products')
            .then(response => setProducts(response.data))
            .catch(error => console.log("error", error));
    }, []);

    // Load cart from local storage when component mounts
    useEffect(() => {
        const savedCart = JSON.parse(localStorage.getItem(`cart_${tableId}`));
        if (savedCart) {
            setCart(savedCart);
        }
    }, [tableId]);

    // Save cart to local storage when cart state changes
    useEffect(() => {
        localStorage.setItem(`cart_${tableId}`, JSON.stringify(cart));
    }, [cart, tableId]);

    function addCart(item) {
        setCart([...cart, { id: item.id, name: item.name, price: item.price, img: item.img }]);
        updateTableStatus(tableId, 'ordering');  // Change table status to 'ordering' and color to orange
    }

    // Calculate total price when cart updates
    useEffect(() => {
        const total = cart.reduce((total, item) => total + item.price, 0);
        setTotalprice(total);
    }, [cart]);

    function handleCheckout() {
        if (cart.length === 0) {
            alert('Your cart is empty!');
        } else {
            setShowPopup(true);
        }
    }

    function handlePayment() {
        const paidAmount = parseFloat(amountPaid);
        if (isNaN(paidAmount) || paidAmount < totalprice) {
            alert('Amount paid is not sufficient!');
        } else {
            const changeAmount = paidAmount - totalprice;
            setChange(changeAmount);
            setShowPopup(false);
            alert(`Payment successful! Change: ${changeAmount} Bath`);
            setCart([]); // Clear the cart
            localStorage.removeItem(`cart_${tableId}`); // Clear local storage for this table's cart
            setAmountPaid(''); // Reset amount paid
            updateTableStatus(tableId, 'paid'); // Change table status to 'paid' and color to green
        }
    }

    return (
        <>
            <div className="grid-container">
                {products.map(item => (
                    <Item key={item.id} {...item} callback={addCart} />
                ))}
            </div>
            <div className="cart-container">
                <h1>Cart</h1>
                <button className="clear-cart" onClick={() => setCart([])}>Clear all</button>
                <ol>
                    {cart.map((item, index) => (
                        <li key={item.id}>
                            {item.name} - {item.price} Bath
                            <button onClick={() => setCart(cart.filter((_, i) => i !== index))}>Delete</button>
                        </li>
                    ))}
                </ol>
                <h2>Total Price: {totalprice} Bath</h2>
                <button className="checkout-button" onClick={handleCheckout}>Pay Now</button>
            </div>

            {showPopup && (
                <div className="popup">
                    <div className="popup-content">
                        <h2>Enter Amount Paid</h2>
                        <input
                            type="number"
                            placeholder="Enter amount"
                            value={amountPaid}
                            onChange={(e) => setAmountPaid(e.target.value)}
                        />
                        <button className="popup-button" onClick={handlePayment}>Submit Payment</button>
                        <button className="popup-button" onClick={() => setShowPopup(false)}>Cancel</button>
                    </div>
                </div>
            )}
        </>
    );
}
