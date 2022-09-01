import React from "react";
import "@styles/MenuDesktop.scss";

const MenuDesktop = () => {
  return (
    <div className='menu-desktop'>
      <ul>
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
        <li className='space-bar'></li>
        <li>
          <a className='link-button' href='/'>
            Sign out
          </a>
        </li>
      </ul>
    </div>
  );
};

export default MenuDesktop;
