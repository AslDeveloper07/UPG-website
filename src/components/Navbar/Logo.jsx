import { Link } from "react-router-dom";
import { LogoDark, LogoLight } from "../../assets/Assets";
// import { LogoDark, LogoLight } from "../../assets/Assets";

const Logo = () => {
  return (
    <Link to="/">
      <img src={LogoLight} alt="Light Logo" className="w-[120px] dark:hidden" />
      <img
        src={LogoDark}
        alt="Dark Logo"
        className="w-[120px] hidden dark:block"
      />
    </Link>
  );
};

export default Logo;
