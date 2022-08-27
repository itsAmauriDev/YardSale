import React from "react";
import "../styles/NewPassword.scss";

const NewPassword = () => {
  return (
    <div className='login'>
      <div className='form-container'>
        <img
          src='./assets/logos/logo_yard_sale.svg'
          alt='logo'
          className='logo'
        />
        <h1 className='title'>Create a new password</h1>
        <p className='subtitle'>Enter a new password htmlFor your account</p>
        <form action='' className='form'>
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
          <label htmlFor='repeat-password' className='label'>
            Re-enter password
          </label>
          <input
            type='password'
            name='repeat-password'
            id='repeat-password'
            className='input input-password'
            placeholder='********'
          />
          <input
            type='submit'
            value='Confirm'
            className='button button--primary'
          />
        </form>
      </div>
    </div>
  );
};

export default NewPassword;
