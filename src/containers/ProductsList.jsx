import React from "react";
import ProductItem from "@components/ProductItem";
import useGetProducts from "@hooks/useGetProducts";
import "@styles/ProductsList.scss";

const API = "https://api.escuelajs.co/api/v1/products";

const ProductsList = () => {
  const products = useGetProducts(API);

  return (
    <section className='main-container'>
      <div className='products-container'>
        {products.map((product) => (
          <ProductItem />
        ))}
      </div>
    </section>
  );
};

export default ProductsList;
