import React from "react";
import { useSelector } from "react-redux";
import { HiOutlineShoppingBag } from "react-icons/hi";

const Navbar = () => {
  const { amount } = useSelector((store) => store.cart);

  return (
    <nav className="navbar">
      <div className="nav-center">
        <h2 className="title-logo">redux toolkit</h2>
        <div className="cart-icon-container">
          <HiOutlineShoppingBag className="cart-icon" />
          <div className="amount-container">
            <p className="amount">{amount}</p>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
