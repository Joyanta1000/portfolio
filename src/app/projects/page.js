import Link from 'next/link';
import { ArrowUpRight } from "lucide-react";
import Layout from '../components/Layout';

export default function index() {
  return (
    <Layout>
      <section className="mb-5" id="service">
              <div className="container mx-auto bg-gray-900 rounded-3xl px-5 py-10">
                <div className="flex justify-between w-full border-b border-b-amber-50 pb-2">
                  <div className="text-3xl flex px-3">
                    <div className="text-white mr-2">My</div>
                    <div className="text-amber-500">Projects</div>
                  </div>
                  <div className="text-white text-sm">
                    Experienced Web Developer with a Proven Track Record. 
                  </div>
                </div>
      
                <div className="flex justify-between w-full pt-10">
                  <div className="relative w-[300px] h-[380px] bg-neutral-600 rounded-2xl p-5 overflow-hidden shadow-lg">
                    <h2 className="text-white text-lg font-semibold mb-4 border-b border-b-amber-50 py-2">
                      Chutyrooms
                    </h2>
      
                    <div className="py-5 flex items-center justify-center">
                      <div className="absolute top-24 opacity-80 z-0 px-6 rounded-3xl">
                        <img
                          src="https://img.freepik.com/free-photo/glass-background-with-frosted-pattern_53876-132924.jpg"
                          className="rounded-3xl shadow-[0px_0px_2px_2px] shadow-gray-400"
                          alt="Mockup Back"
                        />
                      </div>
                      <div className="absolute top-26 opacity-90 z-10 px-5 rounded-3xl">
                        <img
                          src="https://img.freepik.com/free-photo/glass-background-with-frosted-pattern_53876-132924.jpg"
                          className="rounded-3xl shadow-[0px_0px_2px_2px] shadow-gray-400"
                          alt="Mockup Mid"
                        />
                      </div>
                      <div className="absolute top-28 z-20">
                        <img
                          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRygFu0H70kRJeTZGpaO2frBvsXIinbm3F07A&s"
                          className="rounded-3xl"
                          alt="Mockup Front"
                        />
                      </div>
                    </div>
      
                    <Link href={"https://chutyrooms.com/"} className="absolute bottom-4 right-4 w-10 h-10 bg-white text-black rounded-full flex items-center justify-center hover:bg-orange-500 transition">
                      <ArrowUpRight size={20} />
                    </Link>
                  </div>
                </div>
              </div>
            </section>
      
    </Layout>
  );
}