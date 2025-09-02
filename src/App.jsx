import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { BiMoon } from "react-icons/bi";
import { CgProfile } from "react-icons/cg";
import { IoMdStats } from "react-icons/io";
import { IoWallet } from "react-icons/io5";
import { MdFavoriteBorder } from "react-icons/md";
import { PiShoppingCartDuotone } from "react-icons/pi";
import { RiMessage2Line } from "react-icons/ri";

const Navbar = ({ toggleDarkMode }) => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const headerLink = [
    {
      path: "/comparison",
      icon: <IoMdStats size={23} className="text-black dark:text-white" />,
      title: "Сравнение",
    },
    {
      path: "/favorites",
      icon: <MdFavoriteBorder size={23} className="text-black dark:text-white" />,
      title: "Избранное 2",
    },
    {
      path: "/basket",
      icon: (
        <PiShoppingCartDuotone size={23} className="text-black dark:text-white" />
      ),
      title: "Корзина",
    },
    {
      path: "/contact",
      icon: <RiMessage2Line size={23} className="text-black dark:text-white" />,
      title: "Контакты",
    },
    {
      path: "#",
      icon: (
        <BiMoon
          size={23}
          onClick={toggleDarkMode}
          className="cursor-pointer text-black dark:text-white"
        />
      ),
    },
  ];

  return (
    <header className="w-full bg-white dark:bg-black transition-colors duration-300 fixed top-0 left-0 z-50 shadow">
      <nav className="container mx-auto h-20 flex justify-between items-center">
        <img
          src="https://files.ox-sys.com/cache/original/image/02/4d/50/024d503fb4c6b684439d113460b0f8ea259ff6e1e147d7fb6dcf4e3fd0d4fe04.png"
          alt="this is logo"
          className="w-[200px]"
        />

        <div className="border border-[#33333391] dark:border-[#0056E0] px-2 w-[500px] cursor-text rounded-md">
          <input
            type="search"
            className="outline-none py-1.5 w-full bg-transparent text-black dark:text-[#0056E0] placeholder-gray-500 dark:placeholder-[#0056E0]"
            placeholder="поиск товара..."
          />
        </div>

        <div className="flex">
          <ul className="flex gap-4 items-center justify-center">
            {headerLink.map((item, i) => (
              <li
                key={i}
                className="flex items-center gap-1 flex-col justify-center cursor-pointer text-black dark:text-[#0056E0]"
              >
                {item.path !== "#" ? (
                  <Link to={item.path}>{item.icon}</Link>
                ) : (
                  item.icon
                )}
                {/* scroll bo‘lmaganda title ko‘rinsin */}
                {!isScrolled && item.title && (
                  <span className="text-xs text-black dark:text-[#0056E0]">
                    {item.title}
                  </span>
                )}
              </li>
            ))}

            <div className="bg-gray-600 dark:bg-[#0056E0] w-[70px] h-[42px] flex justify-center items-center rounded-md">
              <CgProfile size={23} className="text-white" />
            </div>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
