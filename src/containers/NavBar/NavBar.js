import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styles from "./NavBar.module.css";
import { useSelector } from "react-redux";

const NavBar = () => {
  const products = useSelector((state) => state.choseProducts);
  const userFromReduser = useSelector((state) => state.logUser);
  const [userName, setUserName] = useState("");
  useEffect(() => {
    setUserName(userFromReduser.username);
  }, [userFromReduser]);
  console.log(userName);
  const renderList = products.map(({ title, price, qty, id }) => (
    <li className={styles.titleProductInList} key={id}>
      <span>
        {title} {qty > 1 ? `qty:${qty}` : ""}
      </span>
      <span>$ {price}</span>
    </li>
  ));
  useEffect(() => {
    localStorage.setItem("choseProduct", JSON.stringify(products));
  }, [products]);

  const toogle = () => {
    let x = document.getElementById("productsList");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  };

  const toogleNav = () => {
    let x = document.getElementById("perantLinks");
    x.style.display === "none"
      ? (x.style.display = "flex")
      : (x.style.display = "none");
  };
  return (
    <div className={styles.navbar}>
      <ul className={styles.links}>
        <span className={styles.forMobile}>
          {" "}
          <i className="fa fa-bars" onClick={toogleNav}></i>
        </span>
        <div className={styles.perantLinks} id="perantLinks">
          <Link to="/" className={styles.linkForMob}>
            Home
          </Link>
          <Link to="/mycard" className={styles.linkForMob}>
            Cart
          </Link>

          <Link to="/about" className={styles.linkForMob}>
            About
          </Link>
          {userName === undefined ? (
            <Link to="/sign" className={styles.linkForMob}>
              {" "}
              sign in{" "}
            </Link>
          ) : (
            <Link to="/profile" className={styles.linkForMob}>
              {" "}
              {userName}{" "}
            </Link>
          )}
        </div>
        <span className={styles.icon} onClick={toogle}>
          <i
            className="fa fa-shopping-cart fa-1x"
            style={{ fontSize: "25px" }}
          ></i>
          <span className={styles.after}>{products.length}</span>
          <ul id="productsList" className={styles.productsList}>
            {renderList.length !== 0 ? renderList : "no item yet"}
          </ul>
        </span>
      </ul>
    </div>
  );
};

export default NavBar;
