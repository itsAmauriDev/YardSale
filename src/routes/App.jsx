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
import MenuDesktop from "@pages/MenuDesktop";
import MenuMobile from "@pages/MenuMobile";
import MyAccount from "@pages/MyAccount";
import MyOrder from "@pages/MyOrder";
import MyOrders from "@pages/MyOrders";
import ProductDetails from "@pages/ProductDetails";
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
          <Route exact path='/CreateAccount' element={<CreateAccount />} />
          <Route exact path='/Home2' element={<Home2 />} />
          <Route exact path='/MenuDesktop' element={<MenuDesktop />} />
          <Route exact path='/MenuMobile' element={<MenuMobile />} />
          <Route exact path='/MyAccount' element={<MyAccount />} />
          <Route exact path='/MyOrder' element={<MyOrder />} />
          <Route exact path='/MyOrders' element={<MyOrders />} />
          <Route exact path='/ProductDetails' element={<ProductDetails />} />
          <Route exact path='/ShoppingCart' element={<ShoppingCart />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
};
