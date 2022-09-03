import React from "react";
import "@styles/MyOrder.scss";

import OrderItem from "@components/OrderItem";
import OrderOverview from "@components/OrderOverview";
import OrderCheckout from "@components/OrderCheckout";

const MyOrder = () => {
  return (
    <div className='my-order'>
      <div className='my-order-container'>
        <h1>My order</h1>

        <OrderOverview />

        <OrderItem />
        <OrderItem />
        <OrderItem />
        <OrderItem />
        <OrderItem />
        <OrderItem />

        <OrderCheckout />
      </div>
    </div>
  );
};

export default MyOrder;
