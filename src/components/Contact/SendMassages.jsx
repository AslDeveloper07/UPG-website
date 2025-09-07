import React from "react";
import { Stremer } from "../../assets/Assets";
import MyMap from "./MyMap";

const SendMassages = () => {
  return (
    <div>
      <h1 className="text-4xl pb-2 text-black dark:text-white font-strike">
        Contact
      </h1>
      <div className="w-full bg-pink-600 h-1 mb-4"></div>

      <div className="flex w-auto h-[400px] gap-5">
        <div className="bg-[#fe00941f] dark:bg-[#41414136] w-[50%] border-[1px] border-[#fe0096] p-15 flex flex-col justify-between">
          <div>
            <h2 className="text-2xl font-bold text-black dark:text-white mb-2">
              Контакты для покупателей
            </h2>
            <p className=" text-black dark:text-white mb-6">
              Ответим на все ваши вопросы и поможем выбрать подходящий
              компьютер.
            </p>
            <div className="w-full bg-pink-600 h-[2px] mb-6"></div>
          </div>

          <div className="grid grid-cols-2 gap-6 text-gray-200">
            <div className="text-black dark:text-white">
              <p className="font-semibold mb-2 text-black dark:text-white">
                Телефон ул. Навои 37
              </p>
              <p>+998 (99) 124-24-24</p>
              <p>+998 (88) 124-24-24</p>
            </div>
            <div className="text-black dark:text-white">
              <p className="font-semibold mb-2">
                Телефон Трц. Малика, Магазин 24
              </p>
              <p>+998 (97) 124-24-24</p>
            </div>
            <div className="">
              <p className="font-semibold mb-2 text-black dark:text-white">
                Почта
              </p>
              <p className="text-pink-500">upghomeforgamers@upg.uz</p>
            </div>
            <div className="text-black dark:text-white">
              <p className="font-semibold mb-2">Режим работы</p>
              <p>Ежедневно с 10:00 до 20:00</p>
            </div>
          </div>
        </div>

        <img
          src={Stremer}
          alt="Contact illustration"
          className="w-[50%] h-auto object-cover border-[1px] border-[#fe0096]"
        />
      </div>

      <MyMap />
    </div>
  );
};

export default SendMassages;
