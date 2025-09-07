import React, { useState, useEffect } from "react";
import CardList from "./CardList";
import { gamerProducts } from "../../data/Data";

const Cards = () => {
  const [favorites, setFavorites] = useState({});
  const [compares, setCompares] = useState({});

  // LocalStorage dan olish
  useEffect(() => {
    const storedFavorites = JSON.parse(localStorage.getItem("favorites")) || {};
    const storedCompares = JSON.parse(localStorage.getItem("compares")) || {};
    setFavorites(storedFavorites);
    setCompares(storedCompares);
  }, []);

  // LocalStorage ga saqlash
  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [favorites]);

  useEffect(() => {
    localStorage.setItem("compares", JSON.stringify(compares));
  }, [compares]);

  const toggleFavorite = (id) => {
    setFavorites((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const toggleCompare = (id) => {
    setCompares((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const firstHalf = gamerProducts.slice(0, 10);
  const secondHalf = gamerProducts.slice(10);

  return (
    <div className="dark:bg-black py-4">
      <div className="container mx-auto">
        <h1 className="text-3xl font-bold text-gray-800 dark:text-white mb-6 font-strike">
          News
        </h1>

        <CardList
          products={firstHalf}
          favorites={favorites}
          compares={compares}
          toggleFavorite={toggleFavorite}
          toggleCompare={toggleCompare}
        />

        <CardList
          title="Best offers"
          products={secondHalf}
          favorites={favorites}
          compares={compares}
          toggleFavorite={toggleFavorite}
          toggleCompare={toggleCompare}
        />
      </div>
    </div>
  );
};

export default Cards;
