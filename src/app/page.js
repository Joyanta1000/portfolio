
import Layout from "@/app/components/Layout";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <Layout>
      <section>
        <div className="container mx-auto">
          <img src="../../Frame3.png" className="w-full" alt="Banner" />
        </div>
      </section>

      <section className="mb-5" id="service">
        <div className="container mx-auto bg-gray-900 rounded-3xl px-5 py-10">
          <div className="flex justify-between w-full border-b border-b-amber-50 pb-2">
            <div className="text-3xl flex px-3">
              <div className="text-white mr-2">My</div>
              <div className="text-amber-500">Services</div>
            </div>
            <div className="text-white text-sm">
              Experienced Web Developer with a Proven Track Record. 
            </div>
          </div>

          <div className="flex justify-between w-full pt-10">
            <div className="relative w-[300px] h-[380px] bg-neutral-600 rounded-2xl p-5 overflow-hidden shadow-lg">
              <h2 className="text-white text-lg font-semibold mb-4 border-b border-b-amber-50 py-2">
                Web Development
              </h2>

              <div className="py-5 flex items-center justify-center">
             
                  <img
                    src="../../images/web_development.png"
                    className=""
                    alt="Mockup Front"
                  />
            
              </div>

              <Link href="/projects" className="absolute bottom-4 right-4 w-10 h-10 bg-white text-black rounded-full flex items-center justify-center hover:bg-orange-500 transition">
                <ArrowUpRight size={20} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="my-5" id="about">
        <div className="container mx-auto px-5 pb-10">
          <div className="w-full text-3xl text-center pb-10">
            My Work Experience
          </div>
          <div className="md:flex md:justify-between">
            <div className="md:w-[45%] w-full">
              <div className="pb-5">
                <div className="font-semibold text-2xl">
                  Chuty Bangladesh Private Ltd.
                </div>
                <div className="text-2xl">January 2022 - Present</div>
              </div>
            </div>
            <div className="md:w-[10%] md:block hidden">
              <div className="flex flex-col items-center space-y-6">
                {["orange-500", "gray-800", "orange-500"].map((color, i) => (
                  <div key={i} className="flex flex-col items-center mb-0">
                    <div className="w-8 h-8 rounded-full border-2 border-dashed border-gray-400 flex items-center justify-center">
                      <div className={`w-5 h-5 bg-${color}  rounded-full`}></div>
                    </div>
                    {i < 2 && (
                      <div className="h-[90px] border-l-2 border-dashed border-gray-400"></div>
                    )}
                  </div>
                ))}
              </div>
            </div>
            <div className="md:w-[45%] w-full">
              <div className="pb-5">
                <div className="font-semibold text-2xl">Spinner Tech Ltd.</div>
                <div className="text-2xl">October 2021 - January 2022</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
