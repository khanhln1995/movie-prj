import Logo from "./Logo";
import NavMenu from "./NavMenu";
import SearchBar from "./SearchBar";
import ActionButtons from "./ActionButtons";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

function Header({ scroll }) {

  return (
    <header
      className={`fixed top-0 left-0 z-10 px-8 gap-8 flex justify-between items-center w-full text-white transition-all duration-300
        ${scroll
          ? "h-[70px] bg-black"
          : "h-[90px] bg-gradient-to-b from-black/80 to-transparent"
        }`}
    >

      <Logo />

      <SearchBar icon={faMagnifyingGlass} />

      <div className="flex grow items-center justify-between gap-8">
        <NavMenu />
        <ActionButtons />
      </div>

    </header>
  );
}

export default Header;
