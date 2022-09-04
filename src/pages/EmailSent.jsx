import React from "react";
import "@styles/EmailSent.scss";

import logo from "@logos/logo_yard_sale.svg";
import emailIcon from "@icons/email.svg";

const RecoveryPassword = () => {
  return (
    <div className='email-sent'>
      <div className='email-sent-container'>
        <img src={logo} alt='logo' className='logo' />
        <h1 className='title'>Email has been sent!</h1>
        <p className='subtitle'>
          Please check your inbox for instructions on how to reset the password
        </p>
        <figure className='email-image'>
          <img src={emailIcon} alt='email icon' />
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
