import React, { useEffect, useState } from "react";
import styles from "./mycard.module.css";
import {
  removeProduct,
  increseByInput,
} from "../../redux/actions/productAction";
import { useSelector, useDispatch } from "react-redux";
import SideBar from "../SideBar/SideBar";

const MyCard = () => {
  const [allProductsWannaBuy, setallProductsWannaBuy] = useState([]);
  const dispatch = useDispatch();

  const products = useSelector((state) => state.choseProducts);

  useEffect(() => {
    setallProductsWannaBuy([...products]);
  }, [products]);

  const render = allProductsWannaBuy.map((pro) => {
    return (
      <div className={styles.product}>
        <div className={styles.image}>
          <img src={pro.image} alt={pro.title} />
        </div>
        <div className={styles.desc}>
          <h3>{pro.title}</h3>
          <div> Price: {pro.price} $</div>
        </div>
        <div className={styles.btn}>
          <p>
            <input
              type="number"
              value={pro.qty}
              placeholder={pro.qty}
              //id for catch product
              onChange={(e) => handelInput(e.target.value, pro.id)}
            />
            {pro.qty}
          </p>
          <button onClick={() => removeFromCard(pro.id)}>Remove</button>
        </div>
      </div>
    );
  });

  const handelInput = (e, id) => {
    const product = allProductsWannaBuy.find((pro) => pro.id === id);
    const qty = e;
    dispatch(increseByInput(product, qty));
  };

  const removeFromCard = (id) => {
    // send all products to redux without a removed product
    const product = allProductsWannaBuy.filter((pro) => id !== pro.id);
    dispatch(removeProduct(product));
  };

  return (
    <div>
      <h3>
        {allProductsWannaBuy.length
          ? "products in my card"
          : "no product in you card"}
      </h3>

      <div className={styles.allProducts}>
        <div>
          <div>{render}</div>
        </div>
        <SideBar />
      </div>
    </div>
  );
};

export default MyCard;
