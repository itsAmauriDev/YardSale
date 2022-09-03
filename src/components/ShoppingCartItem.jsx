import React from "react";
import "@styles/ShoppingCartItem.scss";

const ShoppingCartItem = () => {
  return (
    <div className='mini-card mini-card--product'>
      <figure className='product-image'>
        <img src={roundShelf} alt='Round shelf' />
      </figure>
      <p className='product-name'>Round shelf</p>
      <p className='product-price'>$ 120,00</p>
      <img src={iconClose} alt='icon close' />
    </div>
  );
};

export default ShoppingCartItem;