import React, { useState } from "react";
import { MenuIcon, XIcon } from "@heroicons/react/outline";

const Sidebar2 = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="mx-auto mt-8">
      <>
        {!isOpen ? (
          <MenuIcon
            onClick={() => setIsOpen(!isOpen)}
            className="w-10 fixed z-30 flex items-center
          cursor-pointer right-10 top-6"
          />
        ) : (
          <XIcon
            className="w-10 fixed top-6 right-10 cursor-pointer z-10"
            onClick={() => setIsOpen(!isOpen)}
          />
        )}
        <div
          className={`top-0 right-0 fixed bg-blue-500 w-[35vw] h-full p-10 
          ${
            isOpen ? "translate-x-0" : "translate-x-full"
          } ease-in-out duration-300 `}
        >
          <p className="text-2xl text-white">This is the sidebar</p>
        </div>
        <h1 className="text-4xl text-center">Main content</h1>
      </>
    </div>
  );
};

export default Sidebar2;
