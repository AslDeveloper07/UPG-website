import { Route, Routes } from "react-router-dom";
import Comparison from "./Pages/Comparison/Comparison";
import Favorites from "./Pages/Favorites/Favorites";
import Basket from "./Pages/Basket/Basket";
import Contact from "./Pages/Contact/Contact";
import Product from "./Pages/Product/Product";
import Home from "./Pages/Home/Home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { useState } from "react";

const App = () => {

  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
<<<<<<< HEAD
    <div className="">
      <Navbar/>
=======
    <div className={darkMode ? "dark scroll-smooth" : " scroll-smooth"}>
      <Navbar />
>>>>>>> ce07941af47be9df25d39ec40d7dc960080e1042
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/" element={<Comparison />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="/basket" element={<Basket />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/product" element={<Product />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
