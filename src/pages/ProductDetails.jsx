import React from "react";
import "@styles/ProductDetails.scss";

import retroRefrigerator from "@images/retro-refrigerator.png";
import iconClose from "@icons/icon_close.png";

const ProductDetails = () => {
  return (
    <aside className='product-details-container'>
      <div className='product-details__image'>
        <div className='close-details'>
          <img src={iconClose} alt='close icon' />
        </div>
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

      <div className='product-details__add-to-cart'>
        <button className='button button--primary'>Add to cart</button>
      </div>
    </aside>
  );
};

export default ProductDetails;
