import Image from "next/image";
import { appleImg, bagImg, searchImg } from "@/utils";
import { navLists } from "@/constants";

const Navbar = () => {
  return (
    <header className="w-full py-5 px-5 sm:px-10 flex justify-between items-center">
      <nav className="flex w-full screen-max-width">
        <Image
          src={appleImg}
          alt="apple logo"
          width={14}
          height={18}
          quality={100}
        />

        <div className="flex flex-1 justify-center max-sm:hidden">
          {navLists.map((nav, i) => (
            <div
              key={nav}
              className="px-5 text-sm cursor-pointer text-gray hover:text-white transition-all"
            >
              {nav}
            </div>
          ))}
        </div>

        <div className="flex items-baseline gap-7 max-sm:justify-end max-sm:flex-1">
          <Image
            src={searchImg}
            alt="Search"
            width={18}
            height={18}
            quality={100}
          />
          <Image src={bagImg} alt="Bag" width={18} height={18} quality={100} />
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
