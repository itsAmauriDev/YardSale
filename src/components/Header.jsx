import React from "react";
import "../styles/Header.scss";

const Header = () => {
  return (
    <nav className='navbar'>
      <img src='./assets/icons/icon_menu.svg' alt='menu' className='menu' />
      <div className='navbar__left'>
        <img
          src='./assets/logos/logo_yard_sale.svg'
          alt='logo'
          className='navbar__logo'
        />
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
          <a href=''>
            <li className='user-account'>
              camiayokoo@gmail.com
              <img
                className='flechita'
                src='./assets/icons/flechita.svg'
                alt=''
              />
            </li>
          </a>
          <a href=''>
            <li>
              <img
                src='./assets/icons/icon_shopping_cart_notification.svg'
                alt='shopping cart'
              />
            </li>
          </a>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
