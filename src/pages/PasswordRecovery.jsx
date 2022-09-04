import React from "react";
import "@styles/PasswordRecovery.scss";

import logo from "@logos/logo_yard_sale.svg";

const PasswordRecovery = () => {
  return (
    <div className='password-recovery'>
      <div className='password-recovery-container'>
        <img src={logo} alt='logo' className='logo' />
        <h1 className='title'>Recovery Password</h1>
        <p className='subtitle'>
          Inform the email address used to create your account
        </p>
        <form className='form'>
          <label htmlFor='email' className='label'>
            Email Address
          </label>
          <input
            type='text'
            id='email'
            name='email'
            placeholder='correo@ejemplo.com'
            className='input input-email'
          />
          <input
            type='button'
            value='Confirm'
            className='button button--primary'
          />
        </form>
      </div>
    </div>
  );
};

export default PasswordRecovery;
