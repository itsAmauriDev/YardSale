import React, { useContext } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "@pages/Home";
import NotFound from "@pages/NotFound";
import Login from "@pages/Login";
import EmailSent from "@pages/EmailSent";
import NewPassword from "@pages/NewPassword";
import CreateAccount from "@pages/CreateAccount";
import MyAccount from "@pages/MyAccount";
import MyOrders from "@pages/MyOrders";
import PasswordRecovery from "@pages/PasswordRecovery";
import Layout from "@containers/Layout";
import ProductDetails from "@containers/ProductDetails";
import ShoppingCart from "@containers/ShoppingCart";
import MyOrder from "@containers/MyOrder";
import AppContext from "@context/AppContext";
import useInitialState from "@hooks/useInitialState";

import "@styles/global.scss";

export const App = () => {
  const initialState = useInitialState();

  return (
    <AppContext.Provider value={initialState}>
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
            <Route exact path='/my-orders' element={<MyOrders />} />
            <Route exact path='/product' element={<ProductDetails />} />
            <Route exact path='/cart' element={<ShoppingCart />} />
            <Route exact path='/order' element={<MyOrder />} />
            <Route path='*' element={<NotFound />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </AppContext.Provider>
  );
};
