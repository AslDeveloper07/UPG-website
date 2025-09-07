import { LogoFooter } from "../../assets/Assets";
import { footerData } from "../../data/Data";
import FooterLinks from "./FooterLinks";
import FooterContacts from "./FooterContacts";

const Footer = () => {
  return (
    <footer className="bg-[#0f0f0f] text-white text-base">
      {/* Upper part */}
      <div className="container mx-auto py-10 px-5 grid grid-cols-1 md:grid-cols-5 gap-8">
        {/* Logo */}
        <div className="col-span-1">
          <img src={LogoFooter} alt="this is logo" className="w-[200px] mb-4" />
        </div>

        {/* Links */}
        {Object.entries(footerData).map(([title, items], index) => {
          if (title === "Контакты") return null;
          return <FooterLinks key={index} title={title} items={items} />;
        })}
      </div>

      {/* Contacts */}
      <FooterContacts contacts={footerData.Контакты} />
    </footer>
  );
};

export default Footer;
