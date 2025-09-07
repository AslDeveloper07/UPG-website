import Logo from "./Logo";
import SearchBar from "./SearchBar";
import NavLinks from "./NavLinks";
import ProfileButton from "./ProfileButton";
import useDarkMode from "./hooks/useDarkMode";

const Navbar = () => {
  const { toggleDarkMode } = useDarkMode();

  return (
    <header className="w-full bg-white/80 dark:bg-[#000000dc] backdrop-blur-3xl transition-colors duration-300 fixed top-0 left-0 z-50 shadow">
      <nav className="container mx-auto py-3 flex justify-between items-center relative">

        {/* Logo */}
        <Logo />

        {/* Search Bar */}
        <SearchBar />

        {/* Links + Profile */}
        <div className="flex">
          <ul className="flex gap-6 items-center justify-center relative">
            <NavLinks toggleDarkMode={toggleDarkMode} />
            <ProfileButton />
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
