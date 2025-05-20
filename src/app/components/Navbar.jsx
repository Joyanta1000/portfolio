"use client";

import Link from "next/link";
import React from "react";

export default function Navbar() {
  return (
    <nav className="px-2 py-4">
      <div className="container mx-auto px-8 flex justify-between bg-gray-900 text-white text-[20px] rounded-3xl">
        <div className="flex py-5 justify-between items-center w-1/3">
          <Link href="/" className="hover:text-amber-700 cursor-pointer">Home</Link>
          <a href="#about" className="hover:text-amber-700 cursor-pointer">About</a>
          <a href="#service" className="hover:text-amber-700 cursor-pointer">Service</a>
        </div>
        <div className="py-5 w-1/3 flex items-center justify-center">
          <div className="text-white bg-amber-500 rounded-4xl w-8 text-center font-semibold font-stretch-95%">
            j
          </div>
          <div className="ml-1 font-mono">Joyanta</div>
        </div>
        <div className="flex py-5 justify-between w-1/3">
          <a href="#footer" className="hover:text-amber-700 cursor-pointer">More</a>
          <a href="#service" className="hover:text-amber-700 cursor-pointer">Project</a>
          <a
            href="https://wa.me/8801627962866"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-amber-700 cursor-pointer"
          >
            Contact Me
          </a>
        </div>
      </div>
    </nav>
  );
}
