import Image from "next/image";
import { appleImg } from "@/utils";

const Navbar = () => {
  return (
    <header>
      <nav>
        <Image src={appleImg} alt="apple logo" width={50} height={50} />
      </nav>
    </header>
  );
};

export default Navbar;
