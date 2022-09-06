import React, { useState, useEffect } from "react";
import axios from "axios";
import ProductItem from "@components/ProductItem";
import "@styles/ProductsList.scss";

const API = "https://api.escuelajs.co/api/v1/products";

const ProductsList = () => {
  const [products, setProducts] = useState([]);

  const getData = async () => {
    const response = await axios(API);
    setProducts(response.data);
  };

  useEffect(() => {
    getData();
  }, []);

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
