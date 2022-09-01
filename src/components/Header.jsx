import React from "react";
import "@styles/Header.scss";

import logo from "@logos/logo_yard_sale.svg";
import iconMenu from "@icons/icon_menu.svg";
import flechita from "@icons/flechita.svg";
import iconShoppingCart from "@icons/icon_shopping_cart_notification.svg";

const Header = () => {
  return (
    <nav className='navbar'>
      <img src={iconMenu} alt='menu' className='menu' />
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
          <li className='user-account'>
            <a href=''>
              <span>camiayokoo@gmail.com</span>
              <img className='flechita' src={flechita} alt='' />
            </a>
          </li>
          <li>
            <a href=''>
              <img src={iconShoppingCart} alt='shopping cart' />
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
