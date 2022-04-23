import React from 'react';
import './Order.css';
const Order = (props) => {
    const { orders } = props;
    // console.log(props.orders)
    return (
        <div className='orders'>
            <h1>Order Now</h1>
            <h3>Order Items: {orders.length}</h3>
        </div>
    );
};

export default Order;