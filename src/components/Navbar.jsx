import { BiMoon } from "react-icons/bi";
import { CgProfile } from "react-icons/cg";
import { IoMdStats } from "react-icons/io";
import { IoWallet } from "react-icons/io5";
import { MdFavoriteBorder } from "react-icons/md";
import { PiShoppingCartDuotone } from "react-icons/pi";
import { RiMessage2Line } from "react-icons/ri";
import { Link } from "react-router-dom";

const headerLink = [
  {
    icon: <IoWallet size={23} />,
    title: "uzs/usd",
  },
  {
    icon: <IoMdStats size={23} />,
    title: "Сравнение",
  },
  {
    icon: <MdFavoriteBorder size={23} />,
    title: "Избранное 2",
  },
  {
    icon: <PiShoppingCartDuotone size={23} />,
    title: "Корзина",
  },
  {
    icon: <RiMessage2Line size={23} />,
    title: "Контакты",
  },
  {
    icon: <BiMoon size={23} />,
  },
  // {
  //   icon: <CgProfile size={23} />,
  // },
];

const Navbar = () => {
  return (
    <header className="w-full bg-white dark:bg-black">
      <nav className="container mx-auto bg-red-200  h-20 flex  justify-between items-center">
        <img
          src="https://files.ox-sys.com/cache/original/image/02/4d/50/024d503fb4c6b684439d113460b0f8ea259ff6e1e147d7fb6dcf4e3fd0d4fe04.png"
          alt="this is logo"
          className="w-[200px]"
        />

        <div className=" border border-[#33333391] px-2 w-[500px] cursor-text">
          <input
            type="search"
            className="outline-none py-1.5"
            placeholder="поиск товара..."
          />
        </div>
        <div className="flex ">
          <ul className="flex gap-4 items-center justify-center">
            {headerLink.map((item, i) => (
              <li
                key={i}
                className="flex items-center gap-1 flex-col justify-center "
              >
                {item.icon}
                {item.title && <span className="text-xs">{item.title}</span>}
              </li>
            ))}
            <div className="bg-gray-600 w-[70px] h-[42px] flex justify-center items-center">
              <CgProfile size={23} />
            </div>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
