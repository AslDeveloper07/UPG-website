import { LogoFooter } from "../assets/Assets";
import { FaPhoneAlt } from "react-icons/fa";
import { FaMapMarkerAlt } from "react-icons/fa";
import { FaClock } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#0f0f0f] text-white text-sm">
      <div className="container mx-auto py-10 px-5 grid grid-cols-1 md:grid-cols-5 gap-8">
        {/* Logo */}
        <div className="col-span-1">
          <img src={LogoFooter} alt="this is logo" className="w-[200px] mb-4" />
        </div>

        {/* Компания */}
        <div>
          <h3 className="font-bold mb-3">Компания</h3>
          <ul className="space-y-2 text-gray-300">
            <li><a href="#">Контакты</a></li>
            <li><a href="#">О нас</a></li>
            <li><a href="#">Почему мы?</a></li>
          </ul>
        </div>

        {/* Услуги */}
        <div>
          <h3 className="font-bold mb-3">Услуги</h3>
          <ul className="space-y-2 text-gray-300">
            <li><a href="#">Апгрейд</a></li>
          </ul>
        </div>

        {/* Поддержка */}
        <div>
          <h3 className="font-bold mb-3">Поддержка</h3>
          <ul className="space-y-2 text-gray-300">
            <li><a href="#">Доставка</a></li>
            <li><a href="#">Способ оплаты</a></li>
            <li><a href="#">FAQ</a></li>
          </ul>
        </div>

        {/* Проекты */}
        <div>
          <h3 className="font-bold mb-3">Проекты</h3>
          <ul className="space-y-2 text-gray-300">
            <li><a href="#">Блогеры</a></li>
            <li><a href="#">Игровые клубы</a></li>
            <li><a href="#">Киберспорт</a></li>
          </ul>
        </div>
      </div>

      {/* Contacts section */}
      <div className="container mx-auto px-5 pb-8 border-t border-gray-700 pt-6 grid grid-cols-1 md:grid-cols-3 gap-6 text-gray-300">
        {/* Телефоны */}
        <div className="flex items-start space-x-3">
          <FaPhoneAlt className="text-lg mt-1" />
          <div>
            <h4 className="font-bold text-white">Телефоны</h4>
            <p>+998 (99) 124-24-24</p>
            <p>+998 (97) 124-24-24</p>
          </div>
        </div>

        {/* Адреса */}
        <div className="flex items-start space-x-3">
          <FaMapMarkerAlt className="text-lg mt-1" />
          <div>
            <h4 className="font-bold text-white">Адреса</h4>
            <p>г. Ташкент, ул. Навои 37</p>
            <p>г. Ташкент, Трц, Малика, Магазин 24</p>
          </div>
        </div>

        {/* Режим работы */}
        <div className="flex items-start space-x-3">
          <FaClock className="text-lg mt-1" />
          <div>
            <h4 className="font-bold text-white">Режим работы</h4>
            <p>Ежедневно с 10:00 до 20:00</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
