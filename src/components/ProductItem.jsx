import React, { useContext } from "react";
import "@styles/ProductItem.scss";
import AppContext from "@context/AppContext";

import addToCartIcon from "@icons/bt_add_to_cart.svg";

const ProductItem = ({ product }) => {
  const { addToCart } = useContext(AppContext);

  const handleClick = (item) => {
    addToCart(item);
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
          src={addToCartIcon}
          alt='Icon add to cart'
          className='icon-add-to-cart'
          onClick={() => handleClick(product)}
        />
      </div>
    </div>
  );
};

export default ProductItem;
