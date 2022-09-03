import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "@pages/Home";
import NotFound from "@pages/NotFound";
import Layout from "@containers/Layout";
import Login from "@containers/Login";
import RecoveryPassword from "@containers/RecoveryPassword";
import NewPassword from "@containers/NewPassword";

import CreateAccount from "@pages/CreateAccount";
import Home2 from "@pages/Home2";
import MyAccount from "@pages/MyAccount";
import MyOrders from "@pages/MyOrders";
import ShoppingCart from "@pages/ShoppingCart";

import "@styles/global.scss";
import ProductDetails from "../containers/ProductDetails";

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
          <Route exact path='/CreateAccount' element={<CreateAccount />} />
          <Route exact path='/Home2' element={<Home2 />} />
          <Route exact path='/MyAccount' element={<MyAccount />} />
          <Route exact path='/MyOrders' element={<MyOrders />} />
          <Route exact path='/ShoppingCart' element={<ShoppingCart />} />
          <Route exact path='/Product' element={<ProductDetails />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
};
