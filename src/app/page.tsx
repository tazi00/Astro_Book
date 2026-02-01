"use client";

import Image from "next/image";
import { HiOutlineUser, HiOutlineBookmark, HiOutlineCog } from "react-icons/hi";

import { MdOutlineExplore, MdOutlinePodcasts } from "react-icons/md";

import { RiUserStarLine, RiGroupLine, RiFileListLine } from "react-icons/ri";

import { FaRegHandPaper } from "react-icons/fa";
import { IoChevronDown } from "react-icons/io5";
import AstroInput from "@/components/astrov1/astro-input";
import { Menu, Search } from "lucide-react";
import AppHeader from "@/components/app-header";
import { BsThreeDots } from "react-icons/bs";
import { useSidebarStore } from "@/store/useSidebar.store";
import clsx from "clsx";
import AppSidebar from "@/components/app-sidebar";

export default function Home() {
  return (
    <>
      <div className="lg:overflow-y-hidden h-screen">
        <AppHeader />
        <main className="grid lg:grid-cols-[1fr_520px_1fr] md:grid-cols-[220px_1fr_220px] grid-cols-1 md:px-[24px] px-[5px] h-screen items-start ">
          <AppSidebar />
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
          <aside className="hidden md:flex flex-col   items-end overflow-y-scroll h-screen">
            <TopAstrologersSidebar />
            <div className="lg:w-[310px] p-4 mb-30 border border-red-600">
              <div className="mb-2 flex items-center justify-between">
                <h3 className="text-base font-medium text-gray-900">
                  Recommended for you
                </h3>

                <div className=" ">
                  <ul className="flex items-center gap-4">
                    <li>
                      <button className="">
                        <Search size={20} className="mt-2 text-primary" />
                      </button>
                    </li>
                    <li>
                      <button className="">
                        <BsThreeDots size={20} className="mt-2" />
                      </button>
                    </li>
                  </ul>
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
          </aside>
        </main>
      </div>
    </>
  );
}

function TopAstrologersSidebar() {
  const astrologers = Array.from({ length: 5 });

  return (
    <div className="lg:w-[310px]  rounded-xl p-4">
      {/* Header */}
      <div className="mb-2 flex items-center justify-between">
        <h3 className="text-base font-medium text-gray-900">
          Top Astrologers for you
        </h3>

        <div className=" ">
          <ul className="flex items-center gap-4">
            <li>
              <button className="">
                <Search size={20} className="mt-2 text-primary" />
              </button>
            </li>
            <li>
              <button className="">
                <BsThreeDots size={20} className="mt-2" />
              </button>
            </li>
          </ul>
        </div>
      </div>

      {/* List */}
      <div className="">
        <div className="flex items-center justify-end">
          <button className="text-secondary text-sm font-light">See All</button>
        </div>

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
                <div className="flex items-center justify-between gap-2">
                  <p className="text-xs text-gray-500">Vedic</p>
                  <p className="text-xs text-primary">3 Following</p>
                </div>
              </div>
            </div>

            {/* Action */}
            <button className="rounded bg-primary flex items-center justify-center h-[25px] w-[80px] text-[10px] font-medium text-white hover:bg-primary/80">
              Book Now
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

const RecommendCard = ({ img, title }: any) => {
  return (
    <div className="flex flex-col items-center gap-2">
      <div className="w-full aspect-square rounded-2xl overflow-hidden bg-gray-100">
        <img
          src={img}
          alt={title}
          className="w-full h-full object-cover bg-red-50"
        />
      </div>
      <p className="text-xs font-medium text-primary text-center">{title}</p>
    </div>
  );
};
