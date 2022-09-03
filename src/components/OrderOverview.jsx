import React from "react";
import "@styles/OrderOverview.scss";

const OrderOverview = () => {
  return (
    <div className='mini-card mini-card--total'>
      <div className='total-description'>
        <p className='product-price'>04.25.2021</p>
        <p className='product-name'>6 articles</p>
      </div>
      <p className='product-price'>$ 560.00</p>
    </div>
  );
};

export default OrderOverview;
