import React from "react";
import OrderOverview from "@components/OrderOverview";
import "@styles/MyOrders.scss";

const MyOrders = () => {
  return (
    <div className='my-orders'>
      <div className='my-orders-container'>
        <h1>My orders</h1>

        <OrderOverview />
        <OrderOverview />
        <OrderOverview />
        <OrderOverview />
        <OrderOverview />
      </div>
    </div>
  );
};

export default MyOrders;
