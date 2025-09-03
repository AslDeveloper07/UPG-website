import React from "react";
import { FaStar } from "react-icons/fa";

const Cards = () => {
  const gamerProducts = [
    {
      id: 1,
      title: "Gaming Laptop ASUS ROG Strix G15",
      brand: "ASUS",
      price: 1499,
      rating: 4.8,
      image:
        "https://files.ox-sys.com/cache/500x_/image/dd/13/2c/dd132cbf69449eb24ac58383c5dbf04522cbc59b4c6c9dd77156f76beabebce1.png",
    },
    {
      id: 2,
      title: "Gaming Mouse Logitech G502 HERO",
      brand: "Logitech",
      price: 59,
      rating: 4.7,
      image:
        "https://files.ox-sys.com/cache/500x_/image/3f/05/ce/3f05ced14676e10303cd5e4b22fbb8d71c976d9dd9a054b10b7dde73766e96e2.png",
    },
    {
      id: 3,
      title: "Mechanical Keyboard SteelSeries Apex Pro",
      brand: "SteelSeries",
      price: 179,
      rating: 4.9,
      image:
        "https://files.ox-sys.com/cache/500x_/image/41/f3/87/41f387606e8d5787995b7c5c37ab03fe7b9665ac9112329b9078237e0cfb5b79.png",
    },
    {
      id: 4,
      title: "Gaming Monitor MSI Optix MAG274QRF-QD",
      brand: "MSI",
      price: 399,
      rating: 4.6,
      image:
        "https://files.ox-sys.com/cache/500x_/image/e8/a1/c0/e8a1c07168c3333d3b34a0ecff5ddcc6e6952b5bb02f27aff46567e6686c39dd.png",
    },
    {
      id: 5,
      title: "HyperX Cloud II Gaming Headset",
      brand: "HyperX",
      price: 99,
      rating: 4.8,
      image:
        "https://files.ox-sys.com/cache/500x_/image/4a/93/16/4a9316abe9e32e994d04fcba5e3e8a0bb6bfd51e08b6521ff5aaf6fc94dac8d7.png",
    },
    {
      id: 6,
      title: "Razer BlackShark V2 Pro Wireless Headset",
      brand: "Razer",
      price: 129,
      rating: 4.5,
      image:
        "https://files.ox-sys.com/cache/500x_/image/c3/ff/b3/c3ffb3231c86198e5211350a89d9378586a9dc27e70e80bdcf17181e69ad4373.png",
    },
    {
      id: 7,
      title: "Elgato Stream Deck MK.2",
      brand: "Elgato",
      price: 149,
      rating: 4.7,
      image:
        "https://files.ox-sys.com/cache/500x_/image/b1/95/b5/b195b5aa1194ed68e928daeb996207150af2dd2a062f3107431443300bf0d05e.png",
    },
    {
      id: 8,
      title: "Corsair iCUE 5000X RGB Gaming Case",
      brand: "Corsair",
      price: 189,
      rating: 4.6,
      image:
        "https://files.ox-sys.com/cache/500x_/image/1f/7f/c6/1f7fc613b25d1282eee16637dc0fd3f8d4e02ca51cf37aaef39118ee5daa366f.png",
    },
    {
      id: 9,
      title: "NVIDIA GeForce RTX 4070 Ti Graphics Card",
      brand: "NVIDIA",
      price: 799,
      rating: 4.9,
      image:
        "https://files.ox-sys.com/cache/500x_/image/4d/a2/f8/4da2f825627fefadd6630231e732cac03283574c08dc91e29df918bc0b7fcb81.png",
    },
    {
      id: 10,
      title: "AMD Ryzen 9 7900X Processor",
      brand: "AMD",
      price: 549,
      rating: 4.8,
      image:
        "https://files.ox-sys.com/cache/original/image/2e/bf/fa/2ebffa53825ced446e5868fc9f51accfb1b41c77b0ebbfb5799ef620b33d741e.png",
    },
    {
      id: 11,
      title: "PlayStation 5 Console",
      brand: "Sony",
      price: 499,
      rating: 4.9,
      image:
        "https://files.ox-sys.com/cache/original/image/7e/0a/e5/7e0ae5bd85f152a83a95341d111b6fe0e3b6e2153059db0eefc9e8a30c8871ca.png",
    },
    {
      id: 12,
      title: "Xbox Series X Console",
      brand: "Microsoft",
      price: 499,
      rating: 4.8,
      image:
        "https://files.ox-sys.com/cache/original/image/d3/dd/68/d3dd6827ae0f9d8999e0573816c14d875a57220be0a7e4d85cc5c6fba3a5c428.png",
    },
    {
      id: 13,
      title: "Nintendo Switch OLED Model",
      brand: "Nintendo",
      price: 349,
      rating: 4.7,
      image:
        "https://files.ox-sys.com/cache/original/image/d3/23/48/d32348b36c863e6fbcec18f69f0d2274d898db0eceda1675e89fd0ed08b7db0c.png",
    },
    {
      id: 14,
      title: "Razer Kishi Mobile Controller",
      brand: "Razer",
      price: 89,
      rating: 4.5,
      image:
        "https://files.ox-sys.com/cache/500x_/image/f1/12/33/f11233f03e24b874b3dca3624d592edd8272cc47ccd4e3f4c753206b2f92f28b.png",
    },
    {
      id: 15,
      title: "ASUS ROG Strix 850W PSU",
      brand: "ASUS",
      price: 179,
      rating: 4.6,
      image:
        "https://files.ox-sys.com/cache/500x_/image/0f/4a/5f/0f4a5ff5dc270fd341f8427e536c4c591024af003ea2e9c44fccc227c13f488f.png",
    },
    {
      id: 16,
      title: "Logitech G923 Racing Wheel",
      brand: "Logitech",
      price: 399,
      rating: 4.7,
      image:
        "https://files.ox-sys.com/cache/500x_/image/b6/d3/f0/b6d3f07c5cd620f6799bf4c233d4fea000e598d0fba794a4587a4957aad5e0a1.png",
    },
    {
      id: 17,
      title: "Oculus Quest 2 VR Headset",
      brand: "Meta",
      price: 299,
      rating: 4.8,
      image:
        "https://files.ox-sys.com/cache/500x_/image/ef/24/37/ef2437cdc27d72b32175e73200edf6a4393334a123b2b75b1ddbcc720ff8f554.png",
    },
    {
      id: 18,
      title: "Razer Firefly V2 RGB Mouse Pad",
      brand: "Razer",
      price: 49,
      rating: 4.6,
      image:
        "https://files.ox-sys.com/cache/500x_/image/18/a9/16/18a916ba90fbf21d1d92d26965774a060b6c8a84656c1a16cfa1ffc02e9c474f.png",
    },
    {
      id: 19,
      title: "Secretlab TITAN Evo 2022 Gaming Chair",
      brand: "Secretlab",
      price: 549,
      rating: 4.9,
      image:
        "https://files.ox-sys.com/cache/500x_/image/ba/ce/5b/bace5b385803cee8cbb0ffd2445cab5b3041b1eef886a8bb430522d194555d70.png",
    },
    {
      id: 20,
      title: "Razer Seiren Mini USB Microphone",
      brand: "Razer",
      price: 49,
      rating: 4.6,
      image:
        "https://files.ox-sys.com/cache/500x_/image/41/92/2c/41922c24478f79e5e4cf0a28ffa7411c3ed7d21dbc208bd752909f8c861c520b.png",
    },
  ];

  return (
    <div className="dark:bg-black py-10">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold font-strike dark:text-white mb-8">
          Новинки
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {gamerProducts.map((item) => (
            <div
              key={item.id}
              className="bg-white dark:bg-[#111] shadow-lg overflow-hidden group hover:transition-transform duration-300 flex flex-col"
            >
              {/* Rasm */}
              <div className="relative w-full h-52 bg-gray-200 dark:bg-[#0c0e0fd3]">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-contain p-4"
                />
              </div>

              {/* Ma'lumot */}
              <div className="p-4 flex flex-col gap-3 flex-grow">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white line-clamp-2">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Brand: <span className="font-medium">{item.brand}</span>
                </p>

                {/* Rating */}
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

                {/* Price */}
                <div className="text-xl font-bold text-[#0EA5E9]">
                  ${item.price}
                </div>

                {/* Button */}
                <button className="mt-auto bg-[#0EA5E9] hover:bg-[#0284c7] text-white py-2 px-4 rounded-lg shadow-md transition">
                  В корзину
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Cards;
