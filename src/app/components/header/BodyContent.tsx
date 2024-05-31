import Image from "next/image";
import Link from "next/link";

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

const BodyContent: React.FC<BodyContentProps> = ({ item }) => {
  return (
    <div className="py-20 lg:px-14 xs:px-8 px-4 overflow-y-hidden ">
      <div className=" max-w-6xl mx-auto xl:grid xl:grid-cols-4">
        <div className="xl:col-span-3 xl:border-r-2 border-gray-500/50">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-4 ">
              {VEHICLES.map((vehicle, i) => (
                <div
                  className="my-2 flex flex-col items-center justify-center"
                  key={i}
                >
                  <div className="relative h-full w-full ">
                    <Image
                      src={vehicle.src}
                      width={195}
                      height={300}
                      alt={vehicle.title}
                    />
                  </div>
                  <div className="flex flex-col items-center justify-center">
                    <span className="font-medium">{vehicle.title}</span>
                    <div className="flex flex-row gap-2 text-sm text-gray-600">
                      <span className="underline">Learn</span>{" "}
                      <span className="underline">Order</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="xl:col-span-1 px-8  ">
          <div className="flex my-4 mx-4 flex-col justify-center items-left">
            {VEHICLE_ITEMS.map((vehicleItem, i) => (
              <Link
                href={"/"}
                key={i}
                className="hover:underline underline-offset-1 font-medium text-[15px] tracking-[0.0225em] text-gray-700 py-[3.5px] px-4"
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
