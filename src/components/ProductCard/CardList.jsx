import React from "react";
import CardItem from "./CardItem";

const CardList = ({ title, products, favorites, compares, toggleFavorite, toggleCompare }) => {
  return (
    <div className="mb-10">
      <h1 className="text-3xl font-bold text-gray-800 dark:text-white mt-8 mb-4 font-strike">
        {title}
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
        {products.map((item) => (
          <CardItem
            key={item.id}
            item={item}
            favorites={favorites}
            compares={compares}
            toggleFavorite={toggleFavorite}
            toggleCompare={toggleCompare}
          />
        ))}
      </div>
    </div>
  );
};

export default CardList;
