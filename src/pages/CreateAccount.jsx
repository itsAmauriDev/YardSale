import React from "react";
import "@styles/CreateAccount.scss";

const CreateAccount = () => {
  return (
    <div className='create-account'>
      <div className='create-account-container'>
        <h1 className='title'>My account</h1>
        <form action='' className='form'>
          <div className='form__info'>
            <label htmlFor='name' className='label'>
              Name
            </label>
            <input
              type='text'
              name='name'
              id='password'
              className='input input-name'
              placeholder='Camila Yakoo'
            />
            <label htmlFor='email' className='label'>
              Email address
            </label>
            <input
              type='email'
              name='email'
              id='email'
              className='input input-email'
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
          </div>
          <input
            type='submit'
            value='Create'
            className='button button--primary'
          />
        </form>
      </div>
    </div>
  );
};

export default CreateAccount;
