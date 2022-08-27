import React from "react";
import "./../styles/RecoveryPassword.scss";

const RecoveryPassword = () => {
  return (
    <div className='login'>
      <div className='container'>
        <img
          src='./assets/logos/logo_yard_sale.svg'
          alt='logo'
          className='logo'
        />
        <h1 className='title'>Email has been sent!</h1>
        <p className='subtitle'>
          Please check your inbox for instructions on how to reset the password
        </p>
        <figure className='email-image'>
          <img src='./assets/icons/email.svg' alt='email icon' />
        </figure>
        <button className='button button--primary'>Sign up</button>
        <p className='resend'>
          Didn't receive the email?
          <a href='/' className='link-button'>
            Resend
          </a>
        </p>
      </div>
    </div>
  );
};

export default RecoveryPassword;
