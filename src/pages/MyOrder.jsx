import React from "react";
import "@styles/MyOrder.scss";

import roundShelf from "@images/round-shelf.png";

const MyOrder = () => {
  return (
    <div className='my-order'>
      <div className='my-order-container'>
        <h1>My order</h1>
        <div className='mini-card mini-card--total'>
          <div className='total-description'>
            <p className='product-price'>04.25.2021</p>
            <p className='product-name'>6 articles</p>
          </div>
          <p className='product-price'>$ 560.00</p>
        </div>

        <div className='mini-card mini-card--product'>
          <figure className='product-image'>
            <img src={roundShelf} alt='Round shelf' />
          </figure>
          <p className='product-name'>Round shelf</p>
          <p className='product-price'>$ 120,00</p>
        </div>

        <div className='mini-card mini-card--product'>
          <figure className='product-image'>
            <img src={roundShelf} alt='Round shelf' />
          </figure>
          <p className='product-name'>Round shelf</p>
          <p className='product-price'>$ 120,00</p>
        </div>

        <div className='mini-card mini-card--product'>
          <figure className='product-image'>
            <img src={roundShelf} alt='Round shelf' />
          </figure>
          <p className='product-name'>Round shelf</p>
          <p className='product-price'>$ 120,00</p>
        </div>

        <div className='mini-card mini-card--product'>
          <figure className='product-image'>
            <img src={roundShelf} alt='Round shelf' />
          </figure>
          <p className='product-name'>Round shelf</p>
          <p className='product-price'>$ 120,00</p>
        </div>

        <div className='mini-card mini-card--product'>
          <figure className='product-image'>
            <img src={roundShelf} alt='Round shelf' />
          </figure>
          <p className='product-name'>Round shelf</p>
          <p className='product-price'>$ 120,00</p>
        </div>

        <div className='mini-card mini-card--product'>
          <figure className='product-image'>
            <img src={roundShelf} alt='Round shelf' />
          </figure>
          <p className='product-name'>Round shelf</p>
          <p className='product-price'>$ 120,00</p>
        </div>
      </div>
    </div>
  );
};

export default MyOrder;
