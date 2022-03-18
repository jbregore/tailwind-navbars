import { useState } from "react";

import img1 from "../assets/control.png";
import logo from "../assets/logo.png";

import Chart_fill from "../assets/Chart_fill.png";
import Chat from "../assets/Chat.png";
import User from "../assets/User.png";

import Calendar from "../assets/Calendar.png";
import Search from "../assets/Search.png";
import Chart from "../assets/Chart.png";
import Folder from "../assets/Folder.png";
import Setting from "../assets/Setting.png";

const Sidebar1 = () => {
  const [open, setOpen] = useState(true);
  const Menus = [
    { title: "Dashboard", src: Chart_fill },
    { title: "Inbox", src: Chat },
    { title: "Accounts", src: User, gap: true },
    { title: "Schedule ", src: Calendar },
    { title: "Search", src: Search },
    { title: "Analytics", src: Chart },
    { title: "Files ", src: Folder, gap: true },
    { title: "Settings", src: Setting },
  ];

  return (
    <div className="flex">
      <div
        className={` ${
          open ? "w-72" : "w-20 "
        } bg-[#081A51] h-screen p-5  pt-8 relative duration-300`}
      >
        <img
          src={img1}
          alt=""
          className={`absolute cursor-pointer -right-3 top-9 w-7 border-[#081A51]
           border-2 rounded-full  ${!open && "rotate-180"}`}
          onClick={() => setOpen(!open)}
        />
        <div className="flex gap-x-4 items-center">
          <img
            src={logo}
            alt=""
            className={`cursor-pointer duration-500 ${
              open && "rotate-[360deg]"
            }`}
          />
          <h1
            className={`text-white origin-left font-medium text-xl duration-200 ${
              !open && "scale-0"
            }`}
          >
            Jb Regore
          </h1>
        </div>
        <ul className="pt-6">
          {Menus.map((Menu, index) => (
            <li
              key={index}
              className={`flex  rounded-md p-2 cursor-pointer hover:bg-[rgba(255,255,255,0.17)] text-gray-300 text-sm items-center gap-x-4 
              ${Menu.gap ? "mt-9" : "mt-2"} ${
                index === 0 && "bg-[rgba(255,255,255,0.17)]"
              } `}
            >
              <img src={Menu.src} alt="" className="w-6"/>
              <span className={`${!open && "hidden"} origin-left duration-200 text-lg`}>
                {Menu.title}
              </span>
            </li>
          ))}
        </ul>
      </div>
      <div className="h-screen flex-1 p-7">
        <h1 className="text-2xl font-semibold ">Home Page</h1>
      </div>
    </div>
  );
};
export default Sidebar1;
