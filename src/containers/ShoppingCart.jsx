import React from "react";
import ShoppingCartItem from "@components/ShoppingCartItem";
import OrderCheckout from "@components/OrderCheckout";

import "@styles/ShoppingCart.scss";

import flechita from "@icons/flechita.svg";

const ShoppingCart = () => {
  return (
    <aside className='shopping-cart-container'>
      <div className='shopping-cart__items'>
        <h3>
          <img src={flechita} alt='flechita atrás' />
          Shopping cart
        </h3>

        <ShoppingCartItem />
        <ShoppingCartItem />
        <ShoppingCartItem />
        <ShoppingCartItem />
        <ShoppingCartItem />
      </div>

      <OrderCheckout />
    </aside>
  );
};

export default ShoppingCart;
