import React, { useState } from "react";
import "@styles/ProductItem.scss";

import addToCart from "@icons/bt_add_to_cart.svg";

const ProductItem = ({ product }) => {
  const [cart, setCart] = useState([]);

  const handleClick = () => {
    setCart([]);
  };
  return (
    <div className='card'>
      <figure className='product-image'>
        <img src={product.images[0]} alt={product.title} />
      </figure>
      <div className='product-description'>
        <div className='product-info'>
          <p className='product-price'>${product.price} </p>
          <p className='product-name'>{product.title}</p>
        </div>
        <img
          src={addToCart}
          alt='Icon add to cart'
          className='icon-add-to-cart'
          onClick={handleClick}
        />
      </div>
    </div>
  );
};

export default ProductItem;
