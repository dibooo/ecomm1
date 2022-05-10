import React from "react";
import styles from "./sidebar.module.css";
import { useSelector } from "react-redux";
import BtnToBuy from "../BtnToBuy/BtnToBuy";

const SideBar = () => {
  const products = useSelector((state) => state.choseProducts);
  const title = products.map(({ title, price, qty }) => {
    return (
      <li className={styles.row}>
        <span>
          {title} <br /> qty: {qty}
        </span>
        <span className={styles.price}>{price} $</span>
      </li>
    );
  });

  const sum = products.map(({ price, qty }) => {
    const allPrice = price * qty;

    return allPrice;
  });

  const totalPrice = () => {
    const suming = sum.reduce((a, b) => a + b, 0);
    return suming;
  };

  return (
    <div className={products.length !== 0 ? styles.container : styles.none}>
      <ul className={styles.ul}>{title}</ul>
      <span>
        totalPrice: {totalPrice()} $ <BtnToBuy />
      </span>
    </div>
  );
};

export default SideBar;
