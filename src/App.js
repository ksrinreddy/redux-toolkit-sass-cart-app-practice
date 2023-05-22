import React, { useEffect } from "react";
import CartContainer from "./components/CartContainer";
import Navbar from "./components/Navbar";
import Modal from "./components/Modal";

import { calculateTotals, getCartItems } from "./features/cart/cartSlice";
import { useDispatch, useSelector } from "react-redux";

const App = () => {
  const { cartItems, isLoading } = useSelector((store) => store.cart);
  const { isModalOpen } = useSelector((store) => store.modal);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCartItems("random"));
  }, []);

  useEffect(() => {
    dispatch(calculateTotals());
  }, [cartItems]);

  if (isLoading) {
    return (
      <section className="loading-section">
        <h2 className="desc">Loading...</h2>
      </section>
    );
  }
  return (
    <>
      <>
        {isModalOpen && <Modal />}
        <Navbar />
        <CartContainer />
      </>
    </>
  );
};

export default App;
