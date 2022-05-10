import React, { useState } from "react";
import { useDispatch } from "react-redux";
// import ProductListing from "../ProductListing/ProductListing";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { SetUserInformationByLogIn } from "../../redux/actions/productAction";

const SignIn = () => {
  const dispatch = useDispatch();
  const [userValue, setuserValue] = useState({
    username: "johnd",
    password: "m38rmF$",
  });
  const navegate = useNavigate();
  const handelsubmit = async (e) => {
    e.preventDefault();
    axios
      .get("https://fakestoreapi.com/users/1")
      .then((res) => {
        dispatch(SetUserInformationByLogIn(res.data));
        navegate("/");
      })
      .catch((err) => console.log(err));

    // axios
    //   .post("http://fakestoreapi.com/auth/login", {
    //     body: JSON.stringify({
    //       // username: userValue.username,
    //       // password: userValue.password,
    //       username: "johnd",
    //       password: "m38rmF$",
    //     }),
    //   })
    //   .then((res) => console.log(res.data))
    //   .catch((err) => console.log(err));
  };

  return (
    <div>
      <form onSubmit={handelsubmit}>
        <label>
          User Name:
          <input
            type="text"
            value={userValue.username}
            onChange={(e) =>
              setuserValue({ ...userValue, username: e.target.value })
            }
          />
        </label>
        <label>
          Password:
          <input
            type="password"
            value={userValue.password}
            onChange={(e) =>
              setuserValue({ ...userValue, password: e.target.value })
            }
          />
        </label>
        <button type="submit"> login </button>
      </form>
    </div>
  );
};

export default SignIn;
