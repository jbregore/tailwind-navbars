import React, { useState } from "react";
import { AtSymbolIcon, MenuIcon, XIcon } from "@heroicons/react/outline";

const Navbar2 = () => {
  const [nav, setNav] = useState(false);

  const handleClick = () => setNav(!nav);

  const links = [
    { name: "HOME", link: "/" },
    { name: "SERVICE", link: "/" },
    { name: "ABOUT", link: "/" },
    { name: "BLOGS", link: "/" },
    { name: "CONTACT", link: "/" },
  ];

  return (
    <>
      <div className="shadow-md w-full fixed top-0 left-0 ">
        <div className="md:flex items-center justify-between bg-white py-2 md:px-10 px-7">
          {/* left nav */}
          <div
            className="font-bold cursor-pointer flex items-center
          text-gray-800"
          >
            <span className="text-3xl text-indigo-600 mr-1 pt-2">
              <AtSymbolIcon className="w-6" />
            </span>
            <span className="pt-2 text-lg">JB REGORE</span>
          </div>

          {/* menu icon mobile  */}
          <div
            className="text-3xl absolute right-8 top-5 cursor-pointer md:hidden"
            onClick={handleClick}
          >
            {!nav ? <MenuIcon className="w-6 " /> : <XIcon className="w-6" />}
          </div>

          {/* right nav */}
          <ul
            className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static
                bg-white md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9
                transition-all duration-500 ease-in ${
                  nav ? "top-10" : "top-[-490px]"
                }`}
          >
            {links.map((item, index) => (
              <li key={index} className="md:ml-1 text-lg">
                <a
                  href={item.link}
                  className="text-gray-800 
                      hover:text-gray-400 duration-500"
                >
                  {item.name}
                </a>
              </li>
            ))}
              <button
                className="bg-indigo-600 text-white py-2 px-6 rounded md:ml-4
              hover:bg-indigo-400 duration-500 mr-5"
              >
                Get Started
              </button>
              <button
                className="bg-slate-600 text-white py-2 px-6 rounded md:ml-0
              hover:bg-slate-400 duration-500"
              >
                Read More
              </button>
          </ul>
        </div>
      </div>

      {/* content goes here  */}
      {/* <div className="bg-indigo-600 w-full h-screen">
          tae
      </div> */}
      <div className="py-32 text-center align-center mt-5">
        <h2 className="font-extrabold text-4xl">Navbars in tailwind</h2>
      </div>
    </>
  );
};

export default Navbar2;
