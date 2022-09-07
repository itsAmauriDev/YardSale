import React, { useContext } from "react";
import "@styles/ShoppingCartItem.scss";
import AppContext from "@context/AppContext";

import iconClose from "@icons/icon_close.png";

const ShoppingCartItem = ({ product, indexValue }) => {
  const { removeFromCart } = useContext(AppContext);

  return (
    <div className='mini-card mini-card--product'>
      <figure className='product-image'>
        <img src={product.images[0]} alt={product.title} />
      </figure>
      <p className='product-name'>{product.title}</p>
      <p className='product-price'>${product.price}</p>
      <img
        src={iconClose}
        alt='icon close'
        onClick={() => removeFromCart(product, indexValue)}
      />
    </div>
  );
};

export default ShoppingCartItem;
