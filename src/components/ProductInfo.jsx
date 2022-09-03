import React from "react";
import "@styles/ProductInfo.scss";

import retroRefrigerator from "@images/retro-refrigerator.png";

const ProductInfo = () => {
  return (
    <>
      <div className='product-details__image'>
        <figure className='product-image'>
          <img src={retroRefrigerator} alt='Round shelf' />
        </figure>
        <div className='image-indicator'>
          <li className='image-indicator--active'></li>
          <li></li>
          <li></li>
        </div>
      </div>

      <div className='product-details__description'>
        <p className='product-price'>$ 120,00</p>
        <p className='product-name'>Retro refrigerator</p>
        <p className='product-info'>
          With its functional and practical interior, this refrigerator also
          fulfills a decorative function, adding personality and a retro-vintage
          aesthetic to your kitchen or workplace.
        </p>
      </div>
    </>
  );
};

export default ProductInfo;
