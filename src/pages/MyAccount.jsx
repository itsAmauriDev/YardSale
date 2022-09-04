import React from "react";
import "@styles/MyAccount.scss";

const MyAccount = () => {
  return (
    <div className='my-account'>
      <div className='my-account-container'>
        <h1 className='title'>My account</h1>
        <form action='' className='form'>
          <div className='form__info'>
            <label htmlFor='name' className='label'>
              Name
            </label>
            <p className='value'>Camila Yokoo</p>
            <label htmlFor='email' className='label'>
              Email address
            </label>
            <p className='value'>camilayokoo@gmail.com</p>
            <label htmlFor='password' className='label'>
              Password
            </label>
            <p className='value'>************</p>
          </div>
          <input
            type='submit'
            value='Edit'
            className='button button--secondary'
          />
        </form>
      </div>
    </div>
  );
};

export default MyAccount;
