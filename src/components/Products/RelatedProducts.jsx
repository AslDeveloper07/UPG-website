import React from "react";
import { gamerProducts } from "../../data/Data";

const RelatedProducts = () => {
  return (
    <div className="mt-10">
      <h3 className="text-xl font-bold text-white mb-4">
        Похожие товары
      </h3>
      <div className="grid grid-cols-5 gap-4">
        {gamerProducts.slice(0, 5).map((item) => (
          <div key={item.id} className="bg-gray-900 p-3 rounded-lg">
            <img src={item.images[0]} alt={item.title} className="rounded" />
            <p className="text-white mt-2">{item.title}</p>
            <p className="text-pink-500">{item.price} USD</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RelatedProducts;
