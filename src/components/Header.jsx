import React, { useState, useContext } from "react";
import "@styles/Header.scss";
import MenuMobile from "@components/MenuMobile";
import MenuDesktop from "@components/MenuDesktop";
import ShoppingCart from "@containers/ShoppingCart";
import AppContext from "@context/AppContext";

import logo from "@logos/logo_yard_sale.svg";
import iconMenu from "@icons/icon_menu.svg";
import flechita from "@icons/flechita.svg";
import iconCartEmpty from "@icons/icon_shopping_cart.svg";
import iconCart from "@icons/icon_shopping_cart_notification.svg";

const Header = () => {
  const [toggleMenuMobile, setToggleMenuMobile] = useState(false);
  const [toggleMenuDesktop, setToggleMenuDesktop] = useState(false);
  const [toggleShoppingCart, setToggleShoppingCart] = useState(false);
  const {
    state: { cart },
  } = useContext(AppContext);

  const handleMenuMobile = () => {
    setToggleMenuMobile((prevToggleMenuMobile) => !prevToggleMenuMobile);
  };
  const handleMenuDesktop = () => {
    setToggleMenuDesktop((prevToggleMenuDesktop) => !prevToggleMenuDesktop);
  };
  const handleOrder = () => {
    setToggleShoppingCart((prevToggleShoppingCart) => !prevToggleShoppingCart);
  };

  return (
    <nav className='navbar'>
      <img
        src={iconMenu}
        alt='menu'
        className='menu-icon'
        onClick={handleMenuMobile}
      />
      <div className='navbar__left'>
        <img src={logo} alt='logo' className='navbar__logo' />
        <ul className='navbar__menu'>
          <li>
            <a className='navbar-link' href='/'>
              All
            </a>
          </li>
          <li>
            <a className='navbar-link' href='/'>
              Clothes
            </a>
          </li>
          <li>
            <a className='navbar-link' href='/'>
              Electronics
            </a>
          </li>
          <li>
            <a className='navbar-link' href='/'>
              Furniture
            </a>
          </li>
          <li>
            <a className='navbar-link' href='/'>
              Toys
            </a>
          </li>
          <li>
            <a className='navbar-link' href='/'>
              Others
            </a>
          </li>
        </ul>
      </div>
      <div className='navbar__right'>
        <ul className='navbar__user-account'>
          <li className='user-account' onClick={handleMenuDesktop}>
            <span>camiayokoo@gmail.com</span>
            <img
              className={`flechita ${toggleMenuDesktop && "flechita-down"}`}
              src={flechita}
              alt=''
            />
          </li>
          <li className='shopping-cart' onClick={handleOrder}>
            <img
              src={cart.length > 0 ? iconCart : iconCartEmpty}
              alt='shopping cart icon'
            />
            <div className='cart-counter'>
              {cart.length > 0 ? cart.length : null}
            </div>
          </li>
        </ul>
      </div>
      {toggleMenuMobile && <MenuMobile />}
      {toggleMenuDesktop && <MenuDesktop />}
      {toggleShoppingCart && <ShoppingCart />}
    </nav>
  );
};

export default Header;
