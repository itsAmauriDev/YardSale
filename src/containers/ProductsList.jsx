import React from "react";
import ProductItem from "@components/ProductItem";
import useGetProducts from "@hooks/useGetProducts";
import "@styles/ProductsList.scss";

const API = "https://api.escuelajs.co/api/v1/products";

const ProductsList = () => {
  const { products, loading } = useGetProducts(API);

  return (
    <section className='main-container'>
      {loading && (
        <div className='loading'>
          <div className='loading-dot'></div>
          <div className='loading-dot'></div>
          <div className='loading-dot'></div>
        </div>
      )}
      <div className='products-container'>
        {products.map((product) => (
          <ProductItem product={product} key={product.id} />
        ))}
      </div>
    </section>
  );
};

export default ProductsList;
