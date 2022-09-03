import React from "react";
import "@styles/ProductsList.scss";

import ProductItem from "@components/ProductItem";

const ProductsList = () => {
  return (
    <section className='main-container'>
      <div className='products-container'>
        <ProductItem />
        <ProductItem />
        <ProductItem />
        <ProductItem />
        <ProductItem />
        <ProductItem />
        <ProductItem />
        <ProductItem />
        <ProductItem />
      </div>
    </section>
  );
};

export default ProductsList;
