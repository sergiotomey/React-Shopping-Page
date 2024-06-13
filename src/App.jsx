import "./App.css";
import Navbar from "./Navbar";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import ProductsPage from "./pages/ProductsPage";
import ShoppingCart from "./pages/ShoppingCart";
import { useState } from "react";

function App() {
  let [cartAmount, setCartAmount] = useState(0);
  let [cartArray, setCartArray] = useState([]);
  let [productAmount, setProductAmount] = useState(0);

  const updateCart = (newValue) => {
    setCartAmount(newValue);
  };

  const updateArray = (newArray) => {
    setCartArray(newArray);
  };

  const updateAmount = (newAmount) => {
    setProductAmount(newAmount);
  };
  return (
    <>
      <Navbar cartAmount={cartAmount} updateCart={updateCart}></Navbar>
      <Routes>
        <Route path="/" element={<Homepage />}></Route>
        <Route
          path="/products"
          element={
            <ProductsPage
              cartArray={cartArray}
              updateArray={updateArray}
              cartAmount={cartAmount}
              updateCart={updateCart}
              productAmount={productAmount}
              updateAmount={updateAmount}
            />
          }
        ></Route>
        <Route
          path="/cart"
          element={
            <ShoppingCart
              cartArray={cartArray}
              updateArray={updateArray}
              cartAmount={cartAmount}
              updateCart={updateCart}
              productAmount={productAmount}
              updateAmount={updateAmount}
            />
          }
        ></Route>
      </Routes>
    </>
  );
}

export default App;
