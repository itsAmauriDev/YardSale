import React from "react";
import "@styles/Login.scss";

import logo from "@logos/logo_yard_sale.svg";

const Login = () => {
  return (
    <div className='login'>
      <div className='login-container'>
        <img src={logo} alt='logo' className='logo' />
        <form action='' className='form'>
          <label htmlFor='email' className='label'>
            Email address
          </label>
          <input
            type='email'
            name='email'
            id='email'
            className='input input-password'
            placeholder='correo@ejemplo.com'
          />
          <label htmlFor='password' className='label'>
            Password
          </label>
          <input
            type='password'
            name='password'
            id='password'
            className='input input-password'
            placeholder='********'
          />
          <input
            type='submit'
            value='Log in'
            className='button button--primary'
          />
        </form>
        <a href='/' className='link-button'>
          Forgot my password
        </a>
        <button className='button button--secondary'>Sign up</button>
      </div>
    </div>
  );
};

export default Login;
