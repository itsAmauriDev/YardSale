import React, { useRef } from "react";
import "@styles/Login.scss";

import logo from "@logos/logo_yard_sale.svg";

const Login = () => {
  const form = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(form.current);
    const data = {
      email: formData.get("email"),
      password: formData.get("password"),
    };
    console.log(data);
  };

  return (
    <div className='login'>
      <div className='login-container'>
        <img src={logo} alt='logo' className='logo' />
        <form action='' className='form' ref={form}>
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
            onClick={handleSubmit}
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
