import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "@pages/Home";
import NotFound from "@pages/NotFound";
import Layout from "@containers/Layout";
import Login from "@pages/Login";
import RecoveryPassword from "@pages/RecoveryPassword";
import NewPassword from "@pages/NewPassword";

import CreateAccount from "@pages/CreateAccount";
import ProductsList from "@containers/ProductsList";
import MyAccount from "@pages/MyAccount";
import MyOrders from "@pages/MyOrders";
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
            path='/recovery-password'
            element={<RecoveryPassword />}
          />
          <Route exact path='/new-password' element={<NewPassword />} />
          <Route exact path='/create-account' element={<CreateAccount />} />
          <Route exact path='/Product' element={<ProductsList />} />
          <Route exact path='/MyAccount' element={<MyAccount />} />
          <Route exact path='/MyOrders' element={<MyOrders />} />
          <Route exact path='/ShoppingCart' element={<ShoppingCart />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
};
