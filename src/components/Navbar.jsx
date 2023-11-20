import { useState } from "react";
import styles from "../style";
import { close, logo, menu } from "../assets";
import { navLinks } from "../constants";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <nav className="w-full px-10 flex py-6 mt-2 justify-center items-center absolute top-0 left-0 z-10">
      <a href="/">
        <img
          src={logo}
          alt="drizzle"
          className="w-[138px] h-[38px] cursor-pointer"
        />
      </a>
      <ul className="list-none md:flex hidden justify-center items-center flex-1">
        {navLinks.map((nav, index) => (
          <li key={nav.id} className={`font-poppins`}>
            <a
              href={`#${nav.id}`}
              className={`font-poppins font-normal hover:text-dimWhite transition-colors cursor-pointer text-[16px]
            ${index === navLinks.length - 1 ? "mr-0" : "mr-10"} text-white`}
            >
              {nav.title}
            </a>
          </li>
        ))}
      </ul>
      <div className="space-x-4 md:flex hidden">
        <button className="text-white font-poppins font-normal transition-colors hover:bg-white/10 rounded-md px-4">
          Sign In
        </button>
        <button className="bg-[#7A62F9] rounded-lg hover:bg-[#7A62F9]/80 transition-colors text-white py-2.5 px-4 font-medium font-poppins">
          Get Started
        </button>
      </div>

      <div className="md:hidden flex flex-1 justify-end items-center">
        <img
          src={toggle ? close : menu}
          alt="menu"
          className="w-[28px] h-[28px] object-contain cursor-pointer"
          onClick={() => setToggle((prev) => !prev)}
        />
        <div
          className={`${
            toggle ? "flex" : "hidden"
          } p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[180px] rounded-xl sidebar`}
        >
          <ul className="list-none flex flex-col items-center flex-1">
            {navLinks.map((nav, index) => (
              <li
                key={nav.id}
                className={`font-poppins font-normal cursor-pointer transition-colors hover:bg-white/10 rounded-md px-8 text-[20px]
        ${index === navLinks.length - 1 ? "mb-0" : "mb-4"} text-white`}
              >
                <a href={`#${nav.id}`}>{nav.title}</a>
              </li>
            ))}
            <div className="items-center space-y-4 space-x-2 mb-1">
              <button className="text-white text-lg font-poppins transition-colors hover:bg-white/10 rounded-md px-4 py-2">
                Sign In
              </button>
              <button className="bg-[#7A62F9] hover:bg-[#7A62F9]/80 transition-colors rounded-lg text-white py-2 px-4 font-medium font-poppins">
                Get Started
              </button>
            </div>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
