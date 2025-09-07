import React from "react";

const ProductInfo = ({ product }) => {
  return (
    <div className="w-1/2 text-white">
      <h2 className="text-2xl font-bold">{product.title}</h2>
      <p className="text-pink-500 text-xl mt-2">{product.price} USD</p>
      <button className="bg-pink-600 px-4 py-2 mt-4 rounded">
        В Корзину
      </button>
    </div>
  );
};

export default ProductInfo;
