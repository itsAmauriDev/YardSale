import React from "react";
import "@styles/OrderItem.scss";

import roundShelf from "@images/round-shelf.png";

const OrderItem = () => {
  return (
    <div className='mini-card mini-card--product'>
      <figure className='product-image'>
        <img src={roundShelf} alt='Round shelf' />
      </figure>
      <p className='product-name'>Round shelf</p>
      <p className='product-price'>$ 120,00</p>
    </div>
  );
};

export default OrderItem;
