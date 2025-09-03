import { Link } from "react-router-dom";
import { BiMoon } from "react-icons/bi";
import { MdWbSunny } from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import { IoMdStats } from "react-icons/io";
import { IoWallet } from "react-icons/io5";
import { MdFavoriteBorder } from "react-icons/md";
import { PiShoppingCartDuotone } from "react-icons/pi";
import { RiMessage2Line } from "react-icons/ri";
import { LogoDark, LogoLight } from "../assets/Assets";

const Navbar = ({ toggleDarkMode }) => {
  const headerLink = [
    {
      path: "/comparison",
      icon: <IoWallet size={23} className="text-black dark:text-white" />,
    },
    {
      path: "/statistics",
      icon: <IoMdStats size={23} className="text-black dark:text-white" />,
    },
    {
      path: "/favorites",
      icon: <MdFavoriteBorder size={23} className="text-black dark:text-white" />,
    },
    {
      path: "/basket",
      icon: <PiShoppingCartDuotone size={23} className="text-black dark:text-white" />,
    },
    {
      path: "/contact",
      icon: <RiMessage2Line size={23} className="text-black dark:text-white" />,
    },
    {
      icon: (
        <>
          <BiMoon
            size={23}
            onClick={toggleDarkMode}
            className="cursor-pointer text-black dark:text-white dark:hidden"
          />
          <MdWbSunny
            size={23}
            onClick={toggleDarkMode}
            className="cursor-pointer text-black dark:text-white hidden dark:block"
          />
        </>
      ),
    },
  ];

  return (
    <header className="w-full bg-white/80 dark:bg-[#000000dc] backdrop-blur-3xl transition-colors duration-300 fixed top-0 left-0 z-50 shadow">
      <nav className="container mx-auto py-3 flex justify-between items-center relative">
        <Link to="/">
          <img src={LogoLight} alt="Light Logo" className="w-[180px] dark:hidden" />
          <img src={LogoDark} alt="Dark Logo" className="w-[200px] hidden dark:block" />
        </Link>

        <div className="fixed left-1/2 top-[14px] -translate-x-1/2 w-[500px]">
          <div className="border border-[#33333391] dark:border-[#0EA5E9] px-2 w-full cursor-text rounded-md bg-[#fffb] dark:bg-[#111]">
            <input
              type="search"
              className="outline-none py-1.5 w-full bg-transparent text-black dark:text-[#0EA5E9] placeholder-gray-500 dark:placeholder-[#0EA5E9]"
              placeholder="поиск товара..."
            />
          </div>
        </div>

        <div className="flex">
          <ul className="flex gap-6 items-center justify-center">
            {headerLink.map((item, i) => (
              <li
                key={i}
                className="flex items-center justify-center cursor-pointer text-black dark:text-[#0EA5E9]"
              >
                {item.path ? <Link to={item.path}>{item.icon}</Link> : item.icon}
              </li>
            ))}
            <div className="bg-gray-600 dark:bg-[#0EA5E9] w-[70px] h-[42px] flex justify-center items-center rounded-md">
              <CgProfile size={23} className="text-white" />
            </div>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
