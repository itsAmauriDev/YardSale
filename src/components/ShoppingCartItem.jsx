import React from "react";
import "@styles/ShoppingCartItem.scss";

import iconClose from "@icons/icon_close.png";

const ShoppingCartItem = ({ product: { title, price, images } }) => {
  return (
    <div className='mini-card mini-card--product'>
      <figure className='product-image'>
        <img src={images[0]} alt={title} />
      </figure>
      <p className='product-name'>{title}</p>
      <p className='product-price'>${price}</p>
      <img src={iconClose} alt='icon close' />
    </div>
  );
};

export default ShoppingCartItem;
