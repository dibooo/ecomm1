import React from "react";
import styles from "./Header.module.css";
import NavBar from "../NavBar/NavBar";

const Header = () => {
  return (
    <div className={styles.grid}>
      <h2>Fake Shop</h2>
      <NavBar />
    </div>
  );
};

export default Header;
