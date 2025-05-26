"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

export default function Navbar() {
  const [isOpenMenu, setIsOpenMenu] = useState(false);

  const toggleMenu = () => setIsOpenMenu(!isOpenMenu);
  return (
    <nav className="px-2 py-4 relative">
      <div className="container mx-auto px-8 flex justify-between bg-gray-900 text-white text-[20px] rounded-3xl">
        <div className="lg:flex py-5 justify-between items-center hidden w-1/3  ">
          <Link href="/" className="hover:text-amber-700 cursor-pointer">
            Home
          </Link>
          <Link href="/#about" className="hover:text-amber-700 cursor-pointer">
            About
          </Link>
          <Link
            href="/#service"
            className="hover:text-amber-700 cursor-pointer"
          >
            Service
          </Link>
        </div>
        <div className="py-5 w-1/3 flex lg:justify-center lg:items-center">
          <Link href="/" className="flex">
            <div className="text-white bg-amber-500 rounded-4xl w-8 text-center font-semibold font-stretch-95%">
              j
            </div>
            <div className="ml-1 font-mono">Joyanta</div>
          </Link>
        </div>
        <div className="lg:flex py-5 justify-between items-center hidden w-1/3 ">
          <Link href="#footer" className="hover:text-amber-700 cursor-pointer">
            More
          </Link>
          <Link
            href="/#service"
            className="hover:text-amber-700 cursor-pointer"
          >
            Project
          </Link>
          <Link
            href="https://wa.me/8801627962866"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-amber-700 cursor-pointer"
          >
            Contact Me
          </Link>
        </div>
        <div className=" flex py-5 justify-end items-end lg:hidden w-1/3">
          <Image
            src="../../../icons/menu.png"
            alt=""
            className="cursor-pointer"
            onClick={toggleMenu}
          />
        </div>
      </div>
      {/* mobile */}
      {isOpenMenu && (
      <div className="container mx-auto px-8 my-2 bg-gray-900 text-white text-[20px] rounded-3xl lg:hidden ">
        <div className=" py-5 w-full flex flex-col items-center justify-center space-y-2">

          <Link href="/" className="hover:text-amber-700 cursor-pointer w-full text-center">
            Home
          </Link>
          <Link href="/#about" className="hover:text-amber-700 cursor-pointer w-full text-center">
            About
          </Link>
          <Link
            href="/#service"
            className="hover:text-amber-700 cursor-pointer w-full text-center"
          >
            Service
          </Link>
        </div>
      
        <div className="border-b border-gray-500"></div>

        <div className="py-5 w-full flex flex-col items-center justify-center space-y-2 ">
          <Link href="#footer" className="hover:text-amber-700 cursor-pointer">
            More
          </Link>
          <Link
            href="/#service"
            className="hover:text-amber-700 cursor-pointer"
          >
            Project
          </Link>
          <Link
            href="https://wa.me/8801627962866"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-amber-700 cursor-pointer"
          >
            Contact Me
          </Link>
        </div>

      </div>
      )}
      {/* mobile */}
    </nav>
  );
}
