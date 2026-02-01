import { Menu } from "lucide-react";
import Image from "next/image";
import React from "react";
import AstroInput from "./astrov1/astro-input";
import { IoHome } from "react-icons/io5";
import { MdOutlineExplore } from "react-icons/md";
import { CiSearch } from "react-icons/ci";
import { IoMdHome } from "react-icons/io";
import {
  HiOutlineBell,
  HiOutlineUser,
  HiOutlineUserGroup,
} from "react-icons/hi";

function AppHeader() {
  return (
    <header className="bg-[#F5E5F5] border-b border-gray-200 ">
      <div className="grid grid-cols-2 lg:grid-cols-[1fr_520px_1fr] md:grid-cols-[220px_1fr_220px] items-center md:px-[24px] lg:h-[80px] md:h-[60px] pt-3  pb-1 md:pt-0 md:pb-0 px-[10px]">
        <div className="flex items-center gap-3">
          <div className="md:hidden block">
            <Menu strokeWidth={3} className="-mt-2" />
          </div>

          <Image
            src="/logo.svg"
            alt="Logo"
            width={146}
            height={35}
            className="md:w-[146px] h-[35px] w-[120px]  "
          />

          <AstroInput placeholder="Search" />
        </div>
        <nav className=" justify-center items-center grid md:grid-cols-5 grid-cols-6  md:h-full md:static fixed left-0 bottom-0 w-full md:bg-transparent bg-[#F5E5F5] h-[60px] md:h-none">
          {/* Active */}
          <button className="relative flex items-center justify-center lg:h-[80px] md:h-[60px]  cursor-pointertext-primary">
            <IoHome className="text-2xl" />
            <div className="absolute bottom-0 w-full h-1 bg-primary hidden md:block"></div>
          </button>

          {/* Inactive */}
          <button className="flex items-center justify-center lg:h-[80px] md:h-[60px]  cursor-pointer  text-gray-400  hover:text-gray-600">
            <MdOutlineExplore className="text-2xl" />
          </button>

          <button className="flex items-center justify-center lg:h-[80px] md:h-[60px]  cursor-pointer  text-gray-400  hover:text-gray-600">
            <HiOutlineUserGroup className="text-2xl" />
          </button>

          <button className="flex items-center justify-center lg:h-[80px] md:h-[60px]  cursor-pointer  text-gray-400  hover:text-gray-600">
            <HiOutlineUserGroup className="text-2xl" />
          </button>

          <button className="flex items-center justify-center lg:h-[80px] md:h-[60px]  cursor-pointer  text-gray-400  hover:text-gray-600">
            <HiOutlineBell className="text-2xl" />
          </button>
          <button className="flex items-center justify-center lg:h-[80px] md:h-[60px]  cursor-pointer  text-gray-400  hover:text-gray-600 md:hidden">
            <HiOutlineUser className="text-xl" />
          </button>
        </nav>

        <div className="md:flex items-center gap-[18px] justify-end hidden">
          <button className="w-[30px] h-[30px] bg-gray-200 rounded-full flex items-center justify-center hover:bg-gray-300">
            <IoMdHome />
          </button>
          <button className="w-[30px] h-[30px] bg-gray-200 rounded-full flex items-center justify-center hover:bg-gray-300">
            <IoMdHome />
          </button>
          <button className="w-[30px] h-[30px] bg-purple-700 rounded-full flex items-center justify-center hover:bg-purple-800">
            <IoMdHome />
          </button>
        </div>
        <div className="md:hidden flex items-center justify-end">
          <CiSearch
            strokeWidth={1}
            className="text-primary text-[30px] -mt-2"
          />
        </div>
      </div>
    </header>
  );
}

export default AppHeader;
