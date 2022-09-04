import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "@pages/Home";
import NotFound from "@pages/NotFound";
import Layout from "@containers/Layout";
import Login from "@pages/Login";
import EmailSent from "@pages/EmailSent";
import NewPassword from "@pages/NewPassword";
import CreateAccount from "@pages/CreateAccount";
import MyAccount from "@pages/MyAccount";
import MyOrders from "@pages/MyOrders";
import PasswordRecovery from "@pages/PasswordRecovery";
import ShoppingCart from "@pages/ShoppingCart";

import "@styles/global.scss";

export const App = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route exact path='/login' element={<Login />} />
          <Route
            exact
            path='/password-recovery'
            element={<PasswordRecovery />}
          />
          <Route exact path='/email-sent' element={<EmailSent />} />
          <Route exact path='/new-password' element={<NewPassword />} />
          <Route exact path='/create-account' element={<CreateAccount />} />
          <Route exact path='/account' element={<MyAccount />} />
          <Route exact path='/MyOrders' element={<MyOrders />} />
          <Route exact path='/ShoppingCart' element={<ShoppingCart />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
};
