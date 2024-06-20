import Link from "next/link";
import InputSearch from "./InputSearch";

const Navbar = () => {
  return (
    <nav className="bg-color-accent">
      <div className="flex md:flex-row flex-col justify-between md:items-center p-4 gap-2">
        <Link href={"/"} className="text-2xl font-bold text-white">
          AnimeList
        </Link>
        <InputSearch />
      </div>
    </nav>
  );
};

export default Navbar;
