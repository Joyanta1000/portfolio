"use client";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import Layout from "../components/Layout";

import { useState } from "react";
import Image from "next/image";

export default function Index() {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);
  return (
    <Layout>
      <section className="mb-5" id="service">
        <div className="container mx-auto bg-gray-900 rounded-3xl px-5 py-10">
          <div className="lg:flex lg:justify-between w-full border-b border-b-amber-50 pb-2">
            <div className="text-3xl flex lg:px-3">
              <div className="text-white mr-2">My</div>
              <div className="text-amber-500">Projects</div>
            </div>
            <div className="text-white text-sm mt-2 lg:mt-0">
              Experienced Web Developer with a Proven Track Record.
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-4 w-full pt-10 gap-6">
            <div className="relative w-[300px] h-[380px] bg-neutral-600 rounded-2xl p-5 overflow-hidden shadow-lg">
              <h2 className="text-white text-lg font-semibold mb-4 border-b border-b-amber-50 py-2">
                Chutyrooms
              </h2>

              <div className="py-5 flex items-center justify-center">
                <Image
                  src="/images/chutyrooms.png"
                  className="cursor-pointer"
                  alt="Mockup Front"
                  onClick={openModal}
                  width={300}
                  height={300}
                />
              </div>

              <Link
                href={"https://chutyrooms.com/"}
                className="absolute bottom-4 right-4 w-10 h-10 bg-white text-black rounded-full flex items-center justify-center hover:bg-orange-500 transition"
              >
                <ArrowUpRight size={20} />
              </Link>
            </div>
          </div>
          {isOpen && (
            <div className="fixed inset-0 z-50 bg-black bg-opacity-50 flex items-center justify-center">
              <button
                onClick={closeModal}
                className="absolute top-3 right-3 text-white text-2xl hover:text-3xl cursor-pointer"
              >
                &times;
              </button>
              <div className="bg-transparent p-6 rounded-lg max-w-3xl w-full relative max-h-[80vh] overflow-y-auto">
                <div className="grid grid-cols-1 gap-4  mt-4">
                  <Image
                    src="/images/chutyrooms_home.png"
                    alt="Photo 1"
                    className="rounded w-full"
                    width={1000}
                    height={1000}
                  />
                  <Image
                    src="/images/2.png"
                    alt="Photo 2"
                    className="rounded w-full"
                    width={1000}
                    height={1000}
                  />
                  <Image
                    src="/images/3.png"
                    alt="Photo 3"
                    className="rounded w-full"
                    width={1000}
                    height={1000}
                  />
                  <Image
                    src="/images/4.png"
                    alt="Photo 4"
                    className="rounded w-full"
                    width={1000}
                    height={1000}
                  />
                  <Image
                    src="/images/5.png"
                    alt="Photo 4"
                    className="rounded w-full"
                    width={1000}
                    height={1000}
                  />
                  <Image
                    src="/images/6.png"
                    alt="Photo 4"
                    className="rounded w-full"
                    width={1000}
                    height={1000}
                  />
                  <Image
                    src="/images/7.png"
                    alt="Photo 4"
                    className="rounded w-full"
                    width={1000}
                    height={1000}
                  />
                  {/* Add more images as needed */}
                </div>
              </div>
            </div>
          )}
        </div>
      </section>
    </Layout>
  );
}
