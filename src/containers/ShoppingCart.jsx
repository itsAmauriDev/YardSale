import React, { useContext } from "react";
import ShoppingCartItem from "@components/ShoppingCartItem";
import OrderCheckout from "@components/OrderCheckout";
import AppContext from "@context/AppContext";

import "@styles/ShoppingCart.scss";

import flechita from "@icons/flechita.svg";

const ShoppingCart = () => {
  const {
    state: { cart },
  } = useContext(AppContext);

  return (
    <aside className='shopping-cart-container'>
      <div className='shopping-cart__items'>
        <h3>
          <img src={flechita} alt='flechita atrás' />
          Shopping cart
        </h3>
        {cart.map((product) => (
          <ShoppingCartItem
            product={product}
            key={`order-item-${product.id}`}
          />
        ))}
      </div>

      <OrderCheckout />
    </aside>
  );
};

export default ShoppingCart;
