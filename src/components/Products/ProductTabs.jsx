import React, { useState } from "react";
import ProductSpecs from "./ProductSpecs";
import ProductDescription from "./ProductDescription";

const ProductTabs = ({ product }) => {
  const [activeTab, setActiveTab] = useState("description");

  return (
    <div className="mt-10 text-white">
      <div className="flex gap-6 border-b border-gray-700 pb-2">
        <button
          onClick={() => setActiveTab("description")}
          className={`${activeTab === "description" ? "text-pink-500" : ""}`}
        >
          Описание
        </button>
        <button
          onClick={() => setActiveTab("specs")}
          className={`${activeTab === "specs" ? "text-pink-500" : ""}`}
        >
          Характеристики
        </button>
      </div>
      {activeTab === "description" ? (
        <ProductDescription description={product.description} />
      ) : (
        <ProductSpecs specs={product.specs} />
      )}
    </div>
  );
};

export default ProductTabs;
