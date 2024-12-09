import Image from "next/image";

export default function Categories() {
  return (
    <div>
      <h3 className="sm:text-[42px] text-[24px] text-[#151875] text-center mt-20 mb-4">
        Top Categories
      </h3>

      <div className="w-[80%] sm:mx-auto ml-16 sm:ml- sm:flex justify-center gap-4">
        <div className="flex flex-col justify-center items-center w-[240px] h-[321px]">
          <div className="flex justify-center items-center w-[240px] h-[222px] rounded-3xl sm:rounded-full bg-[#F6F7FB] shadow-sm">
            <Image
              src="/images/image21.png"
              alt="image"
              width={150}
              height={150}
            />
          </div>

          <h1 className="text-[#151875] py-2 sm:text-[20px] text-center">
            Mini LCW Chair
          </h1>

          <p className="text-[#151875] text-[16px] text-center ml-6">$56.00</p>
        </div>

        <div className="flex flex-col justify-center items-center w-[240px] h-[321px]">
          <div className="flex justify-center items-center w-[240px] h-[222px] rounded-3xl sm:rounded-full bg-[#F6F7FB] shadow-sm">
            <Image
              src="/images/image22.png"
              alt="image"
              width={150}
              height={150}
            />
          </div>

          <h1 className="text-[#151875] py-2 text-[20px] text-center">
            Mini LCW Chair
          </h1>

          <p className="text-[#151875] text-[16px] text-center ml-6">$56.00</p>
        </div>
        <div className="flex flex-col justify-center items-center w-[240px] h-[321px]">
          <div className="flex justify-center items-center w-[240px] h-[222px] rounded-3xl sm:rounded-full bg-[#F6F7FB] shadow-sm">
            <Image
              src="/images/image23.png"
              alt="image"
              width={150}
              height={150}
            />
          </div>

          <h1 className="text-[#151875] py-2 text-[20px] text-center">
            Mini LCW Chair
          </h1>

          <p className="text-[#151875] text-[16px] text-center ml-6">$56.00</p>
        </div>
        <div className="flex flex-col justify-center items-center w-[240px] h-[321px]">
          <div className="flex justify-center items-center w-[240px] h-[222px] rounded-3xl sm:rounded-full bg-[#F6F7FB] shadow-sm">
            <Image
              src="/images/image21.png"
              alt="image"
              width={150}
              height={150}
            />
          </div>

          <h1 className="text-[#151875] py-2 text-[20px] text-center">
            Mini LCW Chair
          </h1>

          <p className="text-[#151875] text-[16px] text-center ml-6">$56.00</p>
        </div>
      </div>
    </div>
  );
}
