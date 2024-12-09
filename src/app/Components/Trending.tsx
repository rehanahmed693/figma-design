import Image from "next/image";

export default function Trending() {
  return (
    <div className="w-[80%] mx-auto mt-14">
      <h3 className="text-[#151875] text-[42px] text-center">
        Trending Products
      </h3>
      <div className="flex justify-center items-center gap-4 flex-wrap">
        <div className="flex flex-col justify-center items-center w-[240px] h-[321px] shadow-md">
          <div className="flex justify-center items-center w-[220px] h-[222px] bg-[#F6F7FB]">
            <Image
              src="/images/image11.png"
              alt="image"
              width={150}
              height={150}
            />
          </div>

          <h1 className="text-[#151875] py-2 text-[16px] text-center font-bold">
            Cantilever chair
          </h1>

          <p className="text-[#151875] text-[14px] text-center ml-6">
            $26.00 <span className="text-[12px] text-[#32208a50]">$42.00</span>{" "}
          </p>
        </div>

        <div className="flex flex-col justify-center items-center w-[240px] h-[321px] shadow-md">
          <div className="flex justify-center items-center w-[220px] h-[222px] bg-[#F6F7FB]">
            <Image
              src="/images/image12.png"
              alt="image"
              width={150}
              height={150}
            />
          </div>

          <h1 className="text-[#151875] py-2 text-[16px] text-center font-bold">
            Cantilever chair
          </h1>

          <p className="text-[#151875] text-[14px] text-center ml-6">
            $26.00 <span className="text-[12px] text-[#32208a50]">$42.00</span>{" "}
          </p>
        </div>

        <div className="flex flex-col justify-center items-center w-[240px] h-[321px] shadow-md">
          <div className="flex justify-center items-center w-[220px] h-[222px] bg-[#F6F7FB]">
            <Image
              src="/images/image13.png"
              alt="image"
              width={150}
              height={150}
            />
          </div>

          <h1 className="text-[#151875] py-2 text-[16px] text-center font-bold">
            Cantilever chair
          </h1>

          <p className="text-[#151875] text-[14px] text-center ml-6">
            $26.00 <span className="text-[12px] text-[#32208a50]">$42.00</span>{" "}
          </p>
        </div>

        <div className="flex flex-col justify-center items-center w-[240px] h-[321px] shadow-md">
          <div className="flex justify-center items-center w-[220px] h-[222px] bg-[#F6F7FB]">
            <Image
              src="/images/image14.png"
              alt="image"
              width={150}
              height={150}
            />
          </div>

          <h1 className="text-[#151875] py-2 text-[16px] text-center font-bold">
            Cantilever chair
          </h1>

          <p className="text-[#151875] text-[14px] text-center ml-6">
            $26.00 <span className="text-[12px] text-[#32208a50]">$42.00</span>{" "}
          </p>
        </div>

        <div className="w-[360px] h-[240px] bg-[#FFF6FB]">
          <h1 className="text-[#151875] text-[24px] font-semibold py-3 px-3">
            23% off in all products
          </h1>
          <button className="text-[16px] font-semibold px-3 text-[#FB2E86] border-b-2">
            Shop Now
          </button>

          <div className="w-[180px] h-[170px] ml-40 ">
            <Image src="/images/mic.png" alt="" width={180} height={170} />
          </div>
        </div>
        <div className="w-[360px] h-[240px] bg-[#EEEFFB]">
          <h1 className="text-[#151875] text-[24px] font-semibold py-3 px-3">
            23% off in all products
          </h1>
          <button className="text-[16px] font-semibold px-3 text-[#FB2E86] border-b-2">
            {" "}
            View Collection
          </button>

          <div className="w-[200px] h-[120px] ml-36 ">
            <Image src="/images/daraz.png" alt="" width={200} height={120} />
          </div>
        </div>

        <div className="flex-col w-[260px] gap-1">
          <div className="flex justify-between items-center">
            <div className="bg-[#F5F6F8] w-[90px] h-[80px]">
              <Image src="/images/image17.png" alt="" width={80} height={50} />
            </div>
            <p className="text-[#151875] text-[16px]">Executive Seat chair</p>
          </div>
          <div className="flex justify-between items-center">
            <div className="bg-[#F5F6F8] w-[90px] h-[80px]">
              <Image src="/images/image15.png" alt="" width={80} height={50} />
            </div>
            <p className="text-[#151875] text-[16px]">Executive Seat chair</p>
          </div>
          <div className="flex justify-between items-center gap-1">
            <div className="bg-[#F5F6F8] w-[90px] h-[80px]">
              <Image src="/images/image15.png" alt="" width={80} height={50} />
            </div>
            <p className="text-[#151875] text-[16px]">Executive Seat chair</p>
          </div>
        </div>
      </div>
    </div>
  );
}
