import React from "react";
import "@styles/MenuMobile.scss";

const MenuMobile = () => {
  return (
    <div className='menu'>
      <div className='close-menu'>X</div>
      <ul className='menu__categories'>
        <li>
          <a className='link-button link-button--bold' href=''>
            CATEGORIES
          </a>
        </li>
        <li>
          <a className='link-button link-button--bold' href=''>
            All
          </a>
        </li>
        <li>
          <a className='link-button link-button--bold' href=''>
            Clothes
          </a>
        </li>
        <li>
          <a className='link-button link-button--bold' href=''>
            Electronics
          </a>
        </li>
        <li>
          <a className='link-button link-button--bold' href=''>
            Furniture
          </a>
        </li>
        <li>
          <a className='link-button link-button--bold' href=''>
            Toys
          </a>
        </li>
        <li>
          <a className='link-button link-button--bold' href=''>
            Others
          </a>
        </li>
        <li>
          <div className='space-bar'></div>
        </li>
        <ul className='menu__user-account'>
          <li>
            <a href='/' className='link-button link-button--bold'>
              My orders
            </a>
          </li>
          <li>
            <a href='/' className='link-button link-button--bold'>
              My account
            </a>
          </li>
        </ul>
      </ul>
      <ul className='menu__email'>
        <p>camilayokoo@gmail.com</p>
        <p>
          <a className='link-button' href=''>
            Sign out
          </a>
        </p>
      </ul>
    </div>
  );
};

export default MenuMobile;
