import { useSidebarStore } from "@/store/useSidebar.store";
import clsx from "clsx";
import { Cross, Menu, X } from "lucide-react";
import Image from "next/image";
import React from "react";
import AstroInput from "./astrov1/astro-input";
import { HiOutlineBookmark, HiOutlineCog, HiOutlineUser } from "react-icons/hi";
import { RiFileListLine, RiGroupLine, RiUserStarLine } from "react-icons/ri";
import { MdOutlineExplore, MdOutlinePodcasts } from "react-icons/md";
import { FaRegHandPaper } from "react-icons/fa";
import { IoChevronDown } from "react-icons/io5";

const SidebarItem = ({ icon: Icon, label, active, muted }: any) => {
  return (
    <button
      className={`
        flex items-center gap-3 px-3 py-2 rounded-lg text-lg font-medium
        transition-colors cursor-pointer
        ${
          active
            ? "bg-primary/10 text-primary"
            : muted
              ? "text-gray-400 hover:text-gray-600"
              : "text-secondary hover:bg-primary/10 hover:text-primary"
        }
      `}
    >
      <Icon className="text-xl" />
      <span>{label}</span>
    </button>
  );
};

function AppSidebar() {
  const isOpen = useSidebarStore((s) => s.isOpen);
  const close = useSidebarStore((s) => s.close);
  return (
    <>
      {isOpen && (
        <div
          onClick={close}
          className="fixed inset-0 bg-black/40 z-40 md:hidden"
        />
      )}
      <aside
        className={clsx(
          "z-50 bg-[#F5E5F5]",
          "w-[300px] h-screen",
          "fixed md:static top-0 left-0",
          "transition-transform duration-300 ease-in-out",
          "md:translate-x-0",
          isOpen ? "translate-x-0" : "-translate-x-full",
        )}
      >
        <nav className="flex flex-col gap-1 lg:w-[250px] md:py-4 ">
          {/* Profile */}

          <div className="md:hidden px-3 py-4">
            <div className="flex items-center gap-3">
              <div className="md:hidden block">
                <button onClick={close}>
                  <X strokeWidth={3} className="-mt-2" />
                </button>
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
          </div>
          <div className="md:flex hidden items-center gap-3 px-3 py-2 rounded-lg text-primary font-medium text-lg">
            <HiOutlineUser className="text-xl" />
            <span>Suprio Karmakar</span>
          </div>

          <SidebarItem icon={RiUserStarLine} label="Astrologers" />
          <SidebarItem icon={MdOutlineExplore} label="Explore" />
          <SidebarItem icon={MdOutlinePodcasts} label="Podcast" />
          <SidebarItem icon={FaRegHandPaper} label="AstroZone" />
          <SidebarItem icon={HiOutlineBookmark} label="Saved" />
          <SidebarItem icon={RiGroupLine} label="Following" />
          <SidebarItem icon={RiFileListLine} label="Blogs" />
          <SidebarItem icon={HiOutlineCog} label="Settings" />

          <SidebarItem icon={IoChevronDown} label="See more" muted />
        </nav>
      </aside>
    </>
  );
}

export default AppSidebar;
