import React from "react";
import "@styles/ProductDetails.scss";

import iconClose from "@icons/icon_close.png";
import ProductInfo from "@components/ProductInfo";

const ProductDetails = () => {
  return (
    <aside className='product-details-container'>
      <div className='close-details'>
        <img src={iconClose} alt='close icon' />
      </div>

      <ProductInfo />

      <div className='product-details__add-to-cart'>
        <button className='button button--primary'>Add to cart</button>
      </div>
    </aside>
  );
};

export default ProductDetails;
