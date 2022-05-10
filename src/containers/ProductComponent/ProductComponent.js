import React, { useEffect, useState } from "react";
import axios from "axios";
import Rating from "react-rating";
import Loading from "../general components/Loading/Loading";
import styles from "./productComponent.module.css";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
  setProducts,
  addProduct,
  increseQty,
} from "../../redux/actions/productAction";

const ProductComponent = () => {
  //products from api all products
  const products = useSelector((state) => state.allProducts.products);

  const choseProductsForFromRedux = useSelector((state) => state.choseProducts);
  const [choseProductsFor, setchoseProductsFor] = useState([]);
  const dispatch = useDispatch();
  //for update sync between redux and state
  useEffect(() => {
    setchoseProductsFor([...choseProductsForFromRedux]);
    console.log("run");
  }, [choseProductsForFromRedux]);
  const cheking = (id) => {
    const cheak = choseProductsFor.find((pro) => pro.id === id) ? true : false;
    return cheak;
  };
  const renderList = products.map((product) => {
    const {
      id,
      title,
      image,
      price,
      category,
      rating: { rate, count },
    } = product;
    return (
      <div className={styles.firstGridInCompo} key={id}>
        <Link to={`/product/${id}`} className={styles.product}>
          <div className={styles.perantImg}>
            <img className={styles.img} src={image} alt={title} />
          </div>
          <div className={styles.infor}>
            <p className={styles.title}>{title}</p>
            <p className={styles.price}>$ {price}</p>
            <p className={styles.category}>{category}</p>
          </div>
        </Link>
        <span>
          <Rating
            initialRating={rate}
            readonly
            style={{ color: "#ffd700" }}
            emptySymbol="fa fa-star-o fa-1x"
            fullSymbol="fa fa-star fa-1x"
          />
          {"  "}
          {count} Reviews
        </span>
        <button className={styles.btn} onClick={() => sendId(id)}>
          {cheking(id) ? "increase quantity" : "Add To Cart"}
        </button>
      </div>
    );
  });
  // for added product or insrese qty
  const sendId = (id) => {
    // for get old products or add new product
    const choseProduct = choseProductsFor.find((pro) => pro.id === id)
      ? choseProductsFor.find((pro) => pro.id === id)
      : products.find((pro) => pro.id === id);

    if (choseProduct === choseProductsFor.find((ele) => ele.id === id)) {
      const qty = choseProduct.qty;
      dispatch(increseQty(choseProduct, qty));
    } else {
      dispatch(addProduct(choseProduct));
    }
  };

  //for fitch all products from api
  const fetchData = async () => {
    await axios
      .get("https://fakestoreapi.com/products")
      .then((res) => dispatch(setProducts(res.data)))
      .catch((err) => console.log("err", err));
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className={styles.grid}>
      {products.length === 0 ? <Loading /> : <>{renderList}</>}
    </div>
  );
};

export default ProductComponent;
