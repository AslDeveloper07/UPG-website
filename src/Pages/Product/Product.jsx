import React from "react";
import { useParams } from "react-router-dom";
import ProductImages from "../../components/Products/ProductImages";
import ProductInfo from "../../components/Products/ProductInfo";
import ProductTabs from "../../components/Products/ProductTabs";
import RelatedProducts from "../../components/Products/RelatedProducts";
import { gamerProducts } from "../../data/Data";

const Product = () => {
  const { id } = useParams();
  const product = gamerProducts.find((item) => item.id === Number(id));

  if (!product) return <p className="text-white">Mahsulot topilmadi</p>;

  return (
    <div className="p-10">
      <div className="flex gap-10">
        <ProductImages images={product.images} />
        <ProductInfo product={product} />
      </div>
      <ProductTabs product={product} />
      <RelatedProducts />
    </div>
  );
};

export default Product;
