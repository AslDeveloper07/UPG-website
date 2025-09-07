import React from "react";
import { FaPhoneAlt, FaMapMarkerAlt, FaClock } from "react-icons/fa";

const FooterContacts = ({ contacts }) => {
  return (
    <div className="container mx-auto px-0 pb-8 border-t border-gray-700 pt-6 grid grid-cols-1 md:grid-cols-3 gap-6 text-gray-300 text-base">
      {/* Телефоны */}
      <div className="flex items-start space-x-3">
        <FaPhoneAlt className="text-xl mt-1" />
        <div>
          <h4 className="font-bold text-white text-lg">Телефоны</h4>
          {contacts.Телефоны.map((tel, i) => (
            <p key={i}>{tel}</p>
          ))}
        </div>
      </div>

      {/* Адреса */}
      <div className="flex items-start space-x-3">
        <FaMapMarkerAlt className="text-xl mt-1" />
        <div>
          <h4 className="font-bold text-white text-lg">Адреса</h4>
          {contacts.Адреса.map((adr, i) => (
            <p key={i}>{adr}</p>
          ))}
        </div>
      </div>

      {/* Режим работы */}
      <div className="flex items-start space-x-3">
        <FaClock className="text-xl mt-1" />
        <div>
          <h4 className="font-bold text-white text-lg">Режим работы</h4>
          <p>{contacts.Режим}</p>
        </div>
      </div>
    </div>
  );
};

export default FooterContacts;
