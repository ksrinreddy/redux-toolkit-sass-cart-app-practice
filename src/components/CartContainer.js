import React from "react";
import { useDispatch, useSelector } from "react-redux";
import CartItem from "./CartItem";
import { openModal } from "../features/modal/modalSlice";

const CartContainer = () => {
  const { isLoading, cartItems, total, amount } = useSelector(
    (store) => store.cart
  );
  //   console.log(cartItems);
  const dispatch = useDispatch();

  if (amount < 1) {
    return (
      <section className="cart-container">
        <header className="header">
          <h1 className="title">your bag</h1>
          <p className="desc">is currently empty</p>
        </header>
      </section>
    );
  }
  return (
    <section className="cart-container">
      <header className="header">
        <h1 className="title">your bag</h1>
      </header>
      <div className="cart-list">
        {cartItems.map((item) => {
          return <CartItem key={item.id} {...item} />;
        })}
      </div>
      <footer className="cart-footer">
        <hr className="hr-line" />
        <div className="info">
          <h4 className="total-text">total</h4>
          <h4 className="total-amount">${total}</h4>
        </div>
        <button className="btn-clear" onClick={() => dispatch(openModal())}>
          clear cart
        </button>
      </footer>
    </section>
  );
};

export default CartContainer;
