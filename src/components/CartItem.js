import React from "react";
import { HiChevronDown, HiChevronUp } from "react-icons/hi";
import { removeItem, increase, decrease } from "../features/cart/cartSlice";
import { useDispatch } from "react-redux";

const CartItem = ({ id, img, title, price, amount }) => {
  const dispatch = useDispatch();
  return (
    <article className="cart-item">
      <img src={img} alt={title} className="phone-img" />
      <div className="info-container">
        <h4 className="name">{title}</h4>
        <h4 className="price">${price}</h4>
        <button className="btn-remove" onClick={() => dispatch(removeItem(id))}>
          remove
        </button>
      </div>
      <div className="toggle-container">
        <button
          className="btn-amount"
          onClick={() => dispatch(increase({ id }))}
        >
          <HiChevronUp />
        </button>
        <p className="item-amount">{amount}</p>
        <button
          className="btn-amount"
          onClick={() => {
            if (amount === 1) {
              dispatch(removeItem(id));
              return;
            }
            dispatch(decrease({ id }));
          }}
        >
          <HiChevronDown />
        </button>
      </div>
    </article>
  );
};

export default CartItem;
