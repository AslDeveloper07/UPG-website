import { BiMoon } from "react-icons/bi";
import { CgProfile } from "react-icons/cg";
import { IoMdStats } from "react-icons/io";
import { IoWallet } from "react-icons/io5";
import { MdFavoriteBorder } from "react-icons/md";
import { PiShoppingCartDuotone } from "react-icons/pi";
import { RiMessage2Line } from "react-icons/ri";

const Navbar = () => {
  return (
    <header className="w-full bg-white dark:bg-black">
      <nav className="container mx-auto  h-20 flex  justify-between items-center">
        <img src="" alt="" />

        <input type="search" />
        <div>
          <div className="text-white">
            <IoWallet className="text-white" />
            <p>uzs/usd</p>
          </div>
          <div>
            <IoMdStats />
            <p>Сравненение</p>
          </div>
          <div>
            <MdFavoriteBorder />
            <p>Избранное 2</p>
          </div>
          <div>
            <PiShoppingCartDuotone />
            <p>Kорзина</p>
          </div>
          <div>
            <RiMessage2Line />
            <p>Контакты</p>
          </div>
          <div>
            <BiMoon />
            <p>Тема</p>
          </div>
          <div>
            <CgProfile />
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
