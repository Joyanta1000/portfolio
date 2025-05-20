"use client";

import { useEffect, useState } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

export default function Layout({ children }) {
  const [year, setYear] = useState(new Date().getFullYear());

  return (
    <>
      <Navbar />
      <main>{children}</main>
      <Footer year={year} />
    </>
  );
}
