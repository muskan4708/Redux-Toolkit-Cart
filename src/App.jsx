import React from "react";
import Navbar from "./assets/components/Navbar";
import ProductCard from "./assets/components/ProductCard";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import CartPage from "./assets/components/cartPage";
const App = () => {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<ProductCard />}></Route>
          <Route exact path="/cart" element={<CartPage />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
