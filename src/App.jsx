import { Route, Routes } from "react-router-dom";
import Comparison from "./Pages/Comparison/Comparison";
import Favorites from "./Pages/Favorites/Favorites";
import Basket from "./Pages/Basket/Basket";
import Contact from "./Pages/Contact/Contact";
import Product from "./Pages/Product/Product";
import Home from "./Pages/Home/Home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div className="">
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/" element={<Comparison />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="/basket" element={<Basket />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/product" element={<Product />} />
      </Routes>
      <Footer/>
    </div>
  );
};

export default App;
