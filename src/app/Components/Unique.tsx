import Image from "next/image";

export default function Unique() {
  return (
    <div className="w-full h-full sm:h-[579px] bg-[#F1F0FF] flex justify-center items-center mt-16">
      <div className="sm:flex  w-[65%] sm:h-[500px] gap-1 mx-auto">
        <div className="sm:w-[75%] sm:h-[500px] mt-5 sm:mt-0">
          <div className="rounded-full bg-pink-300">
            <Image src="/images/unique.png" alt="" width={600} height={500} />
          </div>
        </div>
        <div className="sm:mt-20 mb-40">
          <h1 className="sm:text-[35px] text-[24px]">
            Unique Features Of leatest & Trending Poducts
          </h1>
          <ul className="text-[14px] font-medium text-[#ACABC3]">
            <li className="py-2">
              All frames constructed with hardwood solids and laminates
            </li>
            <li className="py-2">
              Reinforced with double wood dowels, glue, screw - nails corner
              blocks and machine nails
            </li>
            <li className="py-2">
              Arms, backs and seats are structurally reinforced
            </li>
          </ul>

          <button className="w-[157px] h-[45px] text-[17px] mt-8 bg-pink-600 text-white">
            Add To Cart
          </button>
        </div>
      </div>
    </div>
  );
}
