import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Comparison from "./Pages/Comparison/Comparison";
import Favorites from "./Pages/Favorites/Favorites";
import Basket from "./Pages/Basket/Basket";
import Contact from "./Pages/Contact/Contact";
import Product from "./Pages/Product/Product";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Comparison />} />
        <Route path="/about" element={<Favorites />} />
        <Route path="/contact" element={<Basket />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/contact" element={<Product />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
