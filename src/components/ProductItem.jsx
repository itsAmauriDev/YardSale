import React from "react";
import "@styles/ProductItem.scss";

import roundShelf from "@images/round-shelf.png";
import addToCart from "@icons/bt_add_to_cart.svg";

const ProductItem = () => {
  return (
    <div className='card'>
      <figure className='product-image'>
        <img src={roundShelf} alt='Round shelf' />
      </figure>
      <div className='product-description'>
        <div className='product-info'>
          <p className='product-price'>$ 35,00</p>
          <p className='product-name'>Round shelf</p>
        </div>
        <img
          src={addToCart}
          alt='Icon add to cart'
          className='icon-add-to-cart'
        />
      </div>
    </div>
  );
};

export default ProductItem;
