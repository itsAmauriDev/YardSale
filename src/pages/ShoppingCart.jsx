import React from "react";
import "@styles/ShoppingCart.scss";

import flechita from "@icons/flechita.svg";
import iconClose from "@icons/icon_close.png";
import roundShelf from "@images/round-shelf.png";

const ShoppingCart = () => {
  return (
    <aside className='shopping-cart-container'>
      <div className='shopping-cart__items'>
        <h3>
          <img src={flechita} alt='flechita atrás' />
          Shopping cart
        </h3>

        <div className='mini-card mini-card--product'>
          <figure className='product-image'>
            <img src={roundShelf} alt='Round shelf' />
          </figure>
          <p className='product-name'>Round shelf</p>
          <p className='product-price'>$ 120,00</p>
          <img src={iconClose} alt='eliminar artículo' />
        </div>

        <div className='mini-card mini-card--product'>
          <figure className='product-image'>
            <img src={roundShelf} alt='Round shelf' />
          </figure>
          <p className='product-name'>Round shelf</p>
          <p className='product-price'>$ 120,00</p>
          <img src={iconClose} alt='icon close' />
        </div>

        <div className='mini-card mini-card--product'>
          <figure className='product-image'>
            <img src={roundShelf} alt='Round shelf' />
          </figure>
          <p className='product-name'>Round shelf</p>
          <p className='product-price'>$ 120,00</p>
          <img src={iconClose} alt='icon close' />
        </div>

        <div className='mini-card mini-card--product'>
          <figure className='product-image'>
            <img src={roundShelf} alt='Round shelf' />
          </figure>
          <p className='product-name'>Round shelf</p>
          <p className='product-price'>$ 120,00</p>
          <img src={iconClose} alt='icon close' />
        </div>

        <div className='mini-card mini-card--product'>
          <figure className='product-image'>
            <img src={roundShelf} alt='Round shelf' />
          </figure>
          <p className='product-name'>Round shelf</p>
          <p className='product-price'>$ 120,00</p>
          <img src={iconClose} alt='icon close' />
        </div>
      </div>

      <div className='shopping-cart__checkout'>
        <div className='mini-card mini-card--total'>
          <p className='product-price'>Total</p>
          <p className='product-price'>$ 560.00</p>
        </div>
        <button className='button button--primary'>Checkout</button>
      </div>
    </aside>
  );
};

export default ShoppingCart;
