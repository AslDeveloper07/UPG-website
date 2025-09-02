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
    icon: <IoWallet className="" />,
    title: "uzs/usd"
  }
]

const Navbar = () => {


  return (
    <header className="w-full bg-white dark:bg-black">
      <nav className="container mx-auto  h-20 flex  justify-between items-center">
        {/* <img src="" alt="" /> */}

        <input type="search" />
        <div className="flex ">
         <ul>
          {
            headerLink.map((item, i)=>(
              <div key={i}>
                <li>{item.icon}</li>
                <li>{item.title}</li>
              </div>
            ))
          }
         </ul>
          {/* <Link to="/wallet">
           <div className="">
            <IoWallet className="" />
            <p></p>
          </div>
          </Link> */}

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
