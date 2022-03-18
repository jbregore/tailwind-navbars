import React, { useState } from "react";

import { AtSymbolIcon, MenuIcon, XIcon } from "@heroicons/react/outline";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleClick = () => setNav(!nav);

  return (
    <>
      <nav className="bg-gray-100">
        <div className="xl:max-w-6xl mx-auto px-4">
          <div className="flex justify-between">
            {/* secondary nav  */}
            <div className="flex space-x-4">
              <div>
                <a
                  href="#"
                  className="flex items-center py-5 px-2 
                text-gray-700 hover:text-gray-900"
                >
                  <AtSymbolIcon className="h-6 w-6 mr-1 text-blue-400" />
                  <span className="font-bold">Jb Regore</span>
                </a>
              </div>
              <ul className="hidden md:flex items-center space-x-1">
                <li className="py-5 px-3 text-gray-700 hover:text-gray-900">
                  Features
                </li>
                <li className="py-5 px-3 text-gray-700 hover:text-gray-900">
                  Pricing
                </li>
                <li className="py-5 px-3 text-gray-700 hover:text-gray-900">
                  About
                </li>
                <li className="py-5 px-3 text-gray-700 hover:text-gray-900">
                  Contact
                </li>
              </ul>
            </div>

            {/* secondary nav  */}
            <div className="hidden md:flex items-center space-x-1">
              <a href="" className="py-5 px-3">
                Login
              </a>
              <a
                href=""
                className="py-2 px-3 bg-yellow-400 text-yellow-800 
              rounded hover:bg-yellow-300 hover:text-yellow-800
              transtition duration-300"
              >
                Signup
              </a>
            </div>

            {/* mobile button goes here */}
            <div className="md:hidden flex items-center" onClick={handleClick}>
                {!nav ? (
                  <MenuIcon className="w-6 " />
                ) : (
                  <XIcon className="w-6" />
                )}
            </div>
          </div>
        </div>

        {/* mobile menu */}
        <div className={!nav ? "hidden" : "absolute bg-inherit w-full px-8 py-2"}>
          <ul>
            <li className="block py-2 px-4 text-sm ">Features</li>
            <li className="block py-2 px-4 text-sm ">Pricing</li>
            <li className="block py-2 px-4 text-sm ">About</li>
            <li className="block py-2 px-4 text-sm ">Contact</li>
          </ul>
        </div>

      </nav>

      <div className="py-32 text-center">
        <h2 className="font-extrabold text-4xl">Navbars in tailwind</h2>
      </div>
    </>
  );
};

export default Navbar;
