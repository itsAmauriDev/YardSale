import { useState } from "react";

const initialState = {
  cart: [],
  total: 0,
};

const useInitialState = () => {
  const [state, setState] = useState(initialState);

  const addToCart = (payload) => {
    setState({
      ...state,
      cart: [...state.cart, payload],
      total: state.total + payload.price,
    });
  };

  const removeFromCart = (payload, indexValue) => {
    const newArray = state.cart.filter((_, index) => index != indexValue);
    setState({
      ...state,
      cart: [...newArray],
      total: state.total - payload.price,
    });
  };

  return { state, addToCart, removeFromCart };
};

export default useInitialState;
