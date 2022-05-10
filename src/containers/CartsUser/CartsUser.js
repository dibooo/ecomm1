import axios from "axios";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const CartsUser = () => {
  const userIdFromRedux = useSelector((state) => state.logUser.id);
  const products = useSelector((state) => state.allProducts.products);
  const [carts, setCarts] = useState([]);
  const [productsFromSrver, setproductsFromSrver] = useState([]);
  useEffect(() => {
    setproductsFromSrver(products);
  }, []);
  console.log(carts);
  const fetchData = async (userIdFromRedux) => {
    await axios
      .get(`https://fakestoreapi.com/carts/user/${userIdFromRedux}`)
      .then((res) => setCarts(res.data))
      .catch((err) => console.log(err));
  };
  useEffect(() => {
    fetchData(userIdFromRedux);
  }, [userIdFromRedux]);

  //   let idBeforFetchArray = [];
  //   const GetIdForFetch = async (carts) => {
  //     carts.map(({ products }) => {
  //       products.map(({ productId }) => {
  //         idBeforFetchArray.push(productId);
  //         return (idBeforFetchArray = [...new Set(idBeforFetchArray)]);
  //       });
  //     });
  //     for (let i = 0; i < idBeforFetchArray.length; i++) {
  //       await axios
  //         .get(`https://fakestoreapi.com/products/${idBeforFetchArray[i]}`)
  //         .then((res) =>
  //           setproductsFromSrver((prevState) => [...prevState, res.data])
  //         )
  //         .catch((err) => console.log(err));
  //     }
  //   };

  //   useEffect(() => {
  //     GetIdForFetch(carts);
  //     console.log(productsFromSrver);
  //   }, [carts]);
  //   console.log(idBeforFetchArray);
  //   const fetchDataById = async () => {
  //     setproductsFromSrver([]);
  //     for (let i = 0; i < idBeforFetchArray.length; i++) {
  //       await axios
  //         .get(`https://fakestoreapi.com/products/${idBeforFetchArray[i]}`)
  //         .then((res) => setproductsFromSrver([...productsFromSrver, res.data]))
  //         .catch((err) => console.log(err));
  //     }
  //   };

  const handelCartsView = carts.map(({ date, products }) => {
    // console.log(carts);
    return (
      <div>
        <p>{date}</p>
        <p>
          {products.map((pro) => {
            const product = productsFromSrver.find(
              (fin) => fin.id === pro.productId
            );

            return (
              <li>
                {product.title}
                <br /> qty:{pro.quantity}
              </li>
            );
          })}
        </p>
      </div>
    );
  });

  return (
    <div>
      <div>
        {" "}
        <p>All Cards</p>
        {handelCartsView}
      </div>
    </div>
  );
};

export default CartsUser;
