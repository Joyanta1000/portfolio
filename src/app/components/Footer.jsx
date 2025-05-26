"use client";

import { FiSend } from "react-icons/fi";
import SocialLinks from "@/components/SocialLinks";

export default function Footer({ year }) {
  return (
    <footer id="footer" className="bg-gray-900 text-white rounded-t-3xl pt-10 ">
      <div className="container mx-auto px-5 py-4">
        <div className="lg:flex lg:justify-between border-b border-gray-500 py-4">
          <div className="text-3xl mb-3 lg:mb-0">Let`s Connect there</div>
          <a
            href="https://wa.me/8801627962866"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-amber-600 px-3 py-2 rounded-4xl cursor-pointer "
          >
            Hire Me
          </a>
        </div>
        <div className="lg:flex lg:justify-between border-b border-gray-500 pt-6 pb-6 lg:pb-0">
          <div className=" lg:pr-3">
            <div className="flex py-2">
              <div className="text-white bg-amber-500 rounded-4xl w-6 text-center font-semibold font-stretch-95%">
                j
              </div>
              <div className="ml-1 font-mono">Joyanta</div>
            </div>
            <p >
              Experienced Web Developer with a Proven Track Record of Crafting
              High-Quality, Scalable, and User-Centric Digital Solutions.
            </p>
            <SocialLinks />
          </div>
          <div className="lg:px-3">
            <div className="text-amber-700 my-2">Navigation</div>
            {[
              { key: "home", label: "Home" },
              { key: "about", label: "About Us" },
              { key: "service", label: "Service" },
              { key: "service", label: "Resume" },
              { key: "service", label: "Project" },
            ].map((item, i) => (
              <div key={i}>
                <a href={`#${item.key}`} className="hover:text-amber-700">
                  {item.label}
                </a>
              </div>
            ))}
          </div>
          <div className="lg:px-3">
            <div className="text-amber-700 my-2">Contact</div>
            <div>
              <a
                href="https://wa.me/8801627962866"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-amber-700"
              >
                +880 1627962866
              </a>
            </div>
            <div>
              <a
                href="mailto:joyantadutta@chutyrooms.com"
                className="hover:text-amber-700"
              >
                joyantadutta@chutyrooms.com
              </a>
            </div>
          </div>
          <div className="lg:pl-3">
            <div className="text-amber-700 my-2">Get the latest information</div>
            <form className="flex items-center bg-white rounded-full overflow-hidden w-full max-w-md">
              <input
                type="email"
                placeholder="Email address"
                className="flex-grow px-4 py-3 text-gray-800 placeholder-gray-500 outline-none"
              />
              <button
                type="submit"
                className="bg-orange-600 hover:bg-orange-700 p-3 flex items-center justify-center"
              >
                <FiSend className="text-white text-2xl" />
              </button>
            </form>
          </div>
        </div>
        <div className="flex justify-between pt-4">
          <div className="pr-2 lg:pr-0">© {year} Joyanta Dutta. All rights reserved.</div>
          <div className="pl-2 lg:pl-0">User Terms & Conditions | Privacy Policy</div>
        </div>
      </div>
    </footer>
  );
}
