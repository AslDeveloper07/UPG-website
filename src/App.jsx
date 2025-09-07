import { Route, Routes } from "react-router-dom";
import Comparison from "./Pages/Comparison/Comparison";
import Favorites from "./Pages/Favorites/Favorites";
import Basket from "./Pages/Basket/Basket";
import Contact from "./Pages/Contact/Contact";
import Product from "./Pages/Product/Product";
import Home from "./Pages/Home/Home";
import Footer from "./components/Footer/Footer";
import { useState } from "react";
import Navbar from "./components/Navbar/Navbar";

const App = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={darkMode ? "dark scroll-smooth" : "scroll-smooth"}>
      <Navbar toggleDarkMode={toggleDarkMode} />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/comparison" element={<Comparison />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="/cart" element={<Basket />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/product" element={<Product />} />
      </Routes>

      <Footer />
    </div>
  );
};

export default App;
