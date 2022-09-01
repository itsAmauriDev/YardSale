import React from "react";
import "@styles/MyOrders.scss";

const MyOrders = () => {
  return (
    <div className='my-order'>
      <div className='my-order-container'>
        <h1>My orders</h1>
        <div className='mini-card mini-card--total'>
          <div className='total-description'>
            <p className='product-price'>04.25.2021</p>
            <p className='product-name'>6 articles</p>
          </div>
          <p className='product-price'>$ 120.00</p>
          <a href=''>
            <div className='path-icon'></div>
          </a>
        </div>

        <div className='mini-card mini-card--total'>
          <div className='total-description'>
            <p className='product-price'>04.25.2021</p>
            <p className='product-name'>6 articles</p>
          </div>
          <p className='product-price'>$ 120.00</p>
          <a href=''>
            <div className='path-icon'></div>
          </a>
        </div>

        <div className='mini-card mini-card--total'>
          <div className='total-description'>
            <p className='product-price'>04.25.2021</p>
            <p className='product-name'>6 articles</p>
          </div>
          <p className='product-price'>$ 120.00</p>
          <a href=''>
            <div className='path-icon'></div>
          </a>
        </div>

        <div className='mini-card mini-card--total'>
          <div className='total-description'>
            <p className='product-price'>04.25.2021</p>
            <p className='product-name'>6 articles</p>
          </div>
          <p className='product-price'>$ 120.00</p>
          <a href=''>
            <div className='path-icon'></div>
          </a>
        </div>

        <div className='mini-card mini-card--total'>
          <div className='total-description'>
            <p className='product-price'>04.25.2021</p>
            <p className='product-name'>6 articles</p>
          </div>
          <p className='product-price'>$ 120.00</p>
          <a href=''>
            <div className='path-icon'></div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default MyOrders;
