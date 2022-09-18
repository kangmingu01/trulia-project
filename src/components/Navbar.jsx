import React, { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { GiHamburgerMenu } from "react-icons/gi";
import tw from "tailwind-styled-components";

const Navbar = () => {
  const [nav, setNav] = useState(true);

  const handleNav = () => {
    setNav(!nav);
  };

  const NavbarLi = tw.li`
    px-4
    py-2
    hover:text-white 
    hover:bg-teal-600
    hover:rounded-xl
  `;

  return (
    <nav className="flex h-14 items-center mx-auto mx-7">
      <a href="#" className="mr-5">
        <img src="assets/logo.png" alt="" className="h-5" />
      </a>

      <ul className="flex items-center">
        <NavbarLi>
          <a href="#">Rent</a>
        </NavbarLi>
        <NavbarLi>
          <a href="#">Mortgage</a>
        </NavbarLi>
        <NavbarLi>
          <a href="#">Buy</a>
        </NavbarLi>
      </ul>
      <ul className="flex items-center ml-auto">
        <NavbarLi className="mr-1">
          <a href="#">Saved Home</a>
        </NavbarLi>
        <NavbarLi className="mr-1">
          <a href="#">Saved Searches</a>
        </NavbarLi>
        <NavbarLi className="border border-solid rounded-xl border-teal-600">
          <a href="#">Sign up or Log in</a>
        </NavbarLi>
      </ul>
      <div onClick={handleNav}>
        {!nav ? (
          <AiOutlineClose size={23} className=" text-white" />
        ) : (
          <GiHamburgerMenu size={23} className=" text-teal-600  ml-7" />
        )}
      </div>
      <div
        className={
          !nav
            ? "fixed right-0 top-0 w-[20%] h-full border-l border-zinc-600 bg-zinc-600 text-white z-1"
            : "fixed right-[-100%]"
        }
      >
        <div onClick={handleNav}>
          {!nav ? (
            <AiOutlineClose
              size={23}
              className=" text-white z-10 fixed right-7 top-4"
            />
          ) : (
            <GiHamburgerMenu size={23} className=" text-teal-600" />
          )}
        </div>
        <ul className="pt-10 uppercase">
          <li className="p-4 border-b border-white-600">
            <a href="#">Rent</a>
          </li>
          <li className="p-4 border-b border-white-600">
            <a href="#">Mortgage</a>
          </li>
          <li className="p-4 border-b border-white-600">
            <a href="#">Buy</a>
          </li>
          <li className="p-4 border-b border-white-600 ">
            <a href="#">Saved Home</a>
          </li>
          <li className="p-4 border-b border-white-600">
            <a href="#">Saved Searches</a>
          </li>
          <li className="p-4 border-b border-white-600">
            <a href="#">Sign up or Log in</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
