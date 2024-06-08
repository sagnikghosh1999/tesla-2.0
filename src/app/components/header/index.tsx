"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { IoGlobeOutline, IoCloseSharp } from "react-icons/io5";
import { AiOutlineQuestionCircle } from "react-icons/ai";
import { HiOutlineUserCircle } from "react-icons/hi2";
import BodyContent from "./BodyContent";

const HEADER_ITEMS = ["Vehicles", "Energy", "Charging", "Discover", "Shop"];
enum ITEMS {
  Vehicles,
  Energy,
  Charging,
  Discover,
  Shop,
}

const DISCOVER_ITEMS = [
  "Existing Inventory",
  "Used Inventory",
  "Trade-In",
  "Test Drive",
  "Insurance",
  "Cybertruck",
  "Roadster",
  "Semi",
  "Charging",
  "Powerwall",
  "Commercial Energy",
  "Utilities",
  "Find Us",
  "Support",
  "Investor Relations",
];

const VEHICLE_ITEMS = [
  "Inventory",
  "Used Cars",
  "Demo Drive",
  "Trade-in",
  "Compare",
  "Help Me Charge",
  "Fleet",
  "Semi",
  "Roadster",
];

const Header = () => {
  const [show, setShow] = useState(false);
  const [item, setItem] = useState<string | null>(null);
  return (
    <div>
      <div
        className="fixed z-[1000] lg:px-14 xs:px-8 px-4 top-0 left-0 right-0 flex items-center justify-between min-h-[60px] w-full "
        id="header-wrapper"
      >
        <div className="relative h-6 w-28 cursor-pointer" id="header-logo">
          <Link href="/">
            <Image
              src="/images/logo.svg"
              layout="fill"
              objectFit="contain"
              alt="logo"
            />
          </Link>
        </div>
        <div
          className="hidden lg:inline-flex items-center justify-center flex-1 "
          id="header-items"
        >
          <div className="flex items-center space-x-4">
            {HEADER_ITEMS &&
              HEADER_ITEMS.map((headerItem, index) => (
                <span
                  key={index}
                  className="font-medium tracking-wide py-0.5 px-2 hover:bg-gray-200  rounded transition duration-300 ease-in flex-nowrap cursor-pointer text-[15px]"
                  onClick={() => {
                    headerItem === item ? setShow(false) : setShow(true);
                    headerItem === item ? setItem(null) : setItem(headerItem);
                  }}
                >
                  {headerItem}
                </span>
              ))}
          </div>
        </div>
        <div className="flex items-center space-x-0.5" id="header-right">
          <Link href={`/`}>
            <span className="font-medium p-2 hover:bg-gray-200  rounded transition duration-300 ease-in flex-nowrap cursor-pointer hidden md:inline-flex">
              <IoGlobeOutline size={24} />
            </span>
          </Link>

          <Link href={`/`}>
            <span className="font-medium p-2 hover:bg-gray-200  rounded transition duration-300 ease-in flex-nowrap cursor-pointer hidden md:inline-flex">
              <AiOutlineQuestionCircle size={24} />
            </span>
          </Link>

          <Link
            href={"/"}
            className="font-medium py-0.5 px-2 hover:bg-gray-200  rounded transition duration-300 ease-in flex-nowrap cursor-pointer hidden md:inline-flex"
          >
            <HiOutlineUserCircle size={24} />
          </Link>
          <button
            className="font-medium py-0.5 px-2 hover:bg-gray-200  rounded transition duration-300 ease-in flex-nowrap cursor-pointer md:hidden"
            onClick={() => setShow((prev) => !prev)}
            id="toggle-sidebar"
          >
            Menu
          </button>
        </div>
      </div>

      {show && (
        <div
          onClick={() => setShow((prev) => !prev)}
          className="fixed cursor-pointer z-40 inset-0 bg-gray-600/20"
        ></div>
      )}
      <div
        className={` ${
          show
            ? "bg-white overflow-x-hidden overflow-y-scroll xl:overflow-hidden z-[100]  translate-y-[0%] duration-500 drop-shadow-[0_35px_135px_rgba(0,0,0,0.5)] px-2 md:px-6 pt-6 h-full fixed w-full  xl:h-[500px]  left-0 top-0"
            : "bg-white  -translate-y-[300%] duration-500 drop-shadow-[0_35px_135px_rgba(0,0,0,0.5)] px-6 pt-6 h-full fixed w-full left-0 top-0"
        }`}
        id="header-menu-wrapper"
      >
        <BodyContent item={item} />
      </div>
    </div>
  );
};

export default Header;
