import React from "react";
import { FaStar } from "react-icons/fa";
import { MdOutlineFavoriteBorder, MdOutlineFavorite } from "react-icons/md";
import { IoMdStats } from "react-icons/io";
import { useNavigate } from "react-router-dom";

const CardItem = ({ item, favorites, compares, toggleFavorite, toggleCompare }) => {
  const navigate = useNavigate();

  const handleCardClick = () => {
    navigate(`/product/${item.id}`);
  };

  return (
    <div
      className="bg-white dark:bg-[#111] shadow-lg overflow-hidden group hover: cursor-pointer transition-transform duration-300 flex flex-col relative"
    >
      <div className="relative w-full h-52 bg-gray-200 dark:bg-[#0c0e0fd3]">
        <img
          src={item.image}
          alt={item.title}
          className="w-full h-full object-contain p-4"
          onClick={handleCardClick}
        />

        <div className="absolute top-2 right-2 flex flex-col gap-2">
          <button
            onClick={() => toggleFavorite(item.id)}
            className={`w-10 h-10 rounded-full flex items-center justify-center shadow-md transition ${
              favorites[item.id]
                ? "bg-[#0EA5E9] text-white"
                : "bg-white text-gray-700 dark:bg-[#222] dark:text-white"
            }`}
          >
            {favorites[item.id] ? (
              <MdOutlineFavorite size={22} />
            ) : (
              <MdOutlineFavoriteBorder size={22} />
            )}
          </button>

          <button
            onClick={() => toggleCompare(item.id)}
            className={`w-10 h-10 rounded-full flex items-center justify-center shadow-md transition ${
              compares[item.id]
                ? "bg-[#0EA5E9] text-white"
                : "bg-white text-gray-700 dark:bg-[#222] dark:text-white"
            }`}
          >
            <IoMdStats size={22} />
          </button>
        </div>
      </div>

      <div className="p-4 flex flex-col gap-3 flex-grow">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white line-clamp-2">
          {item.title}
        </h3>

        <div className="flex flex-row-reverse justify-between">
          <span className="font-medium bg-[#0ea4e93d] dark:bg-[#0ea4e983] dark:text-white px-4 text-[#0EA5E9]">
            {item.brand}
          </span>

          <div className="flex items-center gap-1 text-yellow-400">
            {Array.from({ length: 5 }, (_, i) => (
              <FaStar
                key={i}
                size={16}
                className={
                  i < Math.floor(item.rating)
                    ? "fill-yellow-400"
                    : "fill-gray-400"
                }
              />
            ))}
            <span className="text-sm text-gray-600 dark:text-gray-300 ml-2">
              {item.rating}
            </span>
          </div>
        </div>

        <div className="text-xl font-bold text-[#0EA5E9]">${item.price}</div>
        <button className="mt-auto bg-[#0EA5E9] hover:bg-[#0284c7] text-white py-2 px-4 shadow-md transition">
          В корзину
        </button>
      </div>
    </div>
  );
};

export default CardItem;
