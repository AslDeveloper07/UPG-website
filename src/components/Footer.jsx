import { LogoFooter } from "../assets/Assets";
import { FaPhoneAlt, FaMapMarkerAlt, FaClock } from "react-icons/fa";

const Footer = () => {
  const footerData = {
    Компания: ["Контакты", "О нас", "Почему мы?"],
    Услуги: ["Апгрейд"],
    Поддержка: ["Доставка", "Способ оплаты", "FAQ"],
    Проекты: ["Блогеры", "Игровые клубы", "Киберспорт"],
    Контакты: {
      Телефоны: ["+998 (99) 124-24-24", "+998 (97) 124-24-24"],
      Адреса: [
        "г. Ташкент, ул. Навои 37",
        "г. Ташкент, Трц, Малика, Магазин 24",
      ],
      Режим: "Ежедневно с 10:00 до 20:00",
    },
  };

  return (
    <footer className="bg-[#0f0f0f] text-white text-base">
      <div className="container mx-auto py-10 px-5 grid grid-cols-1 md:grid-cols-5 gap-8">
        <div className="col-span-1">
          <img src={LogoFooter} alt="this is logo" className="w-[200px] mb-4" />
        </div>

        {Object.entries(footerData).map(([title, items], index) => {
          if (title === "Контакты") return null;

          return (
            <div key={index}>
              <h3 className="font-bold mb-3 text-lg">{title}</h3>
              <ul className="space-y-2 text-gray-300">
                {items.map((item, i) => (
                  <li key={i}>
                    <a href="#" className="hover:text-white transition">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          );
        })}
      </div>

      <div className="container mx-auto px-5 pb-8 border-t border-gray-700 pt-6 grid grid-cols-1 md:grid-cols-3 gap-6 text-gray-300 text-base">
        <div className="flex items-start space-x-3">
          <FaPhoneAlt className="text-xl mt-1" />
          <div>
            <h4 className="font-bold text-white text-lg">Телефоны</h4>
            {footerData.Контакты.Телефоны.map((tel, i) => (
              <p key={i}>{tel}</p>
            ))}
          </div>
        </div>

        <div className="flex items-start space-x-3">
          <FaMapMarkerAlt className="text-xl mt-1" />
          <div>
            <h4 className="font-bold text-white text-lg">Адреса</h4>
            {footerData.Контакты.Адреса.map((adr, i) => (
              <p key={i}>{adr}</p>
            ))}
          </div>
        </div>

        <div className="flex items-start space-x-3">
          <FaClock className="text-xl mt-1" />
          <div>
            <h4 className="font-bold text-white text-lg">Режим работы</h4>
            <p>{footerData.Контакты.Режим}</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
