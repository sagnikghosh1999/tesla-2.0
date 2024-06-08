"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

interface BodyContentProps {
  item: string | null;
}

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

const VEHICLES = [
  { title: "Model S", src: "/images/megamenu/model-s.png" },
  { title: "Model 3", src: "/images/megamenu/model-3.png" },
  { title: "Model X", src: "/images/megamenu/model-x.png" },
  { title: "Model Y", src: "/images/megamenu/model-y.png" },
  { title: "Cybertruck", src: "/images/megamenu/cybertruck.png" },
  { title: "Help Me Choose", src: "/images/megamenu/HMC-RedBlue-LHD.png" },
];

const ENERGY = [
  { title: "Solar Panels", src: "/images/megamenu/Solar-Panels.png" },
  { title: "Solar Roof", src: "/images/megamenu/solar-roof.png" },
  { title: "Poerwall", src: "/images/megamenu/powerwall-US.png" },
  { title: "Megapack", src: "/images/megamenu/Megapack.png" },
];

const BodyContent: React.FC<BodyContentProps> = ({ item }) => {
  return (
    <div className="py-12 lg:py-20 lg:px-14 md:px-8 px-4 overflow-y-hidden ">
      <div className=" max-w-6xl mx-auto w-full flex flex-col  xl:grid xl:grid-cols-4">
        <div className="xl:col-span-3 flex-grow xl:border-r-2 border-gray-500/50">
          <div className="">
            <div className="grid lg:grid-cols-4 md:grid-cols-3 msx:grid-cols-2 grid-cols-1">
              {item === "Vehicles" &&
                VEHICLES.map((vehicle, i) => (
                  <div
                    className="my-2 flex msx:flex-col flex-row items-center msx:justify-center justify-evenly"
                    key={i}
                  >
                    <div className="flex-grow flex-1">
                      <Image
                        src={vehicle.src}
                        width={195}
                        height={300}
                        alt={vehicle.title}
                      />
                    </div>
                    <div className="flex flex-col items-center justify-center -mt-2">
                      <span className="font-medium ">{vehicle.title}</span>
                      <div className="flex flex-row gap-2 leading-4 mb-2 text-sm text-gray-600">
                        <span className="underline">Learn</span>{" "}
                        <span className="underline">Order</span>
                      </div>
                    </div>
                  </div>
                ))}
              {item === "Energy" &&
                ENERGY.map((energy, i) => (
                  <div
                    className="my-2 flex msx:flex-col flex-row items-center msx:justify-center justify-evenly"
                    key={i}
                  >
                    <div className="flex-grow flex-1">
                      <Image
                        src={energy.src}
                        width={195}
                        height={300}
                        alt={energy.title}
                      />
                    </div>
                    <div className="flex flex-col items-center justify-center -mt-2">
                      <span className="font-medium ">{energy.title}</span>
                      <div className="flex flex-row gap-2 leading-4 mb-2 text-sm text-gray-600">
                        <span className="underline">Learn</span>{" "}
                        <span className="underline">Order</span>
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>
        <div className="w-full h-[2px] bg-gray-500/50 rounded xl:hidden"></div>
        <div className="xl:col-span-1 xl:px-8 ">
          <div className="flex my-4 xl:mx-4 flex-col justify-center items-left">
            {VEHICLE_ITEMS.map((vehicleItem, i) => (
              <Link
                href={"/"}
                key={i}
                className="font-medium text-lg md:text-base px-3 py-2 flex justify-start flex-1 hover:bg-gray-200  rounded transition duration-300 ease-in flex-nowrap cursor-pointerfont-medium text-[15px] tracking-[0.0225em] text-gray-700 xl:py-[3.5px] xl:px-4 "
              >
                {vehicleItem}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BodyContent;
