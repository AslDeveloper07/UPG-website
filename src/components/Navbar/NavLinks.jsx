import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { BiMoon } from "react-icons/bi";
import { MdWbSunny } from "react-icons/md";
import { IoMdStats } from "react-icons/io";
import { IoWallet } from "react-icons/io5";
import { MdFavoriteBorder } from "react-icons/md";
import { PiShoppingCartDuotone } from "react-icons/pi";
import { RiMessage2Line } from "react-icons/ri";

const NavLinks = ({ toggleDarkMode }) => {
  const [walletOpen, setWalletOpen] = useState(false);
  const walletRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (walletRef.current && !walletRef.current.contains(e.target)) {
        setWalletOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const headerLink = [
    {
      path: "",
      icon: (
        <div ref={walletRef} className="relative">
          <IoWallet
            size={23}
            className="text-black dark:text-white cursor-pointer"
            onClick={() => setWalletOpen((prev) => !prev)}
          />
          {walletOpen && (
            <div className="absolute top-6 left-[-13px] w-16 bg-white dark:bg-[#111] border border-gray-200 dark:border-[#0EA5E9] rounded-lg shadow-lg overflow-hidden animate-fadeIn z-50">
              <ul className="flex flex-col">
                <li className="px-4 py-1 hover:bg-gray-100 dark:hover:bg-[#0EA5E9] dark:hover:text-white cursor-pointer">
                  uzs
                </li>
                <li className="px-4 py-1 hover:bg-gray-100 dark:hover:bg-[#0EA5E9] dark:hover:text-white cursor-pointer">
                  usd
                </li>
              </ul>
            </div>
          )}
        </div>
      ),
    },
    {
      path: "/comparison",
      icon: <IoMdStats size={23} className="text-black dark:text-white" />,
    },
    {
      path: "/favorites",
      icon: <MdFavoriteBorder size={23} className="text-black dark:text-white" />,
    },
    {
      path: "/cart",
      icon: (
        <div className="relative group">
          <PiShoppingCartDuotone size={23} className="text-black dark:text-white" />
          <div className="absolute top-7 right-0 w-[700px] min-h-[150px] bg-white dark:bg-[#111] border border-gray-200 dark:border-[#0EA5E9] rounded-lg shadow-lg hidden group-hover:block z-50">
            <div className="p-4 text-black dark:text-white text-center">
              <p>Sizning savatingiz hozircha bo‘sh.</p>
            </div>
          </div>
        </div>
      ),
    },
    {
      path: "/contact",
      icon: <RiMessage2Line size={23} className="text-black dark:text-white" />,
    },
    {
      path: null,
      icon: (
        <div onClick={toggleDarkMode} className="cursor-pointer">
          <BiMoon size={23} className="text-black dark:text-white dark:hidden" />
          <MdWbSunny size={23} className="text-black dark:text-white hidden dark:block" />
        </div>
      ),
    },
  ];

  return (
    <>
      {headerLink.map((item, i) => (
        <li
          key={i}
          className="flex items-center justify-center cursor-pointer text-black dark:text-[#0EA5E9]"
        >
          {item.path ? <Link to={item.path}>{item.icon}</Link> : item.icon}
        </li>
      ))}
    </>
  );
};

export default NavLinks;
