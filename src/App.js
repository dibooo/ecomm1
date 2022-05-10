import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import "./App.css";
import Header from "./containers/Header/Header";
// import ProductComponent from "./containers/ProductComponent";
import ProductDetails from "./containers/ProductDetails/ProductDetails";
import ProductListing from "./containers/ProductListing/ProductListing";
import MyCard from "./containers/MyCard/MyCard";
import SignIn from "./containers/SignIn/SignIn";
import Profile from "./containers/Profile/Profile";
import PageNotFound from "./containers/general components/PageNotFound/PageNotFound";

function App() {
  return (
    <div className="App">
      <Router >
        <Header />
        <Routes>
          <Route path="/" exact element={<ProductListing />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/product/:productId" element={<ProductDetails />} />
          <Route path="/mycard" element={<MyCard />} />
          <Route path="/sign" element={<SignIn />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
