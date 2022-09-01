import React from "react";
import "@styles/Home2.scss";

import roundShelf from "@images/round-shelf.png";
import retroRefrigerator from "@images/retro-refrigerator.png";
import addToCart from "@icons/bt_add_to_cart.svg";

const Home2 = () => {
  return (
    <section className='main-container'>
      <div className='cards-container'>
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

        <div className='card'>
          <figure className='product-image'>
            <img src={retroRefrigerator} alt='Retro refrigerator' />
          </figure>
          <div className='product-description'>
            <div className='product-info'>
              <p className='product-price'>$ 120,00</p>
              <p className='product-name'>Retro refrigerator</p>
            </div>
            <img
              src={addToCart}
              alt='Icon add to cart'
              className='icon-add-to-cart'
            />
          </div>
        </div>

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

        <div className='card'>
          <figure className='product-image'>
            <img src={retroRefrigerator} alt='Retro refrigerator' />
          </figure>
          <div className='product-description'>
            <div className='product-info'>
              <p className='product-price'>$ 120,00</p>
              <p className='product-name'>Retro refrigerator</p>
            </div>
            <img
              src={addToCart}
              alt='Icon add to cart'
              className='icon-add-to-cart'
            />
          </div>
        </div>
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

        <div className='card'>
          <figure className='product-image'>
            <img src={retroRefrigerator} alt='Retro refrigerator' />
          </figure>
          <div className='product-description'>
            <div className='product-info'>
              <p className='product-price'>$ 120,00</p>
              <p className='product-name'>Retro refrigerator</p>
            </div>
            <img
              src={addToCart}
              alt='Icon add to cart'
              className='icon-add-to-cart'
            />
          </div>
        </div>
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

        <div className='card'>
          <figure className='product-image'>
            <img src={retroRefrigerator} alt='Retro refrigerator' />
          </figure>
          <div className='product-description'>
            <div className='product-info'>
              <p className='product-price'>$ 120,00</p>
              <p className='product-name'>Retro refrigerator</p>
            </div>
            <img
              src={addToCart}
              alt='Icon add to cart'
              className='icon-add-to-cart'
            />
          </div>
        </div>
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

        <div className='card'>
          <figure className='product-image'>
            <img src={retroRefrigerator} alt='Retro refrigerator' />
          </figure>
          <div className='product-description'>
            <div className='product-info'>
              <p className='product-price'>$ 120,00</p>
              <p className='product-name'>Retro refrigerator</p>
            </div>
            <img
              src={addToCart}
              alt='Icon add to cart'
              className='icon-add-to-cart'
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home2;
