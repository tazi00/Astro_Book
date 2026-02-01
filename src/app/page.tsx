import Image from "next/image";
import { HiOutlineBell, HiOutlineUserGroup } from "react-icons/hi";
import { IoMdHome } from "react-icons/io";
import { IoHome } from "react-icons/io5";
import { HiOutlineUser, HiOutlineBookmark, HiOutlineCog } from "react-icons/hi";

import { MdOutlineExplore, MdOutlinePodcasts } from "react-icons/md";

import { RiUserStarLine, RiGroupLine, RiFileListLine } from "react-icons/ri";

import { FaRegHandPaper } from "react-icons/fa";
import { IoChevronDown } from "react-icons/io5";
import { FiMoreHorizontal, FiSearch } from "react-icons/fi";
import { CiSearch } from "react-icons/ci";
import AstroInput from "@/components/astrov1/astro-input";
import { Hamburger, HamburgerIcon, Menu } from "lucide-react";
import AppHeader from "@/components/app-header";

export default function Home() {
  return (
    <>
      <div className="lg:overflow-y-hidden h-screen">
        <AppHeader />
        <main className="grid lg:grid-cols-[1fr_520px_1fr] md:grid-cols-[220px_1fr_220px] grid-cols-1 md:px-[24px] px-[5px] h-screen items-start ">
          <aside className="hidden md:block">
            <nav className="flex flex-col gap-1 lg:w-[250px] py-4 ">
              {/* Profile */}
              <div className="flex items-center gap-3 px-3 py-2 rounded-lg text-purple-700 font-medium">
                <HiOutlineUser className="text-xl" />
                <span>Suprio Karmakar</span>
              </div>

              <SidebarItem icon={RiUserStarLine} label="Astrologers" active />
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

          <div className="lg:overflow-y-scroll">
            <div className="h-[40px] w-full bg-primary my-5"></div>
            <div className="space-y-4 md:overflow-y-scroll h-screen">
              <div className="h-[300px] w-full bg-primary grid place-content-center">
                POST
              </div>
              <div className="h-[300px] w-full bg-primary grid place-content-center">
                POST
              </div>
              <div className="h-[300px] w-full bg-primary grid place-content-center">
                POST
              </div>
              <div className="h-[300px] w-full bg-primary grid place-content-center">
                POST
              </div>
            </div>
          </div>
          <div className="hidden md:flex flex-col gap-4  items-end  space-y-4 overflow-y-scroll h-screen">
            <TopAstrologersSidebar />
            <div className="lg:w-[310px]">
              <div className="flex items-center justify-between mb-3">
                <h2 className="text-sm font-semibold text-gray-700">
                  Recommended for you
                </h2>

                <div className="flex items-center gap-3 text-gray-400">
                  <FiSearch className="text-lg cursor-pointer hover:text-gray-600" />
                  <FiMoreHorizontal className="text-lg cursor-pointer hover:text-gray-600" />
                  <span className="text-xs text-purple-600 font-medium cursor-pointer">
                    See All
                  </span>
                </div>
              </div>

              {/* Grid */}
              <div className="grid grid-cols-2 gap-4">
                <RecommendCard
                  title="Gemstone Consultation"
                  img="/images/gemstone.jpg"
                />
                <RecommendCard title="Bracelets" img="/images/bracelet.jpg" />
                <RecommendCard title="Reiki healing" img="/images/reiki.jpg" />
                <RecommendCard title="Palmistry" img="/images/palmistry.jpg" />
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}

const SidebarItem = ({ icon: Icon, label, active, muted }: any) => {
  return (
    <button
      className={`
        flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium
        transition-colors
        ${
          active
            ? "bg-purple-100 text-purple-700"
            : muted
              ? "text-gray-400 hover:text-gray-600"
              : "text-gray-700 hover:bg-gray-100"
        }
      `}
    >
      <Icon className="text-xl" />
      <span>{label}</span>
    </button>
  );
};

function TopAstrologersSidebar() {
  const astrologers = Array.from({ length: 5 });

  return (
    <aside className="lg:w-[310px]  rounded-xl p-4">
      {/* Header */}
      <div className="mb-4 flex items-center justify-between">
        <h3 className="text-sm font-semibold text-gray-900">
          Top Astrologers for you
        </h3>

        <div className="flex items-center gap-2 text-xs text-purple-600">
          <button className="hover:underline">See all</button>
        </div>
      </div>

      {/* List */}
      <div className="space-y-3">
        {astrologers.map((_, i) => (
          <div
            key={i}
            className="flex items-center justify-between gap-3 rounded-lg p-2 hover:bg-gray-50"
          >
            {/* Left */}
            <div className="flex items-center gap-3">
              <div className="h-9 w-9 overflow-hidden rounded-full bg-gray-200" />

              <div className="leading-tight">
                <p className="text-sm font-medium text-gray-900">
                  Suprio Karmakar
                </p>
                <p className="text-xs text-gray-500">Vedic</p>
              </div>
            </div>

            {/* Action */}
            <button className="rounded-full bg-purple-600 px-3 py-1 text-xs font-medium text-white hover:bg-purple-700">
              Book Now
            </button>
          </div>
        ))}
      </div>
    </aside>
  );
}

const RecommendCard = ({ img, title }: any) => {
  return (
    <div className="flex flex-col items-center gap-2 bg-red-400">
      <div className="w-full aspect-square rounded-2xl overflow-hidden bg-gray-100">
        <img src={img} alt={title} className="w-full h-full object-cover" />
      </div>
      <p className="text-xs font-medium text-purple-600 text-center">{title}</p>
    </div>
  );
};
