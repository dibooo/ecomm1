import React from "react";
import axios from "axios";
import { useSelector } from "react-redux";

const BtnToBuy = () => {
  const products = useSelector((state) => state.choseProducts);
  const handelClick = () => {
    const dataToBackend = products.map(({ id, qty }) => {
      return { productId: id, quantity: qty };
    });
    axios
      .post("https://fakestoreapi.com/carts", {
        body: JSON.stringify({
          userId: 5,
          date: Date,
          products: dataToBackend,
        }),
      })
      .then((res) => console.log(res.data))
      .catch((err) => console.log(err));
  };
  return (
    <div>
      <button onClick={handelClick}>Click to get invoice id</button>
    </div>
  );
};

export default BtnToBuy;
