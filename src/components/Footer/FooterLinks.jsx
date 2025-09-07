import React from "react";

const FooterLinks = ({ title, items }) => {
  return (
    <div>
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
};

export default FooterLinks;
