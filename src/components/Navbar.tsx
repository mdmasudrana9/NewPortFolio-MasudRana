"use client";

import Link from "next/link";
import { assets } from "./../assets/assets";
import Image from "next/image";
import { GoArrowRight } from "react-icons/go";
import { IoMoonOutline } from "react-icons/io5";
import { CiMenuFries } from "react-icons/ci";
import { RxCross2 } from "react-icons/rx";
import { useEffect, useRef, useState } from "react";

const Navbar = () => {
  const sideMenuRef = useRef();
  const [isScroll, setIsScroll] = useState(false);

  const openSideMenu = () => {
    sideMenuRef.current.style.transform = "translateX(-16rem)";
  };

  const closeSideMenu = () => {
    sideMenuRef.current.style.transform = "translateX(16rem)";
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScroll(true);
      } else {
        setIsScroll(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <div className=" fixed top-0 left-0 w-11/12 -z-10 translate-y-[-80%]">
        <Image src={assets.header_bg_color} alt="" className="w-full" />
      </div>
      <nav
        className={`flex fixed z-50 justify-between items-center py-4 px-5 lg:px-8 2xl:px-[8%] w-full ${
          isScroll ? "bg-white shadow-sm bg-opacity-50 backdrop-blur-lg" : ""
        }`}
      >
        <Link href="/">
          <Image
            src={assets.logo}
            alt="logo"
            className="size-24 cursor-pointer mr-14"
          />
        </Link>

        <ul
          className={`items-center hidden md:flex  rounded-full px-12 py-3 gap-6 ${
            isScroll ? "" : "bg-white shadow-sm bg-opacity-50"
          }`}
        >
          <li className="font-ovo">
            <Link href="#home">Home</Link>
          </li>
          <li className="font-ovo">
            <a href="#about">About Me</a>
          </li>
          <li className="font-ovo">
            <Link href="#services">Services</Link>
          </li>
          <li className="font-ovo">
            <Link href="#my-work">My Work</Link>
          </li>
          <li className="font-ovo">
            <Link href="#contact-me">Contact Me</Link>
          </li>
        </ul>

        <div className="flex items-center gap-4">
          <IoMoonOutline size={24} />
          <Link
            href="#"
            className="md:flex gap-2 items-center hidden font-ovo  justify-between border border-gray-500 rounded-full px-10 py-2.5"
          >
            Hire Me <GoArrowRight />
          </Link>
          <CiMenuFries
            size={24}
            className="block md:hidden"
            onClick={openSideMenu}
          />

          {/* for mobile menu */}
          <div>
            <ul
              ref={sideMenuRef}
              className="md:hidden flex flex-col py-20 px-10 fixed -right-64  bg-rose-50 transition duration-500 top-0 bottom-0 w-64 h-screen  gap-4 "
            >
              <div className="flex justify-end">
                <RxCross2 size={24} onClick={closeSideMenu} />
              </div>
              <li onClick={closeSideMenu} className="font-ovo">
                <Link href="#home">Home</Link>
              </li>
              <li onClick={closeSideMenu} className="font-ovo">
                <Link href="#about">About Me</Link>
              </li>
              <li onClick={closeSideMenu} className="font-ovo">
                <Link href="#services">Services</Link>
              </li>
              <li onClick={closeSideMenu} className="font-ovo">
                <Link href="#my-work">My Work</Link>
              </li>
              <li onClick={closeSideMenu} className="font-ovo">
                <Link href="#contact-me">Contact Me</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
