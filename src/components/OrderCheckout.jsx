import React from "react";
import "@styles/OrderCheckout.scss";

const OrderCheckout = ({ sum }) => {
  return (
    <div className='order-checkout'>
      <div className='mini-card mini-card--total'>
        <p className='product-price'>Total</p>
        <p className='product-price'>$ {sum}</p>
      </div>
      <div>
        <button className='button button--primary'>Checkout</button>
      </div>
    </div>
  );
};

export default OrderCheckout;
