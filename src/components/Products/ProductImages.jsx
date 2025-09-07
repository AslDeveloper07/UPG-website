import React from "react";

const ProductImages = ({ images }) => {
  return (
    <div className="w-1/2">
      <img src={images[0]} alt="product" className="rounded-lg w-full" />
      <div className="flex gap-2 mt-3">
        {images.map((img, i) => (
          <img
            key={i}
            src={img}
            alt="thumb"
            className="w-16 h-16 object-cover rounded cursor-pointer"
          />
        ))}
      </div>
    </div>
  );
};

export default ProductImages;
